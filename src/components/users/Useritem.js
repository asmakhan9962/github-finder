import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Useritem = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <div className="card text-center">
      <img src={avatar_url} className="round-img" style={{ width: '60px' }} alt=""></img>
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

Useritem.prototypes = {
  user: PropTypes.object.isRequired,
}

export default Useritem
