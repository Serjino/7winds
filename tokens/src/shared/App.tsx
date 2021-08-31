import React from "react";
import "./main.global.css";
import { TokenAuth } from "./TokenAuth";
import { hot } from "react-hot-loader/root";


function AppComponent() {
    return (
        <TokenAuth />
    );
}

export const App = hot(AppComponent);
