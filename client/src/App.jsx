import React, { Component } from 'react';

import ramsSchedule from './sample_data/rams_schedule';
import ramsFeed from './sample_data/feed_data'

import Schedule from './components/Schedule.jsx';
import Feed from './components/Feed.jsx'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ramsSchedule: ramsSchedule,
      ramsFeed: ramsFeed
    };
  }

  render() {
    return (
      <div>
        <div id='schedule'>
          <Schedule
            ramsSchedule={this.state.ramsSchedule}
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
