import React from 'react'
import { Repoitem } from './Repoitem'
import PropTypes from 'prop-types'

export const Repos = ({ repos }) => {
  return repos.map(repo => <Repoitem key={repo.id} repo={repo} />);
}

export default Repos;

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
}