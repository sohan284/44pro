import CustomBuilder from "../components/BuilderPage/CustomBuilders";
import Footer from "../shared/Footer";
import Navigation from "../shared/Navigation";

const BuilderPage = () => {
  return (
    <div className="home-container ">
      <Navigation />
      <div className="bg-zinc-100">
        <CustomBuilder />
      </div>
      <Footer />
    </div>
  );
};

export default BuilderPage;
