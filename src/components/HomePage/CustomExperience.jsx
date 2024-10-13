import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import glove1 from "../../assets/glove1.jpeg";
import glove2 from "../../assets/glove2.jpeg";
import glove3 from "../../assets/glove3.jpeg";
import glove4 from "../../assets/glove4.jpeg";
import bat1 from "../../assets/bat1.jpeg";
import bat2 from "../../assets/bat2.jpeg";
import bat3 from "../../assets/bat3.jpeg";
import bat4 from "../../assets/bat4.jpg";
import bglove1 from "../../assets/bglove1.jpeg";
import bglove2 from "../../assets/bglove2.jpeg";
import bglove3 from "../../assets/bglove3.jpeg";
import bglove4 from "../../assets/bglove4.jpeg";
import gaurd1 from "../../assets/gaurd1.jpeg";
import gaurd2 from "../../assets/gaurd2.jpeg";
import gaurd3 from "../../assets/gaurd3.jpeg";
import gaurd4 from "../../assets/gaurd4.jpeg";
import experiencebg from "../../assets/experienceBg.jpg";
import arrow from "../../assets/arrow.svg";
import CustomButton from "../../shared/CustomButton";
import { useNavigate } from "react-router-dom";

function CustomExperience() {
  const navigate = useNavigate();
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div
      style={{
        backgroundImage: `url(${experiencebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px",
      }}
    >
      <div className="container mx-auto mt-10 text-center">
        <div className="flex flex-col">
          <p>44 Pro Custom Experience</p>
          <div className="flex justify-center">
            <img src={arrow} alt="" className="mr-1" />
            <p className="lg:text-5xl text-4xl my-5 mb-10 text-zinc-800 font-bold">
              Start Building
            </p>
            <img className="transform scale-x-[-1] ml-1" src={arrow} alt="" />
          </div>

          {/* 4-column layout */}
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
            {/* Slider 1 */}
            <div>
              <Slider {...settings}>
                <div>
                  <img className="rounded-md" src={glove1} alt="slide 1" />
                </div>
                <div>
                  <img className="rounded-md" src={glove2} alt="slide 2" />
                </div>
                <div>
                  <img className="rounded-md" src={glove3} alt="slide 3" />
                </div>
                <div>
                  <img className="rounded-md" src={glove4} alt="slide 4" />
                </div>
              </Slider>
              <CustomButton
                handleClick={() => navigate("/builder")}
                title="Gloves"
                bgColor="bg-zinc-800"
                txColor="text-white"
              />
            </div>

            {/* Slider 2 */}
            <div>
              <Slider {...settings}>
                <div>
                  <img className="rounded-md" src={bat1} alt="slide 1" />
                </div>
                <div>
                  <img className="rounded-md" src={bat2} alt="slide 2" />
                </div>
                <div>
                  <img className="rounded-md" src={bat3} alt="slide 3" />
                </div>
                <div>
                  <img className="rounded-md" src={bat4} alt="slide 4" />
                </div>
              </Slider>
              <CustomButton
                handleClick={() => navigate("/builder")}
                title="Bats"
                bgColor="bg-zinc-800"
                txColor="text-white"
              />
            </div>

            {/* Slider 3 */}
            <div>
              <Slider {...settings}>
                <div>
                  <img className="rounded-md" src={bglove1} alt="slide 1" />
                </div>
                <div>
                  <img className="rounded-md" src={bglove2} alt="slide 2" />
                </div>
                <div>
                  <img className="rounded-md" src={bglove3} alt="slide 3" />
                </div>
                <div>
                  <img className="rounded-md" src={bglove4} alt="slide 4" />
                </div>
              </Slider>
              <CustomButton
                handleClick={() => navigate("/builder")}
                title="Batting Gloves"
                bgColor="bg-zinc-800"
                txColor="text-white"
              />
            </div>

            {/* Slider 4 */}
            <div>
              <Slider {...settings}>
                <div>
                  <img className="rounded-md" src={gaurd1} alt="slide 1" />
                </div>
                <div>
                  <img className="rounded-md" src={gaurd2} alt="slide 2" />
                </div>
                <div>
                  <img className="rounded-md" src={gaurd3} alt="slide 3" />
                </div>
                <div>
                  <img className="rounded-md" src={gaurd4} alt="slide 4" />
                </div>
              </Slider>
              <CustomButton
                handleClick={() => navigate("/builder")}
                title="Gaurds"
                bgColor="bg-zinc-800"
                txColor="text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomExperience;
