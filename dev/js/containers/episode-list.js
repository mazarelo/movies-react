import React from 'react';

const EpisodeList = props => {
  return props.episodes !== null ? (
    <div className={"episode-list animated "+(props.status ? 'slideInUp': 'slideOutUp')}>
      <ul>
        {props.episodes.map(episode => (
          <li>
            <p>S{episode.season}E{episode.episode} - {episode.title}</p>
            <p>{episode.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : null
}

export default EpisodeList