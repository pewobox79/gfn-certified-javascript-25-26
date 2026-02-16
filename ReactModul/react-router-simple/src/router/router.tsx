import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import HomePage from "../pages/Homepage";
import MainLayout from "../layouts/MainLayout";
import Users from "../pages/Users";
import SingleUser from "../pages/SingleUser";
import Posts from "../pages/Posts";
import SinglePost from "../pages/SinglePost";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
        <Route index  element={<HomePage/>} />
        <Route path="about" element={<AboutUs />} />
        <Route path="users" element={<Users/>} />
        <Route path='users/:id' element={<SingleUser/>}/>
        <Route path="posts" element={<Posts/>}/>
        <Route path="posts/:id" element={<SinglePost/>}/>
    </Route>
))