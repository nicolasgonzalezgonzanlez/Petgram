import React from 'react'
import PropTypes from 'prop-types'
import { Helmet as HelmetNpm } from 'react-helmet'

export const Helmet = ({ title, subtitle }) => (
  <HelmetNpm>
    <title>{title} -Petgram</title>
    <meta name='description' content={subtitle} />
  </HelmetNpm>
)

Helmet.propTypes = {
  title: PropTypes.string,
  subscribe: PropTypes.string
}
