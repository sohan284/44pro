import { IoIosStar } from "react-icons/io";
function Clubhouse() {
  return (
    <div className="bg-gray-100 w-96 h-96 m-5 p-5" style={{ margin: "20px" }}>
      <div>
        <p className="text-yellow-500 text-xl flex mb-3 ">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </p>
        <p className="font-thin">
          Great purchase! Emails kept me in the know of what stage the glove was
          in and when it shipped. Great options to choose from and glove is
          great quality leather! You absolutely cant beat the price for this
          quality of glove!
        </p>
      </div>
      <div>
        <hr className="border-1 border-gray-500 mb-5" />
        <p>Drew F</p>
        <p>Custom Glove</p>
      </div>
    </div>
  );
}
export default Clubhouse;
