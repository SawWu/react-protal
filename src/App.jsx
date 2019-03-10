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
        hobbies: ["Sports", "Reading"]
      },
      initAge: 12,
      homeLink: "Home"
    }
  }

  onGreet() {
    this.setState({
      initAge: this.state.initAge += 1
    })
  }

  changeLinkName(value){
    this.setState({
      homeLink:value
    })
  }

  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <Header homeLink={this.state.homeLink}/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <h1>Hello !!</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <Home
                  name={"Max"}
                  age={this.state.initAge}
                  user={this.state.user}
                  greet={this.onGreet.bind(this)}
                  changeLink={this.changeLinkName.bind(this)}
              >
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
