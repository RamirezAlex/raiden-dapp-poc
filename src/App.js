import React, { Component } from 'react'
import channels from './utils/ChannelService'
import ChannelList from './components/ChannelList'
import EventList from './components/EventList'

import BigNumber from 'bignumber.js'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      channelsOpened: [],
      events: []
    }
  }

  componentWillMount () {
    this.subscribeToChannelEvents()
  }

  addOpenChannel (event) {
    const { participant1, participant2 } = event.returnValues
    const channelIdentifier = new BigNumber(event.returnValues.channel_identifier).toString()
    return [...this.state.channelsOpened, {
      channelIdentifier,
      participant1,
      participant2
    }]
  }

  addEvent (event) {
    const channelIdentifier = new BigNumber(event.returnValues.channel_identifier).toString()
    return [...this.state.events, {
      id: event.id,
      channelIdentifier,
      event: event.event
    }]
  }

  removeOpenChannel (event) {
    const channelIdentifier = new BigNumber(event.returnValues.channel_identifier).toString()
    const { channelsOpened } = this.state
    const index = channelsOpened.findIndex(channel => channel.channelIdentifier === channelIdentifier)
    channelsOpened.splice(index, 1)
  }

  subscribeToChannelEvents () {
    channels.events.allEvents({
      fromBlock: 0
    }, (error, event) => {
      if (!error) {
        switch (event.event) {
          case 'ChannelOpened':
            this.setState({
              channelsOpened: this.addOpenChannel(event),
              events: this.addEvent(event)
            })
            break
          case 'ChannelClosed':
            this.removeOpenChannel(event)
            this.setState({ events: this.addEvent(event) })
            break
          case 'ChannelSettled':
            this.setState({ events: this.addEvent(event) })
            break
          default:
            break
        }
      }
    })
  }

  render () {
    const { channelsOpened, events } = this.state

    return (
      <div className='App'>
        <h2>Channels Opened</h2>
        <ChannelList channelsOpened={channelsOpened} />

        <h2>Channel Events</h2>
        <EventList events={events} />
      </div>
    )
  }
}

export default App
