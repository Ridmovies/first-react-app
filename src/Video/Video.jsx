import { useState } from 'react';
import './Video.css'

function Video(props) {
    const { title, channelName, img } = props;
    // let likesCount = 0;
    const [likesCount, setLikesCount] = useState(0)

    const increaseLikesByOne = () => {
      setLikesCount(likesCount + 1)
      // likesCount++;
      // console.log(likesCount);
      // setLikesCount(likesCount + 1);
    };

  return (
    <>
    <div className='video'>
    <img className='video-img' src={img} alt='reactLogo' />
    <p>{ title }</p>
    <p>{channelName}</p>
    <div className='video-footer'>
        <p>Like: {likesCount}</p>
        <button onClick={increaseLikesByOne}>Like</button>
    </div>
    </div>
    </>
  )
}

export default Video
