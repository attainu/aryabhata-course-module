import { Link } from 'react-router-dom';
const Layout = (props) => {
    return (
        <>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li ><Link to={"/"}>Home</Link></li>
                        <li ><Link to={"/todos"}>Task List</Link></li>
                    </ul>
                </div>
            </nav>
            {props.children}
            <footer>Redux</footer>
        </>
    )
};

export default Layout;