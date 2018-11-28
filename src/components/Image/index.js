import * as React from 'react'
import get from 'lodash/get'
import classnames from 'classnames'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import styles from './index.module.css'

const Image = ({ className = '', source, width, height, auto = false }) => {
  const classes = classnames(styles.Image, className)
  const style = auto ? null : { width, height }
  const gatsbyImage =
    get(source, 'localFile.childImageSharp', null) ||
    get(source, 'image.localFile.childImageSharp', null)

  let image = null

  // Using gatsby's image processing
  if (gatsbyImage && gatsbyImage.fixed) {
    image = <Img className={classes} fixed={gatsbyImage.fixed} />
  } else if (gatsbyImage && gatsbyImage.fluid) {
    image = <Img className={classes} fluid={gatsbyImage.fluid} />
  } else if (get(source, 'localFile.publicURL')) {
    image = (
      <div className={classes} style={style}>
        <img src={get(source, 'localFile.publicURL')} alt="" />
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
