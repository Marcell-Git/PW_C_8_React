import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AdminUserPage from "../pages/AdminUserPage";
import DashboardPage from "../pages/DashboardPage";
import PesanTiketPage from "../pages/PesanTiketPage";
import PesanCamilanPage from "../pages/PesanCamilanPage";
import ProfilPage from "../pages/ProfilPage";
import AdminFilmPage from "../pages/AdminFilmPage";
import OrderCamilanPage from "../pages/OrderCamilanPage";



const router = createBrowserRouter([
    {
        path: "*",
        element: <div>404 Not Found!</div>
    },
    {
        path: "/",
        element: <LoginPage/>,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/home",
        element: <DashboardPage />,
    },
    {
        path: "/pesan-tiket",
        element: <PesanTiketPage />,
    },
    {
        path: "/camilan",
        element: <PesanCamilanPage />,
    },
    {
        path: "/pesanCamilan",
        element: <OrderCamilanPage />,
    },
    {
        path: "/profil",
        element: <ProfilPage />,
    },
    {
        path: "/admin/user",
        element: <AdminUserPage />,
    },
    {
        path: "/admin/film",
        element: <AdminFilmPage />,
    }

]);

const AppRouter = () => {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <RouterProvider router={router} />
        </>
    );
};

export default AppRouter;