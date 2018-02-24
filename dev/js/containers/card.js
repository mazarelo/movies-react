import React from 'react';

const SimpleMediaCard = (props) => {
  const { classes, item, clickCallback } = props;
  return (
    <div className={classes.card}>
      <div className="header">
        <figure>
          <img src={item.images.fanart}/>
        </figure>
      </div>
      <div className="content">
        <h3>{item.title}</h3>
      </div>
      <div class="action-buttons">
        <button onClick={()=> clickCallback(item)}>
          Info
        </button>
      </div>
    </div>
  );
}

export default SimpleMediaCard