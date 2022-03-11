import { Route, Routes } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import CategoriesPage from "../Pages/CategoriesPage";
import ChatPage from "../Pages/ChatPage";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Success from "../Pages/Success";
import Category from "./Category";

function Content() {

    return (
        <div>
            <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/categories" element={<CategoriesPage />} />
           <Route path="/categories/:index" element={<Category />} />
           <Route path="/register" element={<Register />} />
           <Route path="/success" element={<Success />} />
           <Route path="/chat" element={<ChatPage />} />
           <Route path="/aboutus" element={<AboutUs />} />
            </Routes>
        </div>
    )
}

export default Content