import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <>
            <h2>About Us</h2>
            <p>This is the about page.</p>
            <p>check out our <Link to='/users'>Team</Link></p>
        </>
    );
};

export default AboutUs