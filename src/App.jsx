import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import NotFound from "./shared/NotFound";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BuilderPage from "./pages/BuilderPage";
import CustomGloves from "./components/BuilderPage/CustomGloves/CustomGloves";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/Login/LoginPage";
import SignUpPage from "./pages/Login/SignUpPage";
import OrderPage from "./pages/OrderPage";
import Team44Page from "./pages/Team44Page";
import CustomBats from "./components/BuilderPage/CustomBats/CustomBats";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/builder" element={<BuilderPage />} />
      <Route path="/builder/custom-gloves" element={<CustomGloves />} />
      <Route path="/builder/custom-bats" element={<CustomBats />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/orders" element={<OrderPage />} />
      <Route path="/team44" element={<Team44Page />} />
    </Routes>
  );
}
export default App;
