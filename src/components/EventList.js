import React from 'react'
import EventItem from './EventItem'

const EventList = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>#</th>
          <th>Event ID:</th>
          <th>Channel Identifier:</th>
          <th>Event Type: </th>
        </tr>
        {
          props.events.map((event, key) => (
            <EventItem event={event} count={key} key={key} />
          ))
        }
      </tbody>
    </table>
  )
}

export default EventList
