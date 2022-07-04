import React from "react"
import ReactDOM from "react-dom/client"
import { isPresent } from "ts-is-present"

import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { SVG2PDF } from "./svg2pdf"

const reactRoot = document.getElementById("react")
if (!isPresent(reactRoot))
    throw new Error(
        "No root for React app -- looking for element with id='#react'."
    )
const app = ReactDOM.createRoot(reactRoot)

app.render(
    <React.StrictMode>
        <SVG2PDF />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
