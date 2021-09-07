import React from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import styles from "./app.css";
import { useState } from 'react'
import { Table } from "./Table";

function AppComponent() {
    return (
        <Table />
    );
}


export const App = hot(AppComponent);
