import "./App.css";
import { Cart } from "./Components/Cart";
import "./Components/Forum.jsx/Forum.css";
import { Home } from "./Components/Home";
import { AcService } from "./Components/Items/AcService";
import { Repairpage } from "./Components/Items/Repairpage";
import { Towservice } from "./Components/Items/Towservice";
import { Tyreservice } from "./Components/Items/Tyreservice";
import { Carwash } from "./Components/Items2/Carwash";
import { Oilchange } from "./Components/Items2/Oilchange";
import { Paintchange } from "./Components/Items2/Paintchange";
import { Spareparts } from "./Components/Items2/Spareparts";
import { Navbar } from "./Components/nav/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./Shop-context";
import "./Components/Forum.jsx/Registrationcss.css"
function App() {
  return (
    <div>
      <BrowserRouter>
      <ShopContextProvider>
      
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="AcService" element={<AcService />} />
            <Route path="Tyreservice" element={<Tyreservice />} />
            <Route path="Towservice" element={<Towservice />} />
            <Route path="Repairpage" element={<Repairpage />} />
            <Route path="Paintchange" element={<Paintchange />} />
            <Route path="Oilchange" element={<Oilchange />} />
            <Route path="Carwash" element={<Carwash />} />
            <Route path="Spareparts" element={<Spareparts />} />
            <Route path="Cart" element={<Cart />} />
          </Route>
        </Routes>
        </ShopContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
