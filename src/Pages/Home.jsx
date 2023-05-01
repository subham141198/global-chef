import ChefNavbar from "../Components/Header/Header";
import { useLoaderData } from "react-router-dom";


export default function HomePage() {
  
  const datas = useLoaderData();

 console.log(datas)

  return (
    <>
      <ChefNavbar />
      <h1>this is home page</h1>
    </>
  );
}
