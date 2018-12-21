import React, { Component } from 'react';

import sampleData from './sample_data';
import ramsSchedule from './rams_schedule';
import ramsFeed from './feed_data'

import Schedule from './components/Schedule.jsx';
import Feed from './components/Feed.jsx'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamData: sampleData,
      ramsSchedule: ramsSchedule,
      ramsFeed: ramsFeed
    };
  }

  render() {
    return (
      <div>
        <div id='schedule'>
          <Schedule
            teamData={this.state.teamData}
            rams={this.state.ramsSchedule}
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
