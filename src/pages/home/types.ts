type eventsResponseType = {
  name: string
  start_time: string
  venue: { full_address: string }
  thumbnail: string
}

type eventData = {
  id: number
  eventName: string
  date: string
  location: string
  thumbnail: string
}

export type { eventsResponseType, eventData }
