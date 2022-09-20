import { useState } from "react";
import Container from "./Container";
import React from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate();
    return (
        <>
            <nav className="bg-gray-50 border-b">
                <Container>
                    <div className="flex h-20 items-center justify-between">
                        <div className="text-[26px] text-accent font-black">
                            File Flex
                        </div>
                        <ul className="flex gap-4">
                            <li>
                                <Link to="/upload">Upload</Link>
                            </li>
                        </ul>
                        <div>
                            <Button
                                onClick={() => navigate("/login")}
                                variant="primary-outline"
                                className="mr-4"
                            >
                                Log In
                            </Button>
                            <Button onClick={() => navigate("/sign_up")}>
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    );
}
