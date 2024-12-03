import React from "react";
import Card from "./Card";

export default function HeaderStats({title, value, point}) {
    return (
        <Card
            title={title}
            value={value}
            change={10}
            icon={
                <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a4 4 0 0 0-7 0v2m7 13a4 4 0 0 0 7 0V9m0 2a4 4 0 0 1-7 0v2"
                    />
                </svg>
            }
            className="bg-orange-500"
        />
    );
}
