// ! les regex utilisés pour le mail et le mot de passe

// ! regex pour les adresses mails
export const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ ;

// ! Doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/ ;