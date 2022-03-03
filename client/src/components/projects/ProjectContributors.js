import React from "react"

export default function ProjectContributors({contributors}) {
    return contributors.map(contributor => (
        <div className="flex flex-col justify-center items-center mx-3 mt-4">
            <img className="rounded-full w-10 h-10 shadow-lg" src={contributor.image_url} />
            <h5 className="text-md pt-1">{contributor.name}</h5>
        </div> 
    ))
}