import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ showclear, clearUsers, setAlert }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please write somthing to search', 'light');
    } else {
      githubContext.searchUser(text);
      setText('');
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input type="text" name="text" placeholder="Serach User..."
          value={text} onChange={onChange} />
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>
      {showclear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}

    </div>
  )
}

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showclear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
}

export default Search
