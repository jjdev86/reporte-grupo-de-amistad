import React, { Component } from "react";

export default function Home({username}) {
    return (
        <div>
            <h1>Home</h1>
            {username} after login
        </div>
    )
};