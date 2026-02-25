import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import HomePage from "../pages/Homepage";
import MainLayout from "../layouts/MainLayout";
import Users from "../pages/Users";
import SingleUser from "../pages/SingleUser";
import Posts from "../pages/Posts";
import SinglePost from "../pages/SinglePost";
import Dashboard from "../pages/Dashboard";
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import Login from "../pages/Login";
import AuthorizationLayout from "../layouts/AuthorizationLayout";
import DynamicPage from "../pages/DynamicPage";
//http://localhost:5173/dynamic/homepage
export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="users" element={<Users />} />
        <Route path="dynamic/:slug" element={<DynamicPage/>}/>
        <Route path='users/:id' element={<SingleUser />} />

        <Route path="posts/:id" element={<SinglePost />} />
        <Route path="admin/login" element={<Login />} />
        <Route path="dashboard" element={<AuthenticationLayout />}>
            <Route index element={<Dashboard />} />
            <Route element={<AuthorizationLayout />}>
                <Route path="posts" element={<Posts />} />
            </Route>
        </Route>
    </Route>
))

// Authentication => Identifizierung des users z.B. OAuth-Service 
// Authorization => Berechtigung über meine Möglichkeiten über USERROLLEN mit der App zu arbeiten (SuperAdmin, Editor, Reporter)