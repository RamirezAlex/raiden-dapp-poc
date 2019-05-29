import React from 'react'
import ChannelOpenItem from '../../components/ChannelOpenItem'
import { create } from 'react-test-renderer'

describe('ChannelOpenItem', () => {
  it('Shoulde render a ChannelOpenItem', () => {
    expect(ChannelOpenItem).not.toBeNull()
    const channel = {
      channelIdentifier: 24,
      participant1: '0x0E809A051034723beE67871a5A4968aE22d36C5A',
      participant2: '0x504300C525CbE91Adb3FE0944Fe1f56f5162C75C'
    }
    const component = create(<ChannelOpenItem channel={channel} count={3} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
