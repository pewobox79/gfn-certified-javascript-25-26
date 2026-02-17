import { NavLink } from "react-router-dom";
const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "isActiveLink" : ""
                        }
                        to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "isActiveLink" : ""
                        }
                        to="/about">About</NavLink>
                </li>

                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "isActiveLink" : ""
                        }
                        to="/dashboard/posts">Posts</NavLink>
                </li>

                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "isActiveLink" : ""
                        }
                        to="/admin/login">userLogin</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation