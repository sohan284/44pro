import CustomBuilder from "../components/BuilderPage/CustomBuilders";
import Footer from "../shared/Footer";
import NavBar from "../shared/navBar";

const BuilderPage = () => {
  return (
    <div className="home-container ">
      <NavBar />
      <div className="bg-zinc-100">
        <CustomBuilder />
      </div>
      <Footer />
    </div>
  );
};

export default BuilderPage;
