import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

function App() {
    const name = "Goku";
    return (
        <div>
            <h1>Hello World</h1>
            <h1>I'm {name}</h1>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)