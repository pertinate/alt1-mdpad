import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { mixColor } from "@alt1/base"

import "./styles.css"

const alt1 = window.alt1

/* Invite link
 * Remember to adjust appconfig.json as needed in public folder
 * alt1://addapp/ url given by preview goes here /appconfig.json
 *
 * Example for this template
 * alt1://addapp/https://q44zz.csb.app/appconfig.json
 */

function App() {
    useEffect(() => {
        const boxCenter = {
            height: Math.round(alt1.rsHeight / 2.5),
            width: Math.round(alt1.rsWidth / 2)
        }

        alt1.overLayTextEx("Mounted", mixColor(220, 30, 30), 32, boxCenter.width, boxCenter.height, 5000, "serif", true, true)
    }, [])

    return (
        <div className="App">
            <h1>ALT1 React Typescript Template</h1>
        </div>
    )
}

const notFound = (
    <div className="App">
        <h1>ALT1 not found</h1>
    </div>
)

const rootElement = document.getElementById("root")
ReactDOM.render(alt1 ? <App /> : notFound, rootElement)
