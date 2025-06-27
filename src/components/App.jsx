// https://dribbble.com/shots/23941276-Wallet-Page-Interactions
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NoPage } from "../pages/NoPage";
import { ShopCredit } from "../pages/ShopCredit";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/credits" element={<ShopCredit />} />
      </Routes>
    </>
  );
}
