import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import NotFound from "./shared/NotFound";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BuilderPage from "./pages/BuilderPage";
import CustomGloves from "./pages/CustomGloves";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/builder" element={<BuilderPage />} />
      <Route path="/builder/custom-gloves" element={<CustomGloves />} />
    </Routes>
  );
}

export default App;
