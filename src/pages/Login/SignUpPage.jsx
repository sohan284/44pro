import { TextField, Alert, CircularProgress } from "@mui/material";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // 6 input fields for OTP
  const [step, setStep] = useState(1); // 1 for sign-up, 2 for OTP
  const [errorMsg, setErrorMsg] = useState(null);
  const [countdown, setCountdown] = useState(120); // 2 minutes in seconds
  const [isCounting, setIsCounting] = useState(false);
  const [isResendDisabled, setIsResendDisabled] = useState(false); // New state for resend button
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let timer;
    if (isCounting && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsCounting(false);
      setIsResendDisabled(false); // Enable resend button when countdown finishes
    }
    return () => clearInterval(timer);
  }, [isCounting, countdown]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePasswordStrength = (password) => {
    return password.length >= 6;
  };

  const handleSendOtp = async () => {
    setLoading(true);
    setErrorMsg(null);
    const { email } = formData;

    if (!email) {
      setErrorMsg("Email is required.");
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setErrorMsg("Invalid email format.");
      setLoading(false);
      return;
    }

    try {
      await UserManagement.sendOtp(email);
      setStep(2); // Move to OTP step
      setIsCounting(true); // Start the countdown
      setIsResendDisabled(true); // Disable resend button
      setCountdown(120); // Reset countdown to 2 minutes
      toast.success("OTP sent to your email.");
      setLoading(false);
    } catch (error) {
      setErrorMsg(`Error: ${error.response.data.message || error.message}`);
    }
  };

  const handleVerifyOtp = async () => {
    setErrorMsg(null);
    const otpString = otp.join(""); // Join the OTP array into a string

    if (otpString.length !== 6) {
      setErrorMsg("Please enter all 6 digits of the OTP.");
      return;
    }

    try {
      const isValid = await UserManagement.verifyOtp(formData.email, otpString);
      if (isValid) {
        await handleSignUp(); // Proceed to complete sign-up
      } else {
        setErrorMsg("Invalid OTP. Please try again.");
      }
    } catch (error) {
      setErrorMsg(`${error.response?.data?.message}`);
      toast.error(`Error: ${error.response?.data?.message}`);
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
      setOtp(["", "", "", "", "", ""]);
      setStep(1); // Reset to step 1
      navigate("/login");
    } catch (error) {
      setErrorMsg(`Error: ${error?.response?.data?.message || error.message}`);
    }
  };

  const handleResendOtp = async () => {
    setErrorMsg(null);
    const { email } = formData;

    if (!email) {
      setErrorMsg("Email is required to resend OTP.");
      return;
    }

    try {
      await UserManagement.sendOtp(email);
      toast.success("OTP resent successfully.");
      setCountdown(120); // Reset countdown to 2 minutes
      setIsCounting(true); // Start the countdown
      setIsResendDisabled(true); // Disable resend button
      setOtp(["", "", "", "", "", ""]); // Clear the OTP inputs
    } catch (error) {
      setErrorMsg(`Error: ${error.response?.data?.message || error.message}`);
      toast.error(`Error: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Allow only one character

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input when a digit is entered
    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  return (
    <div className="flex justify-center py-20 h-screen bg-zinc-100">
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
                className="w-full text-center py-2 hover:opacity-85 cursor-pointer bg-[#359eff] text-white mt-5 rounded"
                onClick={handleSendOtp}
              >
                {loading ? (
                  <CircularProgress
                    style={{
                      color: "white",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                ) : (
                  " Sign Up"
                )}
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <label className="block mt-5 pt-8 text-gray-500 text-sm">
                Enter OTP<span className="text-red-500 text-xs">*</span>
              </label>
              <div className="flex justify-between mt-2">
                {otp.map((digit, index) => (
                  <TextField
                    key={index}
                    id={`otp-input-${index}`}
                    size="small"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="w-[15%] text-sm"
                    // inputProps={{ maxLength: 1 }}
                  />
                ))}
              </div>
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

              {/* Resend OTP Button */}
              <div className="flex justify-between mt-3">
                <div
                  className={`w-full text-right ${
                    isResendDisabled
                      ? "text-gray-400"
                      : "hover:opacity-85 text-orange-700"
                  } p-3  cursor-pointer underline`}
                  onClick={() => {
                    if (!isResendDisabled) {
                      handleResendOtp();
                    }
                  }}
                >
                  Resend OTP
                </div>

                {/* Countdown Timer */}
                {isCounting && (
                  <div className="text-center pt-3 text-md">
                    {Math.floor(countdown / 60)}:
                    {(countdown % 60).toString().padStart(2, "0")}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
