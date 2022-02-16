import React from "react"
import { Routes, Route } from "react-router-dom";
import ContactLayout from "./ContactLayout"
import Success from "../common/Success"

export default function Contact() {
    return (
        <Routes>
            <Route path="/" element={<ContactLayout />} />
            <Route path="success" element={<Success />} />
        </Routes>
    )
}