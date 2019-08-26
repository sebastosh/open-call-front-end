import React from "react";

class AddArtworkForm extends React.Component {
  state = {  
      artist_id: "",
      title: "",
      year: 2019,
      description: "",
      medium: ""
    }
 

  componentDidMount(props) {
    console.log('props: ', this.props);
    this.setState({
      artist_id: this.props.artist.id
    });

  }

  handleChange = e => {
    // console.log('e: ', e.target.value);
    this.setState({
        [e.target.name]: e.target.value  
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3000/artworks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(resp => {
        console.log("Newart", resp);
        this.props.addArtwork(resp)
        this.props.handleAddArt()
        // this.setState({ artistWorks: [resp, ...this.state.artistWorks] });
        
      });
  };

  render() {
    return (
      <div>
            <h3>Add an artwork:</h3>
            <form onSubmit={this.handleSubmit}>
              <label>Title</label>
              <input type="text" onChange={this.handleChange} name="title" />
              <br />
              <label>Year</label>
              <input
                type="number"
                min="1400"
                max="2099"
                step="1"
                onChange={this.handleChange}
                name="year"
              />
              <br />
              <label>Description</label>
              <input
                type="text"
                onChange={this.handleChange}
                name="description"
              />
              <br />
              <label>Medium</label>
              <input type="text" onChange={this.handleChange} name="medium" />
              <br />
              <button type="submit" value="Add Artwork">
                Add
              </button>
              <button onClick={this.props.handleAddArt}>Cancel</button>
            </form>
      

      </div>
    );
  }
}

export default AddArtworkForm;
