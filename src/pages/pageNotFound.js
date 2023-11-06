import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>Oops! la page que vous essayez d'atteindre n'existe pas.</h1>
            <p>pour plus t'aide voici les liens utiles:</p>
            <Link to='/home'>Home</Link>
        </div>
    )
}