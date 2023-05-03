import { Container } from "react-bootstrap";
import SingleChef from "../SingleChefCard/SingleChefCard";
import { useLoaderData } from "react-router-dom";

 function AllChefComponent(){
    const chefdatas = useLoaderData();
    console.log(chefdatas)
    return(
        <>
            <h1 className="text-center">Our Chefs Details</h1>
            <Container>
            <div className="row row-cols-md-3  row-cols-1 gy-3">
            {chefdatas.map((chefdata) => (
            <SingleChef key={chefdata.id} chefdata={chefdata} />
          ))}

            </div>
            </Container>
        </>
    );
}
export default AllChefComponent;