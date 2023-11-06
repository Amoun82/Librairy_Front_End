import React, { useEffect, useContext } from 'react'

import axios from 'axios';

import { Formik, Form } from 'formik';

import { schemaFormLogin } from '../utils/Formik-yup/yup/yupLogin';
import { MyTextInput } from '../components/inputs/input';
import { URL } from '../utils/constant/backURL';

import { defaultValuesLogin } from '../utils/Formik-yup/default-value-form/defaultValuesLogin';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Auth from '../contexts/Auth';
import { addItem } from '../services/localeStorage';



const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookies] = useCookies(['account']);
  const { isAuthenticated, setIsAuthenticated, setHasRoles, setHasId } = useContext(Auth) ;


  const myClassName = 'flex my-2 flex-col md:h-24';

  const submit = async (objet) => {

    await axios.post(URL.auth, {
      email: objet.email,
      password: objet.password,
    }).then((res) => {

      // ! une fois logé on récuperer les infos de l'utilisateur et on les stocks dans le query
      if (res.status === 200) {
        console.log('response API',res.data);
        // setCookies('islogged', true, { maxAge: 900000, httpOnly: true, secure: true, sameSite: 'strict' });
        addItem('Token',res.data.token ) ;
        addItem('Roles',res.data.user.roles[0] ) ;
        addItem('Id',res.data.user.id ) ;
        setIsAuthenticated(true) ;
        setHasRoles(res.data.user.roles[0]) ;
        setHasId(res.data.user.id) ;

        // * l'utilisateur seras rediriger sur la home page
        removeCookies('account') ;
        removeCookies('alert') ;

        navigate('/home') ;
      }

    }).catch(function (error) {
      // handle error
      console.log('erreur', error.response.status);
      if (error.response.status === 401) {
        setCookies('account', 'inconnu, veuillez vous reconnectez ou inscrivez vous')
      }
    })
  };

  useEffect(() =>{
    if (isAuthenticated) {
      navigate('/profil')
    }
  }, [])

  return (
    <>

      {/* {cookies && console.log(cookies.account)} */}
      {cookies && (<div className={myClassName}>{cookies.account}</div>)}
      <Formik
        initialValues={defaultValuesLogin}
        validationSchema={schemaFormLogin}
        onSubmit={(values) => {
          submit(values);

          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
        }}
      >
        {() => (
          <Form className='flex flex-col p-2'>
            {/* le champ Email */}
            <div className={myClassName}>
              <MyTextInput
                label="Email"
                name="email"
                type="email"
                placeholder="saisissez votre adresse mail"
              />
            </div>
            {/* le champ password */}
            <div className={myClassName}>
              <MyTextInput
                label="Mot de passe"
                name="password"
                type="password"
                placeholder="saisissez votre mot de passe"
              />
            </div>
            <button className='my-2 md:my-1 bg-accent-2 self-center font-bold p-2 border-2 w-4/6 md:w-3/6' type="submit">Connexion</button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default Login