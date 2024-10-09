import axios from "axios";

const upsertUser = async (userData) => {
  try {
    const response = await axios.post(
      `https://44pro-server.vercel.app/users`,
      userData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating the user:", error);
    throw error;
  }
};

const getUserList = async (role = "") => {
  try {
    const response = await axios.get(
      `https://44pro-server.vercel.app/users?role=${role}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user list:", error);
    throw error;
  }
};

const getSingleUser = async (id) => {
  try {
    const response = await axios.get(
      `https://44pro-server.vercel.app/users/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch User:", error);
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const response = await axios.delete(
      `https://44pro-server.vercel.app/users/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to delete :", error);
    throw error;
  }
};

const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`https://44pro-server.vercel.app/login`, {
      email,
      password,
    });
    if (response.data?.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

// New function to send OTP
const sendOtp = async (email) => {
  try {
    const response = await axios.post(
      `https://44pro-server.vercel.app/send-otp`,
      {
        email,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to send OTP:", error);
    throw error;
  }
};

// New function to verify OTP
const verifyOtp = async (email, otp) => {
  try {
    const response = await axios.post(
      `https://44pro-server.vercel.app/verify-otp`,
      {
        email,
        otp,
      }
    );
    return response.data; // Assuming the API returns a success flag or similar
  } catch (error) {
    console.error("Failed to verify OTP:", error);
    throw error;
  }
};

const UserManagement = {
  upsertUser,
  getUserList,
  getSingleUser,
  deleteUser,
  loginUser,
  sendOtp, // Add sendOtp to exports
  verifyOtp, // Add verifyOtp to exports
};

// Export the object
export default UserManagement;
