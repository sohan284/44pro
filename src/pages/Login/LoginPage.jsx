import { TextField, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import UserManagement from "../../service/User";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = async () => {
    setErrorMsg(null); // Clear previous error messages

    // Validate input fields
    if (!email || !password) {
      setErrorMsg("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMsg("Invalid email format.");
      return;
    }

    if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await UserManagement.loginUser(email, password);

      if (response && response.token) {
        localStorage.setItem("token", response.token);
        navigate("/");
        window.location.reload();
      } else {
        setErrorMsg("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMsg("Invalid email or password.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="flex justify-center py-20 bg-zinc-100">
      <div className="md:w-[400px] w-full lg:w-[450px] mx-5">
        <div className="flex justify-center">
          <img className="w-[50%]" src={logo} alt="Logo" />
        </div>
        <h2 className="text-3xl text-center font-bold text-gray-900 mt-8">
          Sign in to your account
        </h2>
        <p className="text-center text-gray-600 my-5">
          {"Or"}{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-400 cursor-pointer"
          >
            {"register if you don't have one"}
          </span>
        </p>
        {errorMsg && (
          <Alert severity="error" className="mb-4">
            {errorMsg}
          </Alert>
        )}
        <div className="bg-white shadow-md px-8 pb-5 pt-5 rounded-lg">
          <label className="block mt-5 text-gray-500 text-sm">
            Email<span className="text-red-500 text-xs">*</span>
          </label>
          <TextField
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full text-sm"
          />
          <label className="block mt-5 text-gray-500 text-sm">
            Password<span className="text-red-500 text-xs">*</span>
          </label>
          <TextField
            size="small"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full text-sm"
          />

          <div
            className="w-full text-center p-3 hover:opacity-85 cursor-pointer bg-[#359eff] text-white mt-5 rounded"
            onClick={handleLogin}
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
