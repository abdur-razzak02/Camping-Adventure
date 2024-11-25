import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1>Error</h1>
            <Link to={'/'} className="btn bg-theme hover:bg-success text-white">Home</Link>
        </div>
    );
};

export default ErrorPage;