import React from "react"
import emojipedia from "../emojipedia";
import EntryElement from "./EntryElement"

function createEntryElement(entry){
    return <EntryElement key={entry.id} emoji={entry.emoji} name={entry.name} description={entry.meaning}/>;
}

function Entry(props){
    return (
        <dl className="dictionary">
            {emojipedia.map(createEntryElement)}            
        </dl>
    );
}

export default Entry;