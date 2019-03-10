import React, {Component} from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: "Anna",
        age: 12,
        hobbies: ["Sports", "Reading"]
      }
    }
  }

  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <Header/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <h1>Hello !!</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <Home name={"Max"} age={this.state.user.age} user={this.state.user}>
                <p>I am child</p>
              </Home>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <Footer/>
            </div>
          </div>
        </div>
    );
  }
}
