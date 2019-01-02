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
      ramsFeed: ramsFeed,
      // home view should render schedule sidebar and gamefeed on the same page
        // for now, test components by changing the "view" property until changeView method is implemented
      view: 'feed'
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

  // TODO
  // implement changeView method to switch from main page to schedule page

  renderView() {
    // receives props object, destructure properties
    const { schedule, ramsFeed, view } = this.state;
    if(view === 'home') {
      return (
        <div id='schedule'>
          <Schedule
            ramsSchedule={schedule}
          />
        </div>
      )
    }
    if(view === 'feed') {
      return (
        <div id='feed'>
          <Feed
            ramsFeed={ramsFeed}
          />
        </div>
      )
    }

  }

  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    )
  }

}

export default App;
