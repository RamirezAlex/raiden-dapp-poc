import React from 'react'
import ChannelOpenItem from './ChannelOpenItem'

const ChannelList = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>#</th>
          <th>Channel Identifier:</th>
          <th>Participant1:</th>
          <th>Participant2:</th>
        </tr>
        {
          props.channelsOpened.map((channel, key) => (
            <ChannelOpenItem channel={channel} count={key} key={key} />
          ))
        }
      </tbody>
    </table>
  )
}

export default ChannelList
