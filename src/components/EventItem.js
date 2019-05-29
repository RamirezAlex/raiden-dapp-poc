import React from 'react'
const EventItem = (props) => {
  const { event, count } = props
  return (
    <tr className={event.event}>
      <td>{ count }</td>
      <td>{ event.id }</td>
      <td>{ event.channelIdentifier }</td>
      <td>{ event.event }</td>
    </tr>
  )
}

export default EventItem
