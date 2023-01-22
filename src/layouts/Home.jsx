import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Exchange from "../components/Exchange";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Exchange />,
    },
], { basename: '/exchangerate' });

export default function Home() {
    return <RouterProvider router={router} />
}