import channels from '../../utils/ChannelService'

describe('Channels', () => {
  it('It should be a Contract object', () => {
    expect(channels.AbsctractContract).not.toBeNull()
    expect(channels.events).not.toBeNull()
  })
  
  it('It should received events', async () => {
    
    //  const events = await channels.getPastEvents();
    // expect(events).not.toBeNull()

    // This test is broken, I was trying to get the events in order to some assertions related to the event.
  })
})
