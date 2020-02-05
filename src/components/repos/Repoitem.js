import React from 'react'
import PropTypes from 'prop-types'

export const Repoitem = ({ repo: { html_url, name } }) => {
  return (
    <div className="card">
      <h3>
        <a href={html_url}>{name}</a>
      </h3>

    </div>
  )
}

Repoitem.propTypes = {
  repo: PropTypes.object.isRequired
}