import ChefNavbar from "../Components/Header/Header";

import Banner from "../Components/Banner/Banner";
import AllChefComponent from "../Components/AllChef/allChef";
import Specialised from "../Components/SpeciledSection/Specialised";
import AboutUs from "../Components/About/About";
import Footer from "../Components/Footer/Footer";

export default function HomePage() {

  return (
    <>
      <ChefNavbar />
      <Banner />
      <AllChefComponent/>
      <hr />
      <Specialised/>
      <hr />
      <AboutUs/>
     
      <Footer/>
    </>
  );
}
