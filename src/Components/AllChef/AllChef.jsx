/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";
import SingleChef from "../SingleChefCard/SingleChefCard";
import { useLoaderData } from "react-router-dom";

export default function AllChefComponent(){
    const chefdatas = useLoaderData();
    console.log(chefdatas)
    return(
        <>
            <h1 className="text-center">Our Chefs Details</h1>
            <Container>
            <div className="row row-cols-3 gy-3">
            {chefdatas.map((chefdata) => (
            <SingleChef key={chefdata.id} chefdata={chefdata} />
          ))}

            </div>
            </Container>
        </>
    );
}