import { useEffect, useState } from "react";
import Footer from "../shared/Footer";
import Navigation from "../shared/Navigation";
import OrderManagement from "../service/Order";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import GlovesSVG from "../components/BuilderPage/CustomGloves/GlovesSVG";

const OrderPage = () => {
  const token = localStorage.getItem("token");
  const decodedToken = token?.split(".");
  var userEmail;
  if (decodedToken?.length === 3) {
    const payload = JSON.parse(atob(decodedToken[1])); // Decode the payload part
    userEmail = payload.email;
  }

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await OrderManagement.getOrders(userEmail);
        setOrders(res.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [userEmail]);

  return (
    <div className=" bg-zinc-100">
      <Navigation />
      <h1 className="text-6xl font-bold text-center text-zinc-900 pt-16">
        Orders
      </h1>

      <div className=" container mx-auto bg-white rounded my-10 shadow-md">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Size</TableCell>
                <TableCell>Personalize</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.length > 0 ? (
                orders?.map((order) =>
                  order.cartItems?.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>
                        <div className="lg:w-[30%] w-[120%] md:w-[50%]">
                          <GlovesSVG color={item.colors} />
                        </div>
                      </TableCell>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{item.size}</TableCell>
                      <TableCell>{item.personalize}</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>${item.price?.toFixed(2)}</TableCell>
                    </TableRow>
                  ))
                )
              ) : (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    No orders found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Footer />
    </div>
  );
};

export default OrderPage;
