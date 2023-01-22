import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Exchange from "../components/Exchange";

const router = createBrowserRouter([
    {
        path: "/exchangerate",
        element: <Exchange />,
    },
]);

export default function Home() {
    return <RouterProvider router={router} />
}