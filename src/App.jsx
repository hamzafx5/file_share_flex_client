import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Index";
import Login from "./pages/Login";
import SingUp from "./pages/SignUp";
import Upload from "./pages/Upload";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign_up" element={<SingUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/upload" element={<Upload />} />
                <Route
                    path="*"
                    element={
                        <h1 className="text-center my-12">
                            404 Page Not Found!
                        </h1>
                    }
                />
            </Routes>
            <Outlet />
        </>
    );
}
