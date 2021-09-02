import React from "react";
import "./main.global.css";
import { LoadFile } from "./LoadFile";
import { hot } from "react-hot-loader/root";


function AppComponent(this:any) {
    return (
        <LoadFile />
    );
}

export const App = hot(AppComponent);
