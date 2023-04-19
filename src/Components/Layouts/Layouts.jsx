
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return ( 
        <>
        <Header name= 'Pokemons'/>
        <Outlet/>
        </>
    )
}
export default Root