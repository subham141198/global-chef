import { useParams } from "react-router-dom"
import ChefNavbar from "../Components/Header/Header";

export default function Detials(){
    const {chefid} = useParams();
    console.log(chefid)
    return(
        <>
        <ChefNavbar/>
         <p>this is chef no {chefid}</p>
        </>
       
    );
}