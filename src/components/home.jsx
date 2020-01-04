import React from "react";

export default function Home({location: {state}}) {
    return (
        <div>
            <h1>Home</h1>
            {state.email} after login
        </div>
    )
};