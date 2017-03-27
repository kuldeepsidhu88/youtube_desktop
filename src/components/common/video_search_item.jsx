import React from 'react';
import { Link } from 'react-router';

class VideoSearchItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const vid = this.props.vid;
    const { description, title, channelTitle, publishedAt } = vid.snippet;
    const { url } = vid.snippet.thumbnails.medium;

    let videoId;
    if (typeof vid.id === 'string') {
      videoId = vid.id;
    } else {
      videoId = vid.id.videoId;
    }

    return (
      <div className="index-item">
        <Link to={`watch/${videoId}`} className="index-item-left">
          <img src={url} />
        </Link>

        <div className="index-item-right">
            <h1>{title}</h1>
            <p>{channelTitle}</p>
            <p>{description.slice(0, 350) + '...'}</p>
        </div>
      </div>
    );
  }
}

export { VideoSearchItem };
