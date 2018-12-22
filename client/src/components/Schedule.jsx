// import React from 'react';

// var Schedule = (props) => (
//   <div className="col-xs-12" id="sticky-sidebar">
//   {/* start with rendering data in a list, then refactor to a table layout */}
//     <ul>
//       {props.ramsSchedule.map((schedule) => {
//         return(
//           <li className='team-list-item'key={schedule.id}>
//             <div className='team-list-item-teamname'><img src={`${schedule.teamlogo}`}/>@{schedule.team}</div>
//             <div>OPPONENT: <img src={`${schedule.opponentlogo}`}></img> @ {schedule.opponent}</div>
//             <div>WEEK: {schedule.week}</div>
//             <div>DATE: {schedule.date}</div>
//             <div>W/L: {schedule.result} Score:{schedule.winloss}</div>
//             <div>HIGH PASS: {schedule.players} {schedule.stats.pass} yards</div>
//             <div>HIGH REC: {schedule.players} {schedule.stats.rec} yards</div>
//             <div>HIGH RUSH: {schedule.players} {schedule.stats.rush} yards</div>
//           </li>
//         )
//       })}
//     </ul>
//   </div>
// )
// export default Schedule;

import React from 'react';


var Schedule = (props) => (
  <div>
    {/* //zen coding..hit tab and autofills
    table.table>thead>tr>th*8 */}
    <table className="table">
      <thead>
        <tr>
          {/* //add column headings here */}
          <th>Team</th>
          <th>Opponent</th>
          <th>Week</th>
          <th>Date</th>
          <th>W/L</th>
          <th>HI PASS</th>
          <th>HI REC</th>
          <th>HI RUSH</th>
        </tr>
      </thead>
      {/* zen code td */}
      {/* tbody>tr>td*8 */}
      <tbody>
        {props.ramsSchedule.map(schedule => (
        <tr key={schedule.id}>
          <td><img src={`${schedule.teamlogo}`}/>@{schedule.team}</td>
          <td><img src={`${schedule.opponentlogo}`}></img> @ {schedule.opponent}</td>
          <td>{schedule.week}</td>
          <td>{schedule.date}</td>
          <td>{schedule.result} Score:{schedule.winloss}</td>
          <td>{schedule.players} {schedule.stats.pass} yards</td>
          <td>{schedule.players} {schedule.stats.rec} yards</td>
          <td>{schedule.players} {schedule.stats.rush} yards</td>
        </tr>
          ))}
      </tbody>
    </table>
  </div>
)




export default Schedule;