import { TextField, Alert } from "@mui/material";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserManagement from "../../service/User";
import { toast } from "react-toastify";

function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1 for sign-up, 2 for OTP
  const [errorMsg, setErrorMsg] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePasswordStrength = (password) => {
    return password.length >= 6;
  };

  const handleSendOtp = async () => {
    setErrorMsg(null);
    const { email } = formData;

    if (!email) {
      setErrorMsg("Email is required.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMsg("Invalid email format.");
      return;
    }

    try {
      await UserManagement.sendOtp(email); // Implement this method to send OTP
      setStep(2); // Move to OTP step
      toast.success("OTP sent to your email.");
    } catch (error) {
      setErrorMsg(`Error: ${error.message}`);
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleVerifyOtp = async () => {
    setErrorMsg(null);

    if (!otp) {
      setErrorMsg("OTP is required.");
      return;
    }

    try {
      const isValid = await UserManagement.verifyOtp(formData.email, otp); // Implement this method
      if (isValid) {
        await handleSignUp(); // Proceed to complete sign-up
      } else {
        setErrorMsg("Invalid OTP. Please try again.");
      }
    } catch (error) {
      setErrorMsg(`Error: ${error.message}`);
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleSignUp = async () => {
    setErrorMsg(null);

    const { name, email, password, confirmPassword } = formData;

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setErrorMsg("All fields are required.");
      return;
    }

    if (!validatePasswordStrength(password)) {
      setErrorMsg("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    try {
      await UserManagement.upsertUser({ name, email, password });
      toast.success("User created successfully");

      // Clear form fields
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setOtp("");
      setStep(1); // Reset to step 1
      navigate("/login");
    } catch (error) {
      setErrorMsg(`Error: ${error.message}`);
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex justify-center py-20 bg-zinc-100">
      <div className="md:w-[400px] w-full lg:w-[450px] mx-5">
        <div className="flex justify-center">
          <img className="w-[50%]" src={logo} alt="Logo" />
        </div>
        <h2 className="text-3xl text-center font-bold text-gray-900 mt-8">
          Sign up for an account
        </h2>
        <p className="text-center text-gray-600 my-5">
          {"Already registered?"}{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-400 cursor-pointer"
          >
            Log in
          </span>
        </p>
        <div className="bg-white shadow-md px-8 pb-5 rounded-lg">
          {step === 1 && (
            <>
              <label className="block mt-5 pt-10 text-gray-500 text-sm">
                Name<span className="text-red-500 text-xs">*</span>
              </label>
              <TextField
                size="small"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full text-sm"
              />
              <label className="block mt-5 text-gray-500 text-sm">
                Email<span className="text-red-500 text-xs">*</span>
              </label>
              <TextField
                size="small"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full text-sm"
              />
              <label className="block mt-5 text-gray-500 text-sm">
                Password<span className="text-red-500 text-xs">*</span>
              </label>
              <TextField
                size="small"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full text-sm"
              />
              <label className="block mt-5 text-gray-500 text-sm">
                Confirm password<span className="text-red-500 text-xs">*</span>
              </label>
              <TextField
                size="small"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="w-full text-sm"
              />
              {errorMsg && (
                <Alert severity="error" className="mt-3">
                  {errorMsg}
                </Alert>
              )}
              <div
                className="w-full text-center p-3 hover:opacity-85 cursor-pointer bg-[#359eff] text-white mt-5 rounded"
                onClick={handleSendOtp}
              >
                Send OTP
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <label className="block mt-5 text-gray-500 text-sm">
                Enter OTP<span className="text-red-500 text-xs">*</span>
              </label>
              <TextField
                size="small"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full text-sm"
              />
              {errorMsg && (
                <Alert severity="error" className="mt-3">
                  {errorMsg}
                </Alert>
              )}
              <div
                className="w-full text-center p-3 hover:opacity-85 cursor-pointer bg-[#359eff] text-white mt-5 rounded"
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
