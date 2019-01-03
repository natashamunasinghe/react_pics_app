import React from "react";
import axios from 'axios'; //convention to put 3rd party imports above files we create
import SearchBar from "./SearchBar";



class App extends React.Component {
    onSearchSubmit(term) {
        //using AXIOS to make network request to Unsplash API
        axios.get("https://api.unsplash.com/search/photos", {
            params: {query: term},
            headers: {
                Authorization: "Client-ID 96dfe8eecd39c471b1e47949aeb4731b59ffe7330c4444d584956e19b5cb5081"
            }
        });
    }

    render () {
        return (
            <div className="ui container" style={{marginTop: "10px"}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}


export default App;