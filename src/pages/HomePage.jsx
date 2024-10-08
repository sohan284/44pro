import Banner from "../components/HomePage/Banner";
import Clubhouse from "../components/HomePage/Clubhouse";
import CustomBrand from "../components/HomePage/CustomBrand";
import CustomCurated from "../components/HomePage/CustomCurated";
import CustomExperience from "../components/HomePage/CustomExperience";
import CustomSince from "../components/HomePage/CustomSince";
import Social from "../components/HomePage/Social";
import Footer from "../shared/Footer";
import Navigation from "../shared/Navigation";

const HomePage = () => {
  return (
    <div className="home-container">
      <Navigation />
      <Banner />
      <CustomSince />
      <CustomExperience />
      <CustomBrand />
      <Clubhouse />
      <CustomCurated />
      <Social />
      <Footer />
    </div>
  );
};

export default HomePage;
