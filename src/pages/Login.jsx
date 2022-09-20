import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "../../axios";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export default function Login() {
    const [error, setError] = useState({
        filed: "",
        message: "",
    });
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    function handleChange(e) {
        const { name, value } = e.target;
        setUser((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }
    async function onSubmit(e) {
        e.preventDefault();
        try {
            const res = await login(user);
            if (res.status === 201 && res.data.ok) {
                setError({ filed: "", message: "" });
            }
            console.log(res.status);
            console.log(res.data);
        } catch (error) {
            const { filed, message } = error.response.data;
            setError({ filed, message });
        }
    }

    function hasError(filed) {
        if (error.filed === filed) return error.message;
        return "";
    }

    async function login(user) {
        return await axios.post("/login", { data: user });
    }
    return (
        <div className="min-h-screen grid place-items-center relative page-transition">
            <Link to="/" className="absolute top-5 left-5 hover:text-accent">
                <BiArrowBack size="22px" />
            </Link>
            <form
                className="w-[calc(100%-24px)] max-w-[400px] mx-auto shadow-lg px-5 py-10 rounded-md"
                onSubmit={onSubmit}
            >
                <h2 className="text-center mb-10 h3">Login to your Account</h2>

                <Input
                    label="Email"
                    type="email"
                    placeholder="Enter your Email..."
                    onChange={handleChange}
                    name="email"
                    error={hasError("email")}
                />
                <Input
                    label="Password"
                    type="password"
                    placeholder="Enter a strong password..."
                    onChange={handleChange}
                    name="password"
                    error={hasError("password")}
                />
                <Button fullWidth={true}>Log In</Button>
                <div className="text-center mt-4">
                    Don't have an account{" "}
                    <Link to="/sign_up" className="text-accent cursor-pointer">
                        Sign Up
                    </Link>
                </div>
            </form>
        </div>
    );
}
