import React from 'react'
const ChannelOpenItem = (props) => {
  const { channel, count } = props
  return (
    <tr>
      <td>{ count }</td>
      <td>{ channel.channelIdentifier }</td>
      <td>{ channel.participant1 }</td>
      <td>{ channel.participant2 }</td>
    </tr>
  )
}

export default ChannelOpenItem
