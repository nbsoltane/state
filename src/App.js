import './App.css';
import Profile from './profile/Profile';
import React, { Component } from 'react'


export class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        profiles : [
          {fullName: "Maud Olivier", bio: "Accountable physician with 10 years of experience building up facility profitability and patient wellness. Seeking to deliver excellent healthcare at Hope Hospital. Maintained a 5-star at St. Mary Health Point Hospital health grades, for 129 reviews and 86 percent patient success.", profession: "Doctor", image: "1.jpg"},
          {fullName: "John Olivier",bio: "Johnny Haircut has secured a steady clientele throughout the years who appreciate his keen sense of style. His willingness to stay current with new barbershop phases and trends, as well as his ability to also remain true to the classic cuts bodes well for anyone wishing to look their very best.", profession: "Barber", image: "2.jpg"},
          {fullName: "Nizar Ben Soltane", bio: "I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python and Ruby; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well.", profession: "web developer", image: "myphoto.jpg"}
        ],
        time: 0
      }
    }
    componentDidMount = () => {
      this.mytimer = setInterval(() => {
        this.setState((prevState) => ({
          time: prevState.time + 1
        }))
      }, 1000);
    }
  render() {
    const { time } = this.state;
    return (
      <>
        <h1>Profiles</h1>
        <div className="time"><span>counter: { time } seconds</span></div>
        <div className="list-item">
            <Profile profiles={this.state.profiles}/>
        </div>
      </>
    )
  }
}

export default App;
