import { Dropdown, Space, Card } from "antd";
import custom1 from "../assets/custom1.png";
import custom2 from "../assets/custom2.png";
import custom3 from "../assets/custom3.png";
import custom4 from "../assets/custom4.png";
import custom from "../assets/custom.png";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const CustomDropdown = () => {
  const navigate = useNavigate();
  const cardsData = [
    {
      title: "Custom Gloves",
      img: custom1,
      link: "/builder/custom-gloves",
    },
    {
      title: "Custom Bats",
      img: custom2,
      link: "/builder/custom-bats",
    },
    {
      title: "Custom Batting Gloves",
      img: custom3,
      link: "/builder/custom-gloves",
    },
    {
      title: "Custom Guards",
      img: custom4,
      link: "/builder/custom-gloves",
    },
  ];

  const dropdownContent = (
    <div className="flex bg-[#e0e0e0] flex-wrap rounded-lg p-4">
      {cardsData.map((card, index) => (
        <Card
          onClick={() => navigate(card.link)}
          key={index}
          style={{
            // width: 250,
            margin: "10px",
            backgroundColor: "#e0e0e0",
            border: "none",
          }}
        >
          <div className="bg-white lg:w-44 rounded-md p-5 lg:h-44">
            <img src={card.img} alt="" />
          </div>
          <div className="flex justify-center">
            <img className="w-5 h-5 mt-3" src={custom} alt="" />{" "}
            <p className="text-center font-bold mt-3">{card.title}</p>
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown
          overlay={dropdownContent}
          placement="bottomLeft"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <p className="text-black m-2 cursor-pointer flex">
            Custom Crafted{" "}
            <IoIosArrowDown style={{ marginTop: "3px", marginLeft: "3px" }} />
          </p>
        </Dropdown>
      </Space>
    </Space>
  );
};

export default CustomDropdown;
