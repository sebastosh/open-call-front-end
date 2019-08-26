import React from "react";
import ArtWorkContainer from "./ArtWorkContainer";
import AddArtworkForm from "../components/AddArtworkForm"

class Profile extends React.Component {
  state = {  
    currentArtist: {},
    artistWorks: [],
    addArt: false,
    singleArtWork: {
      artist_id: "",
      title: "",
      year: "",
      image: "",
      description: "",
      medium: ""
    }
    
  };

  componentDidMount() {
    fetch("http://localhost:3000/artists")
      .then(response => response.json())
      .then(artists => {
        console.log("artists: ", artists);
        let loggedArtist = artists.data.find(
          artist => artist.attributes.name === this.props.artist
        );
        console.log("loggedArtist: ", loggedArtist);
        this.setState({
          artistWorks: loggedArtist.attributes.artworks,
          currentArtist: loggedArtist
        });
      });
  }

  handleAddArt = e => {
    // console.log('e: ', e.target.value);
    this.setState({
      addArt: !this.state.addArt
    });
  };

  addArtwork =(resp) => {
      console.log('resp back to profile: ', resp);
        
        this.setState({ artistWorks: [resp, ...this.state.artistWorks] });
  }
  render() {
    return (
      <div className="profile">
        <div className="profile-card">
          <h2>{this.props.artist}</h2>

        </div>
        {this.state.addArt ? (
          <div className="profile-card">
              <AddArtworkForm artist={this.state.currentArtist} handleAddArt={this.handleAddArt} addArtwork={this.addArtwork} />
          </div>
        ) : (
          <div className="profile-card">
            <button onClick={this.handleAddArt}>➕ Artwork</button>
          </div>
        )}

        {this.state.currentArtist.attributes ? (
          <ArtWorkContainer
            artWorks={this.state.artistWorks}
            currentArtist={this.state.currentArtist}
          />
        ) : null}
      </div>
    );
  }
}

export default Profile;
