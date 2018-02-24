import React from 'react'
import Card from '../containers/card'
import Pagination from '../containers/paginator'

const cardClasses = {card:'feed-item animated fadeIn'}

const SerieList = ({ series, onClick, pages, goToPage }) => (
  <div>
    <div className="pagination">
      <Pagination items={pages} changePage={goToPage} />
    </div>
    <div className="wrapper">
      {series.map((item, i) => (
        <Card item={item} key={item._id} classes={cardClasses} clickCallback={onClick}/>
      ))}
    </div>
  </div>
);

export default SerieList;
