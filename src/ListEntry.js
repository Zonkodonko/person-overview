import React from "react";

export default function ListEntry({entry}) {
        return <div className="entry-header-container">
                <img src="probePassbild.jpg" className="human-image"/>
                <div className="entry-header-content">
                    <h1 className="entry-name">{entry.name}</h1>
                    <div className="entry-header-contact-text">
                        <div>{`${entry.address}`}</div>
                        <div>{`${entry.postalZip}, ${entry.city}`}</div>
                        <div>{entry.phone}</div>
                        <a href={`mailto:${entry.email}`}>{entry.email}</a>
                    </div>
                </div>
                {/*<input type="image" src="expandable_icon.jpg" className="expand-button" alt="buttontest"/>*/}
            </div>;
}