import React from "react";
import axios from 'axios'; //convention to put 3rd party imports above files we create
import SearchBar from "./SearchBar";



class App extends React.Component {
    state = {images: [] }; //state default is empty array because we are expecting an array of images
    
    onSearchSubmit = async (term) => {
        //using AXIOS to make network request to Unsplash API
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            params: {query: term},
            headers: {
                Authorization: "Client-ID 96dfe8eecd39c471b1e47949aeb4731b59ffe7330c4444d584956e19b5cb5081"
            }
        // }).then(response => { //working with promises use .then  method
        });
        this.setState({ images: response.data.results});
    }

    render () {
        return (
            <div className="ui container" style={{marginTop: "10px"}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
}


export default App;