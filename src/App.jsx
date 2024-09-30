import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import NotFound from "./shared/NotFound";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
