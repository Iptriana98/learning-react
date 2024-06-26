import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FirstApp title="Counter App" subtitle="This is a subtitle"/>
    </React.StrictMode>
)