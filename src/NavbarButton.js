import React, {useContext} from "react";
import {GlobalContext} from "./GlobalContext";
const templates = new Map();
templates.set("overview",{
    text:"Add person",
    view: "personform"
});
templates.set("personform", {
    text:"Back",
    view:"overview"
});

export default function NavbarButton() {
    const {view,setView} = useContext(GlobalContext)
    return<button onClick={() => setView(templates.get(view).view)}>{templates.get(view).text}</button>
}

