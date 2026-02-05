import { BrowserRouter, Routes, Route, Link, useSearchParams, useParams } from 'react-router-dom';

// Components for navigation
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Link to the home page */}
        </li>
        <li>
          <Link to="/about">About</Link> {/* Link to the about page */}
        </li>
        <li>
          <Link to="/users">Users</Link> {/* Link to the about page */}
        </li>
      </ul>
    </nav>
  );
};

// Page components
const HomePage = () => {
  return (
    <>
      <Navbar />
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
    </>
  );
};


const UserProfile=()=>{

  const params = useParams()
  console.log("params", params)

  return <h1>hallo user {params.userId}</h1>
}

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <h2>About</h2>
      <p>This is the about page.</p>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      {' '}
      {/* Router for the entire application */}
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
      
          <Route path="/about" element={<AboutPage />} />
          <Route path="/user/:userId" element={<UserProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;