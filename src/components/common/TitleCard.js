import React from "react"

export default function TitleCard({ title }) {
    return (
        <div className="grid grid-cols-1 text-center
        rounded-lg
        w-full
        mt-3 mb-5
        p-3
        divide-y-2 divide-gray-800 dark:divide-gray-300 
        bg-white dark:bg-gray-800
        text-gray-800 dark:text-gray-400
        shadow-lg">
            <h1 className="text-4xl mb-2">{title}</h1>
            <p className="text-lg">description</p>
        </div>
    )
}