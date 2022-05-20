import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PersonImage from '../PersonImage'

const SpeakerImage = ({ image, ...props }) => {
  const data = useStaticQuery(graphql`
    query speakerImageQuery {
      source: allFile(
        filter: { sourceInstanceName: { eq: "speaker-images" } }
      ) {
        edges {
          node {
            extension
            absolutePath
            relativePath
            dir
            publicURL
            childImageSharp {
              gatsbyImageData(width: 920, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `)

  return (
    <PersonImage
      edges={data.source.edges.filter(({ node }) =>
        node?.relativePath.includes(image)
      )}
      {...props}
    />
  )
}

export default SpeakerImage
