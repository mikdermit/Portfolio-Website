import React from "react";

export default function Success() {
    return (
        <div className="grid grid-cols-1 text-center min-h-screen p-5 bg-white dark:bg-gray-900">
            <div className="w-full mt-10 p-8">
            <h1 className="text-black dark:text-white">Your message was sent. Talk to you soon!</h1>
            {/* insert graphic */}
            <p className="text-black dark:text-white">While you wait, check out my current project:</p>
            </div>
        </div>
    )
}