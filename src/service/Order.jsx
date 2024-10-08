import axios from "axios";
const createOrder = async (data) => {
  try {
    const response = await axios.post(
      `https://44pro-server.vercel.app/orders`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error creating the order:", error);
    throw error;
  }
};
const getOrders = async () => {
  try {
    const response = await axios.get("https://44pro-server.vercel.app/orders");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch order list:", error);
    throw error;
  }
};

const OrderManagement = {
  getOrders,
  createOrder,
};

export default OrderManagement;
