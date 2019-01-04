import React from 'react';

const style = {
  image: {
    border: '1px solid #ccc',
    background: '#fefefe',
  },
}

const SidebarSchedule = ({ramsSchedule}) => (
<div className="container">
  <div className="row">
    <div className="col align-self-start">
    <table className="table table-striped" >
      <thead>
        <tr>
          {/* //add column headings here */}
          <th scope ="col"></th>
          <th scope ="col"></th>
          <th scope ="col"></th>
          <th scope ="col"></th>
          <th scope ="col"></th>
          <th scope ="col"></th>
          <th scope ="col"></th>
          <th scope ="col"></th>
          <th scope ="col"></th>
          <th scope ="col"></th>
        </tr>
      </thead>
      {/* zen code td */}
      {/* tbody>tr>td*9 */}
      <tbody>
        {ramsSchedule.map(schedule => (
        <tr key={schedule.id}>
          <td>@ <img src={`${schedule.opponentlogo}`} className="rounded-circle" width={25} height={25} style={style.image}/> {schedule.opponent}</td>
          <td>{schedule.result} </td>
        </tr>
        ))}
      </tbody>
    </table>
    </div>
  </div>
</div>
)

export default SidebarSchedule;

/*
{ramsSchedule.map((schedule) => {
        return(
          <li key={schedule.id} id="sidebar-wrapper">

          </li>
        )
      })}

  */