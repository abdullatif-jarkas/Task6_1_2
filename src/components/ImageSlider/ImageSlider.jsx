import React, { useState } from 'react'
import './ImageSliderStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'



const ImageSlider = ({images}) => {
  function showNextImg() {
    setImgIndex(index => {
      if(index === images.length - 1) return 0;
      return index + 1;
    })
  }
  function showPrevImg() {
    setImgIndex(index => {
      if(index === 0) return images.length - 1;
      return index - 1;
    })
  }
  const [imgIndex, setImgIndex] = useState(0);
  return (
    <div className='image-slider'> 
      <div className='images'>
        {images.map(url => {
          return (
            <img key={url} src={url} alt="" style={{translate: `${-100 * imgIndex}%`}}/>
          )
        })}
      </div>
      <button onClick={showNextImg} className='img-slider-btn'><FontAwesomeIcon icon={faArrowCircleRight} /></button>
      <button onClick={showPrevImg} className='img-slider-btn'><FontAwesomeIcon icon={faArrowCircleLeft} /></button>
      <div className='indicators'>
        {images.map((_, index) => {
          return <button key={index} className='indicator' onClick={() => setImgIndex(index)}>{index}</button>
        })}
      </div>
    </div>
  )
}

export default ImageSlider