import React from "react";
import Button from "./Button";
import Input from "./Input";

export default function SingUpForm() {
    function onSubmit(e) {
        e.preventDefault();
        console.log(e);
    }
    return (
        <form onSubmit={onSubmit}>
            <Input label="Full name" placeholder="Enter your full name..." />
            <Input
                label="Email"
                type="email"
                placeholder="Enter your Email..."
            />
            <Input
                label="Password"
                type="password"
                placeholder="Enter a strong password..."
            />
            <Button fullWidth={1}>Sing Up</Button>
        </form>
    );
}
