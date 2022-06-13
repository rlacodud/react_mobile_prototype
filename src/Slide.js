import React from 'react';
import { useRef, useState, useEffect } from 'react';
import Swipe from 'react-easy-swipe';
import { useInterval } from 'usehooks-ts'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./App.css";

function Slide({ mode, getData }) {

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const [width, setWidth] = useState(0);
  const [bottom, setBottom] = useState(-100);
  const [dimDisplay, setDimDisplay] = useState('none');
  const [initialSlideNum, setInitialSlideNum] = useState(1);
  const delay = 100
  const isPlaying = true

  // useEffect(()=>{
  //   setTimeout(()=>{ setInitialSlideNum(1) }, 10000);
  // });

  useInterval(
    () => {
      if (ref1.current.classList.contains('swiper-slide-active')) {
        setWidth(0);
      } else if (ref2.current.classList.contains('swiper-slide-active')) {
        setWidth(33);
      } else if (ref3.current.classList.contains('swiper-slide-active')) {
        setWidth(66);
      } else if (ref4.current.classList.contains('swiper-slide-active')) {
        setWidth(100);
      }
    },
    isPlaying ? delay : null,
  )

  return (
    <Swipe>
    <div className='container'>
      <div className='transition-contents'>
        <div className='background'></div>
        <div className='logo'>B</div>
      </div>
      <div className='progress-bar-container'>
        <div className='progress-bar'></div>
        <div className='progress-bar-active' style={{ width: `${width}%` }}></div>
      </div>
      <div className="close" onClick={event => {
        event.preventDefault();
        getData('MAIN');
      }}>X</div>
      <div className='contents-container'>
        <div className='up-contents'></div>
        <Swiper
          className='mySwiper down-contents-container'
          spaceBetween={40}
          initialSlide={initialSlideNum}
        >
          <SwiperSlide ref={ref1} className='down-contents' />
          <SwiperSlide ref={ref2} className='down-contents' />
          <SwiperSlide ref={ref3} className='down-contents' />
          <SwiperSlide ref={ref4} className='down-contents' />
        </Swiper>
      </div>
      <div className='dim' style={{ display: dimDisplay }}></div>
      <a className='more' onClick={event => {
        event.preventDefault();
        setBottom(0);
        setDimDisplay('block');
      }}></a>
      <Swipe
        onSwipeDown={() => {
          setBottom(-100);
          setDimDisplay('none');
        }}>
        <div
          style={{ bottom: `${bottom}%` }}
          className='more-contents'
        ></div>
      </Swipe>
    </div>
  </Swipe>
  )
}

export default Slide;