import Banner from "../components/HomePage/Banner";
import Clubhouse from "../components/HomePage/Clubhouse";
import CustomBrand from "../components/HomePage/CustomBrand";
import CustomExperience from "../components/HomePage/CustomExperience";
import CustomSince from "../components/HomePage/CustomSince";
import NavBar from "../shared/navBar";

const HomePage = () => {
  return (
    <div className="home-container">
      <NavBar />
      <Banner />
      <CustomSince />
      <CustomExperience />
      <CustomBrand />
      <Clubhouse />
    </div>
  );
};

export default HomePage;
