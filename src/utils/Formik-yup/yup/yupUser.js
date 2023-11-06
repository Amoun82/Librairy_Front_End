import * as Yup from 'yup';

// * contrainte et validation des inputs de formik grace a yup :)

export const schemaFormUser = Yup.object().shape({
  firstName: Yup.string().min(2, 'nom trop court').max(50, 'nom trop long !'),
  lastName: Yup.string().min(2, 'prenom trop court').max(50, 'prenom trop long !'),
});