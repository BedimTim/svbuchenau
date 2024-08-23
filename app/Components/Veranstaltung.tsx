import internal from "stream";
import React from "react";

export default function Veranstaltung({id, Ortsname, bezeichnung}: {id: string, Ortsname: string, bezeichnung: String}) {
    return (
        <div className="">
            <h2>{bezeichnung}</h2>
            <p>{Ortsname}</p>
        </div>
    )
};