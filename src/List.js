import React from "react";
import ListEntry from "./ListEntry";
export default class List extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoaded:false
        };
    }

    componentDidMount() {
        fetch(
            "http://localhost:3001/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    entries: json,
                    isLoaded: true
                });
            })
    }

    render() {
        if(this.state.isLoaded) {
            return this.state.entries.map(entry => {
                return <ListEntry entry={entry}/>
            })
        }
    }
}