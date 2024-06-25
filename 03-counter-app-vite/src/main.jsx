import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";

// function App() {
//     const name = "Goku";
//     return (
//         <div>
//             <h1>Hello World</h1>
//             <h1>I'm {name}</h1>
//         </div>
//     );
// }

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FirstApp/>
    </React.StrictMode>
)