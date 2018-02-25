import React from 'react';

const SimpleMediaCard = (props) => {
  const { classes, item, clickCallback } = props;
  return (
    <div className={classes.card} onClick={()=> clickCallback(item)}>
      <div className="header">
        <figure>
          <img src={item.images.banner}/>
        </figure>
      </div>
      <div className="action-buttons">
      </div>
    </div>
  );
}

export default SimpleMediaCard