import React from 'react'

const Pagination = props => {
  return props.items !== null ? (
    <ul className="wrapper">
      {props.items.map((page, i) => (
        <li className="page" onClick={() => props.changePage(page)}>{i+1}</li>
      ))}
    </ul>
  ) : null
};

export default Pagination;
