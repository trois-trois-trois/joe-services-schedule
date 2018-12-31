import React from 'react';


var Schedule = (props) => (
  <div><h1>Los Angeles Rams Schedule - 2018</h1>
    {/* //zen coding..hit tab and autofills
    table.table>thead>tr>th*8 */}
    <table className="table table-striped" >
      <thead>
        <tr>
          {/* //add column headings here */}
          <th scope ="col">Team</th>
          <th scope ="col">Week</th>
          <th scope ="col">Date</th>
          <th scope ="col">Result</th>
          <th scope ="col">W-L</th>
          <th scope ="col">Opponent</th>
          <th scope ="col">HI PASS</th>
          <th scope ="col">HI REC</th>
          <th scope ="col">HI RUSH</th>
        </tr>
      </thead>
      {/* zen code td */}
      {/* tbody>tr>td*9 */}
      <tbody>
        {props.ramsSchedule.map(schedule => (
        <tr key={schedule.id}>
          <td><img src={`${schedule.teamlogo}`}/>@{schedule.team}</td>
          <td>{schedule.week}</td>
          <td>{schedule.date}</td>
          <td>{schedule.result} Score:{schedule.winloss}</td>
          <td>{schedule.winloss}</td>
          <td>@<img src={`${schedule.opponentlogo}`} className="rounded-circle"></img> {schedule.opponent}</td>
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