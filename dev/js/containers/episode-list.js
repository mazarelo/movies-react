import React from 'react';

const EpisodeList = props => {
  return props.episodes !== null ? (
    <div className={"episode-list animated "+(props.status ? 'slideInUp': 'slideOutDown')}>
      <div className="close-button"><i className="fa fa-times"></i></div>
      <ul>
        {props.episodes.map(episode => (
          <li>
            <h4>S{episode.season}E{episode.episode} - {episode.title} 
            <div className="download-list">
              {Object.keys(episode.torrents).map((key, i) => i !== 0 ? (
                <a href={episode.torrents[key].url}> {key} <i className="fa fa-download"></i></a>
              ): null)}
            </div>
            </h4>
            <p>{episode.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : null
}

export default EpisodeList