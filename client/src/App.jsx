import React, { Component } from 'react';

//import teamSchedule from './sample_data/rams_schedule';
import ramsFeed from './sample_data/feed_data'

import Schedule from './components/Schedule.jsx';
import Feed from './components/Feed.jsx';

//const scheduleUrl = 'http://localhost:3000/espn/schedules'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
      ramsFeed: ramsFeed
    };
  }


  componentDidMount() {
    fetch('espn/schedules')
    .then(res => res.json())
    .then(data => {
      this.setState({
        schedule: data,
      })
    })
    .catch((err) => {
      console.log('error: ', err);
    });
  }

  //.limit(17)
  //.sort({week: -1})

  render() {
    return (
      <div>
        <div id='schedule'>
          <Schedule
            ramsSchedule={this.state.schedule}
          />
        </div>
        <div id='feed'>
          <Feed
            ramsFeed={this.state.ramsFeed}
          />
        </div>
      </div>
    );
  }
}

export default App;
