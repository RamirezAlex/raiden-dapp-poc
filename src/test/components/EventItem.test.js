import React from 'react'
import EventItem from '../../components/EventItem'
import { create } from 'react-test-renderer'

describe('EventItem', () => {
  it('Shoulde render a EventItem', () => {
    expect(EventItem).not.toBeNull()
    const event = {
      id: 'log_0xe37b602261c301b249f0be08ab7da077db0d94372ea034278b57eab2ebecda59',
      channelIdentifier: 26,
      event: 'ChannelSettled'
    }

    const component = create(<EventItem event={event} count={4} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
