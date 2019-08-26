import React from 'react';


 class Signup extends React.Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

   handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(parsedResponse => {
        localStorage.setItem('token', parsedResponse.token)
        this.props.history.push('/')
        if (localStorage.token !== 'undefined') {this.props.getArtist(this.state.name)} else {console.log('no token, wrong, bad')}    
      })
  }

   handleChange = (e) => {
     console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value })
  }

   render() {
    // console.log(this.state)
    return (
      <div className="login-signup">
      <form onSubmit={this.handleSubmit}>
        Sign Up
        <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
        <input type="email" value={this.state.email} onChange={this.handleChange} name="email" />
        <input type="password" value={this.state.password} onChange={this.handleChange} name="password" />
        <input type="submit" value="Sign Up!" />
      </form>
      </div>
    );
  }
}

 export default Signup;