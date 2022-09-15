import { useState } from "react";
import Container from "./Container";
import React from "react";
import Button from "./Button";
import Modal from "./Modal";
import SingUpForm from "./SingUpForm";

export default function Nav() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <nav className="bg-gray-50 border-b">
                <Container>
                    <div className="flex h-20 items-center justify-between">
                        <div className="text-[26px] text-accent font-black">
                            File Flex
                        </div>
                        <div>
                            <Button variant="primary-outline" className="mr-4">
                                Log In
                            </Button>
                            <Button onClick={() => setIsModalOpen(true)}>
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </Container>
            </nav>
            <Modal
                isOpen={isModalOpen}
                close={() => setIsModalOpen(false)}
                maxWidth={380}
            >
                <SingUpForm />
            </Modal>
        </>
    );
}
