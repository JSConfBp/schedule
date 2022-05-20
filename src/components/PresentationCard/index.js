import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

export default ({ data, id, onAir }) => {
  const { name, title, time, activities } = data
  const start = `${time.slice(0, 2)}:${time.slice(2)}`

  return (
    <div className="presentation">
      <div className="presentation_time">
        <time dateTime={start}>{start}</time>
      </div>
      <p className="presentation_name">{name}</p>
      <p className="presentation_description">{title}</p>

      {activities && (
        <ul className="activities">
          {activities.map((activity, i) => (
            <li key={`activity_${i}`}>{activity}</li>
          ))}
        </ul>
      )}

      {name && (
        <Link className="presentation_link" to={`/speakers/${id}`}>
          More details
        </Link>
      )}

      {onAir && <span className="presentation_live">On air</span>}
    </div>
  )
}
