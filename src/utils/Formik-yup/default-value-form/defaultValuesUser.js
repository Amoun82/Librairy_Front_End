import { datetime } from "../../constant/dateTimeNow";

// * value initiale utiliser par formik

export const defaultValuesUser = {
    roles: 'ROLE_USER',
    email: '',
    password: '',
    passwordConfirmation: '',
    box_validation: false,
    lastname: "",
    firstname: "",
    createdAt: datetime,
    isActive: true
};