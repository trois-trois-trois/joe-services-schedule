import React from 'react';

const style = {
  image: {
    border: '1px solid #ccc',
    background: '#fefefe',
  },
};


const SidebarSchedule = ({ ramsSchedule }) => (
  <div className="container-fluid">
    <div className="row justify-content-start">
      <div className="col-4">
        <h4>Regular Season</h4>
        {ramsSchedule.map(schedule => (
        // <pre key={schedule.id}>
          <p key={schedule.id}>
            <img src={`${schedule.opponentlogo}`} className="rounded-circle" width={20} height={20} style={style.image} />
            {schedule.vs}
            {' '}
            {schedule.opponent}
            {' '}
            {schedule.result}
          </p>
          // </pre>
        ))}
      </div>
    </div>
  </div>
);

export default SidebarSchedule;
