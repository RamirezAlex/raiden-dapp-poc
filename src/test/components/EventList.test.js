import React from 'react'
import EventList from '../../components/EventList'
import { create } from 'react-test-renderer'

describe('EventList', () => {
  it('Shoulde render a EventList', () => {
    expect(EventList).not.toBeNull()
    const events = [
      {
        id: 'log_0xed00bb47865f844856aacec4c5f7f79b404b58839a2f016c24ee0121d561e521',
        channelIdentifier: 2,
        event: 'ChannelOpened'
      },
      {
        id: 'log_0xe37b602261c301b249f0be08ab7da077db0d94372ea034278b57eab2ebecda59',
        channelIdentifier: 17,
        event: 'ChannelSettled'
      },
      {
        id: 'log_0x8ffb52753f6bef94827718ee9acf0839d92515723e64fe03e44a65e225204e92',
        channelIdentifier: 19,
        event: 'ChannelClosed'
      }
    ]
    const component = create(<EventList events={events} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
