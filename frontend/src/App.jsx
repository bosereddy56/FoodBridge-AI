import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RestaurantDashboard from "./pages/RestaurantDashboard";
import NGODashboard from "./pages/NGODashboard";
import AdminDashboard from "./pages/AdminDashboard";
import DonationForm from "./pages/DonationForm";

import Navbar from "./components/Navbar";
import DonationHistory from "./pages/DonationHistory";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/restaurant-dashboard"
          element={<RestaurantDashboard />}
        />

        <Route
          path="/ngo-dashboard"
          element={<NGODashboard />}
        />

        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />
        <Route
  path="/history"
  element={<DonationHistory />}
/>

        <Route
          path="/create-donation"
          element={<DonationForm />}
        />
      </Routes>
    </BrowserRouter>
  );
}