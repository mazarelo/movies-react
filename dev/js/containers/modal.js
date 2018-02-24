import React from 'react'
import EpisodeList from './episode-list'

const ModalWindow = props => {
  return props.serie !== null ? (
    <div className={"modal animated "+(props.showModal ? 'fadeIn': 'fadeOut')}>
      <div className={"modal-content animated "+(props.showModal? 'fadeInUp': 'fadeOutDown')}>
        <div className="banner">
          <img src={props.serie.images.fanart}/>
          <div className="episodes-button" onClick={()=> props.showEpisodes()}>view episodes</div>
          <EpisodeList status={props.episodeShowStatus} episodes={props.serie.episodes} hideEpisodes={props.hideEpisodes}/>
        </div>
        <h1>{props.serie.title}</h1>
        <date>{props.serie.year}</date>
        <div className="modal-content">
          {props.serie.genres.map(genre=>(
            <span className="chip">{genre}</span>
          ))}
          <p>{props.serie.synopsis}</p>
        </div>
        <button className="close-button" onClick={()=> props.hideModal()}>close</button>
      </div> 
    </div>
  ) : null
};

export default ModalWindow;
