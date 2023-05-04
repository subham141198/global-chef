import { useParams, useLoaderData } from "react-router-dom"
import ChefNavbar from "../Components/Header/Header";
import SingleRecipeComponent from "../Components/SingleRecipe/SingleRecipe";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Components/Footer/Footer";


function Detials() {
  const { chefid } = useParams();
  const ChefDetails = useLoaderData()
  const singleChefDetail = ChefDetails.find((chefdata) => chefdata.id === parseInt(chefid));

  return (
    <>
      <ChefNavbar />
      <div className="row">
        <div className="col-sm-6 p-0">
          <img className="w-100" src={singleChefDetail.profile_picture} alt="" />
        </div>
        <div className="col-sm-6 infoContainer">
          <div className="row">
            <div className="col-12">
              <h2 className="banner-title text-center py-3"><span className="YellowColor">{singleChefDetail.name.split(" ")[0]}</span> {singleChefDetail.name.split(" ")[1]}</h2>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <p className="banner-bio">{singleChefDetail.bio}</p>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <p className="banner-likes"><strong className="YellowColor">Likes :</strong> {singleChefDetail.likes}</p>
              </div>
              <div className="col d-flex justify-content-center align-items-center">
                <p className="banner-experience"><strong className="YellowColor">Years of experience :</strong> {singleChefDetail.year_of_experience}</p>
              </div>
              <div className="col d-flex justify-content-center align-items-center">
                <p className="banner-recipes"><strong className="YellowColor">No. of Recipes</strong> {singleChefDetail.no_of_recipes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h1 className="text-center py-4"> Recipes of {singleChefDetail.name}</h1>
        <div className="row row-cols-2 gy-3">

        {singleChefDetail.recipes.map((recipe) => (
            <SingleRecipeComponent key={recipe.id} recipe={recipe}/>
          
            
          ))}
        </div>
        <ToastContainer></ToastContainer>
      </div>
      <Footer/>
      
    </>

  );
}
export default Detials;