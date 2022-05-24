import React from "react";

export default function ListEntry({entry}) {
        return <div className="entry-header-container with-left-background">
                <img src="probePassbild.jpg" className="human-image"/>
                <div className="contact-header-text">
                    <h1 className="main-name">{entry.name}</h1>
                    <div className="entry-header-contact-text">
                        <div>{`${entry.address}, ${entry.postalZip} ${entry.city}`}</div>
                        <div>{entry.phone}</div>
                        <a href={`mailto:${entry.email}`}>{entry.email}</a>
                    </div>
                </div>
                {/*<input type="image" src="expandable_icon.jpg" className="expand-button" alt="buttontest"/>*/}
            </div>;
}