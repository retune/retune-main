import * as React from 'react'
import get from 'lodash/get'
import classnames from 'classnames'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import styles from './index.module.css'

export const extractImageUrl = function(source) {
  const gatsbyImage =
    get(source, 'localFile.childImageSharp', null) ||
    get(source, 'image.localFile.childImageSharp', null)

  if (gatsbyImage && gatsbyImage.fixed) {
    return gatsbyImage.fixed.src
  } else if (gatsbyImage && gatsbyImage.fluid) {
    return gatsbyImage.fluid.src
  } else if (get(source, 'localFile.publicURL')) {
    return get(source, 'localFile.publicURL')
  }
}

const Image = ({
  className = '',
  source,
  width,
  height,
  auto = false,
  aspectRatio = null,
  ...rest
}) => {
  const classes = classnames(styles.Image, className)
  const gatsbyImage =
    get(source, 'localFile.childImageSharp', null) ||
    get(source, 'image.localFile.childImageSharp', null)

  const style = auto ? {} : { width, height }
  if (aspectRatio != null) {
    style['--aspect-ratio'] = aspectRatio
  }

  let image = null

  // Using gatsby's image processing
  if (gatsbyImage && gatsbyImage.fixed) {
    image = (
      <Img
        {...rest}
        className={classes}
        style={style}
        fixed={gatsbyImage.fixed}
      />
    )
  } else if (gatsbyImage && gatsbyImage.fluid) {
    image = (
      <Img
        {...rest}
        className={classes}
        style={style}
        fluid={gatsbyImage.fluid}
      />
    )
  } else if (get(source, 'localFile.publicURL')) {
    image = (
      <div className={classes} style={style}>
        <img src={get(source, 'localFile.publicURL')} alt="" {...rest} />
      </div>
    )
  }

  return image
}

export const fluidImageFragment = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1400, quality: 100) {
        ...GatsbyImageSharpFluid
        #base64
        #aspectRatio
        #src
        #srcSet
        #sizes
      }
    }
  }
`

export default Image
