
import { createBrowserRouter } from "react-router-dom";
import Menu from "../Pages/Menu/menu";
import Root from "../Components/Layouts/Layouts";

const router = createBrowserRouter([{
     path: '/', 
    element: <Root/>, 
    children: [
         {
            path : '/ability', 
            element: <Menu/>
        }
    ]
}])

export default router