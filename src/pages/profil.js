import React, { useEffect, useContext, useState } from 'react'

import Auth from '../contexts/Auth';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { URL } from '../utils/constant/backURL';
import { getItem } from '../services/localeStorage';
import { Formik, Form } from 'formik';
import { schemaFormUser } from '../utils/Formik-yup/yup/yupUser';
import { MyTextInput } from './../components/inputs/input';


const Profil = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(Auth);
  const [user, setUser] = useState({});

  const myClassName = 'flex my-2 flex-col md:h-24';

  const profil = async () => {
    await axios.get(URL.user + `/${getItem('Id')}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getItem('Token') //the token is a variable which holds the token
      }
    }).then((res) => {
      console.log(res.data);
      setUser({
        email: res.data.email,
        lastName: res.data.lastname,
        firstName: res.data.firstname
      })
    }).catch(function (error) {
      // handle error
      console.log('erreur', error.response.status);
      if (error.response.status === 401) {
        navigate('/logout')
      }
    })
  }

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/home')
    } else {
      console.log(getItem('Token'));
      console.log(getItem('Id'));
      profil();
    }
  }, [])

  return (
    <div className='flex justify-center'>
      {user && (

        <Formik
          initialValues={user}
          onSubmit={(values) => {
            console.log('test', values);
            const updateProfil = async () => {
              await axios.put(URL.user + `/${getItem('Id')}`, {
                lastname: values.lastName,
                firstname: values.firstName
              }, {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer ' + getItem('Token')
                }
              }).then((res) => {
                console.log(res);
                navigate('/profil')
              })
            }

            updateProfil();
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
            }, 400);
          }}
          validationSchema={schemaFormUser}
          enableReinitialize
        >
          {(props) => (
            <Form className='flex flex-col p-2 w-80'>
              {console.log(props)}
              Profil
              <div>
                <p>
                  {user.email}
                </p>
                <div className={myClassName}>
                  <MyTextInput
                    label="Votre nom"
                    name="lastName"
                    type="text"
                    placeholder="votre nom"
                    onChange={e => setUser({ ...user, lastName: e.target.value })}
                  />
                </div>
                <div className={myClassName}>
                  <MyTextInput
                    label="Votre prénom"
                    name="firstName"
                    type="text"
                    placeholder="votre prénom"
                    onChange={e => setUser({ ...user, firstName: e.target.value })}
                  />
                </div>
              </div>

              <button className='my-2 md:my-1 self-center font-bold p-2 border-2' type="submit">Modifier</button>

            </Form>
          )}
        </Formik>
      )}
    </div>
  )
}

export default Profil