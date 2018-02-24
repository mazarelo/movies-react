import React from 'react'
import { closeModal } from '../actions'

const ModalWindow = props => {
  return props.serie !== null ? (
    <div className={"modal animated "+(props.showModal ? 'fadeIn': 'fadeOut')}>
      <div className={"modal-content animated "+(props.showModal? 'fadeInUp': 'fadeOutDown')}>
        <h1>{props.serie.title}</h1>
        <date>{props.serie.year}</date>
        <div className="modal-content">
          {props.serie.genres.map(genre=>(
            <span className="chip">{genre}</span>
          ))}
          <p>{props.serie.synopsis}</p>
        </div>
        <button onClick={()=> props.hideModal()}>close</button>
      </div> 
    </div>
  ) : null
};

export default ModalWindow;
