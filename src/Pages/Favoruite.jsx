import SingleRecipeComponent from "../Components/SingleRecipe/SingleRecipe";
import Container from "react-bootstrap/Container";

export default function Favourite() {
  const favRecipies = JSON.parse(localStorage.getItem("favRecipe"));
  return (
    <>
      <Container>
        <div className="row row-cols-3">
          {favRecipies.map((recipe, index) => (
            <SingleRecipeComponent key={index} recipe={recipe} addtofavButton={addtofavButton}/>
          ))}
        </div>
      </Container>
    </>
  );
}
