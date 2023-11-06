import * as Yup from 'yup';
import { emailRegex, passwordRegex } from '../../constant/regex';

export const schemaFormLogin = Yup.object().shape({
    email: Yup.string().email('adresse email invalide')
                        .required('L\'adresse email est obligatoire')
                        .matches(emailRegex, 'adresse email invalide'),
    password: Yup.string().required('Le mot de passe est obligatoire')
                        .matches(
        passwordRegex,
        "Doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial"
    )
});