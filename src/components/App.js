import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";



class App extends React.Component {
    state = {images: [] }; //state default is empty array because we are expecting an array of images
    
    onSearchSubmit = async (term) => {
        //using AXIOS to make network request to Unsplash API
        const response = await unsplash.get("/search/photos", {
            params: {query: term},
            
        // }).then(response => { //working with promises use .then  method
        });
        this.setState({ images: response.data.results});
    };

    render () {
        return (
            <div className="ui container" style={{marginTop: "10px"}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}


export default App;