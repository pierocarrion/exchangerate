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
], { basename: process.env.REACT_APP_BASEURL });

export default function Home() {
    return <RouterProvider base router={router} />
}