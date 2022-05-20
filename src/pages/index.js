import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import classnames from 'classnames'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PresentationCard from '../components/PresentationCard'

import schedule from '../../schedule'

import './index.scss'

const findSpeaker = (speakers, session) => {
  if (typeof session !== 'string') {
    return {
      session,
      title: session.title,
      activities: session.activities,
    }
  }

  const data = speakers.find((speaker) => speaker.node.parent.name === session)
  return Object.assign({}, data.node.frontmatter, { session })
}

const IndexPage = (props) => {
  const data = useStaticQuery(graphql`
    query HomePage {
      allMdx {
        edges {
          node {
            id
            parent {
              ... on File {
                name
                sourceInstanceName
              }
            }
            frontmatter {
              name
              title
            }
          }
        }
      }
    }
  `)

  const speakers = data.allMdx.edges
  const [day, setDay] = useState(new Date().getDate() === 27 ? 'js2' : 'js1')

  return (
    <>
      <svg
        className="triangle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 262 830"
      >
        <path d="M262 830L1 0h261.8l-.8 830z" />
      </svg>
      <Header />
      <main className="site_content">
        <section className="schedule">
          <div className="days">
            <a
              className={classnames('days_link', day === 'js1' ? 'active' : '')}
              onClick={() => setDay('js1')}
            >
              Day 1
            </a>
            <a
              className={classnames('days_link', day === 'js2' ? 'active' : '')}
              onClick={() => setDay('js2')}
            >
              Day 2
            </a>
          </div>

          {Object.entries(schedule).map(([event, program]) => (
            <div
              key={event}
              className={classnames(
                'program',
                event,
                day === event ? 'show' : ''
              )}
            >
              {Object.entries(program)
                .sort(([timeA], [timeB]) => {
                  const a = parseInt(timeA)
                  const b = parseInt(timeB)
                  return a - b
                })
                .map(([time, session], index, sessions) => {
                  const speaker = findSpeaker(speakers, session)
                  speaker.time = time

                  const date = new Date()
                  const hour = parseInt(time.slice(0, 2), 10)
                  const minute = parseInt(time.slice(2), 10)

                  let onAir =
                    date.getHours() === hour && date.getMinutes() >= minute

                  if (sessions[index + 1]) {
                    const nextDate = sessions[index + 1][0]
                    const nextHour = parseInt(nextDate.slice(0, 2), 10)
                    const nextMinute = parseInt(nextDate.slice(2), 10)

                    onAir =
                      onAir &&
                      !(
                        date.getHours() === nextHour &&
                        date.getMinutes() >= nextMinute
                      )
                  }

                  return (
                    <PresentationCard
                      onAir={onAir}
                      key={`${event}-${time}-${session}`}
                      id={session}
                      data={speaker}
                    />
                  )
                })}
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage
