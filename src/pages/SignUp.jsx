import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "../../axios";
import Alert from "../components/Alert";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export default function SingUp() {
    const navigate = useNavigate();
    const [isAlertOpen, setAlertOpen] = useState(false);
    const [error, setError] = useState({
        filed: "",
        message: "",
    });
    const [user, setUser] = useState({
        fullName: "",
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
            const res = await registerUser(user);
            if (res.status === 201 && res.data.ok) {
                setError({ filed: "", message: "" });
                setAlertOpen(true);
            }
            console.log(res.status);
            console.log(res.data);
        } catch (error) {
            console.log("catch block");
            const { filed, message } = error.response.data;
            setError({ filed, message });
        }
    }

    function hasError(filed) {
        if (error.filed === filed) return error.message;
        return "";
    }

    async function registerUser(user) {
        return await axios.post("/register", { data: user });
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
                <h2 className="text-center mb-10 h3">Create a new Account</h2>
                <Input
                    label="Full name"
                    placeholder="Enter your full name..."
                    onChange={handleChange}
                    name="fullName"
                    error={hasError("fullName")}
                />
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
                    autoComplete="new-password"
                />
                <Button fullWidth={true}>Sing Up</Button>
                <div className="text-center mt-4">
                    Already have an account{" "}
                    <Link to="/login" className="text-accent cursor-pointer">
                        Log In
                    </Link>
                </div>
            </form>
            <Alert
                type="success"
                message="The account has been created successfully"
                isOpen={isAlertOpen}
                close={() => setAlertOpen(false)}
                button={
                    <Button
                        variant="dark-outline"
                        onClick={() => navigate("/login")}
                    >
                        Log In
                    </Button>
                }
                timeout={2000}
                timeoutCallback={() => navigate("/login")}
            />
        </div>
    );
}
