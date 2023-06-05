import { useSelector } from "react-redux"

import "./EventsList.css"



export const EventsList = () => {
  const events = useSelector(state => state.events) 

  return (
    <div className="events__container">
      {events.map(event => (
        <div className="event__container" key={event.id}>
          <img src={event.img} alt="" className="event__img" />
            <h4 className="event__title">{event.title}</h4>
            <h3 className="event__date">{event.date}</h3>
            <p className="event__location">{event.location}</p>
        </div>
      ))}
    </div>
  )
}
