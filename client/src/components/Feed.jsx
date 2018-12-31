import React from 'react';

var Feed = (props) => (

  <div>
    <ul>
      {props.ramsFeed.map((ramFeed) => {
        return(
          <li key={ramFeed.id} id="sidebar-wrapper">
            <div><img src={`${ramFeed.bigphoto}`}/></div>
            <div>{ramFeed.title} </div>
            <div>author: {ramFeed.author} <img src={`${ramFeed.authorphoto}`}/></div>
            <p>Updates: {ramFeed.newsfeed}
              <br/>{ramFeed.timestamp}
            </p>
          </li>
        )
      })}
    </ul>
  </div>
)

export default Feed;