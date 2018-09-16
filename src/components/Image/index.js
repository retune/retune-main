import * as React from 'react'
import get from 'lodash/get'
import classnames from 'classnames'
import Img from 'gatsby-image'

import styles from './index.module.css'

const Image = ({
  className = '',
  position,
  source,
  width,
  height,
  auto = false,
}) => {
  const classes = classnames(styles.Image, className)
  const style = auto ? null : { width, height }
  const gatsbyImage = get(source, 'localFile.childImageSharp', null)

  let image = null

  // Using gatsby's image processing
  if (gatsbyImage && gatsbyImage.fixed) {
    image = (
      <Img className={classes} style={{ position }} fixed={gatsbyImage.fixed} />
    )
  } else if (gatsbyImage && gatsbyImage.fluid) {
    image = (
      <Img className={classes} style={{ position }} fluid={gatsbyImage.fluid} />
    )
  } else if (get(source, 'localFile.publicURL')) {
    image = (
      <div className={classes} style={style}>
        <img src={get(source, 'localFile.publicURL')} />
      </div>
    )
  }

  return image
}

export const fluidImageFragment = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid {
        base64
        aspectRatio
        src
        srcSet
        sizes
      }
    }
  }
`

export default Image
