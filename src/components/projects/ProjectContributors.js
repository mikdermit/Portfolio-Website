import React from "react"

export default function ProjectContributors({contributors}) {
    return contributors.map(contributor => (
            <div className="w-75">
                <div className="flex flex-row m-2 space-x-3 items-center">
                    <img className="rounded-full w-10 h-10 shadow-lg" src={contributor.image_url} />
                    <h5 className="text-md">{contributor.name}</h5>
                </div>
            </div>
    ))
}