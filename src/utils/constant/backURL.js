import { api } from "./api";

// * les URL back avec l'importation de la variable api

export const URL = {
    user: api + "api/users",
    fetchArticle: api + "api/articles",
    auth: api + "api/auth",
    books: api + "api/books"
}