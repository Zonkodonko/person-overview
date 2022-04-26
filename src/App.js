import React, {useState} from "react";
import {Navbar} from "./Navbar";
import {GlobalContext} from "./GlobalContext";
export default function App() {
    const [view,setView]= useState("overview");
    const viewValue = {view,setView};
    const viewContext = GlobalContext;

    return(
        <viewContext.Provider value={viewValue}>
            <Navbar/>
        </viewContext.Provider>
    )

}
