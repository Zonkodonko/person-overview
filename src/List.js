import React from "react";
import ListEntry from "./ListEntry";
export default class List extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoaded:false,
            className: "gridContainer"
        };
    }

    componentDidMount() {
        fetch(
            "http://localhost:3001/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    entries: json,
                    isLoaded: true,
                    className: "gridContainer" + ((json.length < 3) ? " singleColumn" : "")
                });
            })
    }

    render() {
        return <div id = "entryList" className={this.state.className}>{this.getEntries()}</div>
    }

    getEntries() {
        if(this.state.isLoaded) {
                      return this.state.entries.map((entry,index) => {
                return <ListEntry entry={entry} key={index}/>
            })
        }
    }
}