import React from 'react'
import classnames from 'classnames'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as css from './speaker-image.module.scss'

const PersonImage = ({
  edges,
  alt = '',
  color = 'orange',
  turn = 'up',
  className = '',
}) => {
  return edges.map(({ node }, i) => (
    <div
      className={classnames(
        css.speaker_image,
        css[turn],
        css[color],
        className
      )}
      key={`img-${i}`}
    >
      <div className={classnames(css[turn], css.image)}>
        {node.childImageSharp && (
          <GatsbyImage
            image={node.childImageSharp.gatsbyImageData}
            className={css.image_data}
            alt={alt}
          />
        )}
        {!node.childImageSharp && (
          <img className={css.image_data} src={node.publicURL} alt={alt} />
        )}
      </div>
    </div>
  ))
}

export default PersonImage
