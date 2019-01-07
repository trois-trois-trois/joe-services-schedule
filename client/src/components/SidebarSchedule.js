import React from 'react';

const style = {
  image: {
    border: '1px solid #ccc',
    background: '#fefefe',
  },
}


const SidebarSchedule = ({ramsSchedule}) => (
  <div className="container-fluid">
    <div className="row justify-content-start">
      <div className="col-4">
      <h4>Regular Season</h4>
      {ramsSchedule.map(schedule => (
        // <pre key={schedule.id}>
          <p key={schedule.id}>
            <img src={`${schedule.opponentlogo}`} className="rounded-circle" width={20} height={20} style={style.image}/>
            {schedule.vs} {schedule.opponent} {schedule.result}
          </p>
          // </pre>
          ))}
      </div>
    </div>
  </div>
  )

export default SidebarSchedule;



// <table className="table table-striped" >
//       <thead>
//         <tr>
//           {/* //add column headings here */}
//           <th scope ="col">Week</th>
//           <th scope ="col">Date</th>
//           <th scope ="col">Opponent</th>
//           <th scope ="col">Result</th>
//           <th scope ="col">W-L</th>
//           <th scope ="col">HI PASS</th>
//           <th scope ="col">HI REC</th>
//           <th scope ="col">HI RUSH</th>
//         </tr>
//       </thead>
//       {/* zen code td */}
//       {/* tbody>tr>td*9 */}
//       <tbody>
//         {ramsSchedule.map(schedule => (
//         <tr key={schedule.id}>
//           <td>{schedule.week}</td>
//           <td>{schedule.date}</td>
//           <td>{schedule.vs}<img src={`${schedule.opponentlogo}`} className="rounded-circle" width={25} height={25} style={style.image}/> {schedule.city}</td>
//           <td>{schedule.wl} {schedule.result}</td>
//           <td>{schedule.winloss}</td>
//           <td>{schedule.players} {schedule.stats.pass} yards</td>
//           <td>{schedule.players} {schedule.stats.rec} yards</td>
//           <td>{schedule.players} {schedule.stats.rush} yards</td>
//         </tr>
//         ))}
//       </tbody>
//     </table>

