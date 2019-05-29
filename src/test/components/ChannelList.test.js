import React from 'react'
import ChannelList from '../../components/ChannelList'
import { create } from 'react-test-renderer'

describe('ChannelList', () => {
  it('Shoulde render a EventList', () => {
    expect(ChannelList).not.toBeNull()
    const channelsOpened = [
      {
        channelIdentifier: 24,
        participant1: '0x0E809A051034723beE67871a5A4968aE22d36C5A',
        participant2: '0x504300C525CbE91Adb3FE0944Fe1f56f5162C75C'
      },
      {
        channelIdentifier: 27,
        participant1: '0x2046F7341f15D0211ca1EBeFb19d029c4Bc4c4e7',
        participant2: '0x32bBc8ba52FB6F61C24809FdeDA1baa5E55e55EA'
      },
      {
        channelIdentifier: 36,
        participant1: '0xAa445ec9d7c98D850e01d45423B75ADf5de0b256',
        participant2: '0x32bBc8ba52FB6F61C24809FdeDA1baa5E55e55EA'
      }
    ]
    const component = create(<ChannelList channelsOpened={channelsOpened} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
