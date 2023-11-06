import * as Yup from 'yup';
import { emailRegex, passwordRegex } from '../../constant/regex';

// * contrainte et validation des inputs de formik grace a yup :)

export const schemaFormRegistration = Yup.object().shape({
    email: Yup.string().email('adresse email invalide')
                        .required('L\'adresse email est obligatoire')
                        .matches(emailRegex, 'adresse email invalide'),
    password: Yup.string().required('Le mot de passe est obligatoire')
                        .matches(
        passwordRegex,
        "Doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial"
    ),
    passwordConfirmation: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'les mots de passent ne correspondent pas'),
    box_validation: Yup.boolean()
                        .oneOf([true], "Vous devez accepter les conditions d'utilisations")
});