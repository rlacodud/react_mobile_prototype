import React from 'react';
import { useState } from 'react';
import Swipe from 'react-easy-swipe';
import $ from 'jquery';

import "./App.css";

let SwipeMode = null;
let scrollCount = 0;

function Main({ mode, getData }) {

  const [Opacity, setOpacity] = useState(1);
  const [Scale, setScale] = useState(1);
  const [scrollDown, setScrollDown] = useState(0);


  function onSwipeUp() {
    SwipeMode = 'down';
    scrollCount++;
    if (scrollCount > 2) {
      scrollCount = 2;
    }
    console.log('down', Opacity, scrollCount);
    if (SwipeMode === 'down' && scrollCount === 1) {
      setOpacity(0);
      setScale(0);
      setScrollDown(-52);
    } else if (SwipeMode === 'down' && scrollCount === 2) {
      setScrollDown(-105);
    }
  }

  // Swipe 진행 함수
  function onSwipeMove(position, event) {
    let positionY = position.y;
    // console.log(positionY);
    if (positionY >= 0 && SwipeMode === 'up' && scrollCount === 0) {
      setOpacity(1);
      setScale(1);
      setScrollDown(0);
    }
    if (positionY <= 0 && positionY >= -20) {
      setOpacity(0.9);
      setScale(0.9);
      setScrollDown(-4);
    }
    else if (positionY <= 20 && positionY >= -60) {
      setOpacity(0.7);
      setScale(0.7);
      setScrollDown(-8);
    }
    else if (positionY <= -60 && positionY >= -100) {
      setOpacity(0.6);
      setScale(0.6);
      setScrollDown(-12);
    }
    else if (positionY <= -100 && positionY >= -140) {
      setOpacity(0.5);
      setScale(0.5);
      setScrollDown(-16);
    }
    else if (positionY <= -140 && positionY >= -180) {
      setOpacity(0.4);
      setScale(0.4);
      setScrollDown(-20);
    }
    else if (positionY <= -180 && positionY >= -220) {
      setOpacity(0.3);
      setScale(0.3);
      setScrollDown(-24);
    }
    else if (positionY <= -220 && positionY >= -260) {
      setOpacity(0.2);
      setScale(0.2);
      setScrollDown(-28);
    }
    else if (positionY <= -260 && positionY >= -300) {
      setOpacity(0.1);
      setScale(0.1);
      setScrollDown(-32);
    }
    else if (positionY <= -300) {
      setOpacity(0);
      setScale(0);
      setScrollDown(-52);
    }
  }

  function onSwipeDown() {
    SwipeMode = 'up';
    scrollCount--;
    if (scrollCount < 0) {
      scrollCount = 0;
    }
    console.log('up', Opacity, scrollCount);
    if (SwipeMode === 'up' && scrollCount === 1) {
      setOpacity(0);
      setScale(0);
      setScrollDown(-52);
    }
    else if (SwipeMode === 'up' && scrollCount === 0) {
      setOpacity(1);
      setScale(1);
      setScrollDown(0);
    }
  }

  return (
    <Swipe
      onSwipeDown={onSwipeDown}
      onSwipeUp={onSwipeUp}
      onSwipeMove={onSwipeMove}
    >
      <div className="scrollview animation">
        <ul className="scrollview-inner">
          <li className='backgroundImage on' id='one'
            style={{ opacity: Opacity, transform: `translate(-50%, -50%) scale(${Scale})` }}
          >
            <div className='up-image'>
              <div className='image backgroundImage'></div>
            </div>
            <div className='down-background backgroundImage'></div>
            <div className="arrow backgroundImage"
              onClick={event => {
                event.preventDefault();
                getData('SLIDE')
                scrollCount = 0;
              }}
              onMouseEnter={event => {
                event.preventDefault();
                $('#one .image').css({
                  'transform': 'scale(1.5)'
                })
                $('#one .down-background').css({
                  'height': '625px'
                })
              }}
              onMouseLeave={event => {
                event.preventDefault();
                $('#one .image').css({
                  'transform': 'scale(1)'
                })
                $('#one .down-background').css({
                  'height': '700px'
                })
              }}
            ></div>
          </li>
          <div className="scroll"
            style={{ transform: `translateY(${scrollDown}%)` }}
          >
            <li className="backgroundImage" id='two'>
              <div className='up-image'>
                <div className='image backgroundImage'></div>
              </div>
              <div className='down-background backgroundImage'></div>
              <div className="arrow backgroundImage"
                onClick={event => {
                  event.preventDefault();
                  getData('SLIDE')
                  scrollCount = 0;
                }}
                onMouseEnter={event => {
                  event.preventDefault();
                  $('#two .image').css({
                    'transform': 'scale(1.5)'
                  })
                  $('#two .down-background').css({
                    'height': '625px'
                  })
                }}
                onMouseLeave={event => {
                  event.preventDefault();
                  $('#two .image').css({
                    'transform': 'scale(1)'
                  })
                  $('#two .down-background').css({
                    'height': '700px'
                  })
                }}
              ></div>
            </li>
            <li className="backgroundImage" id='three'>
              <div className='up-image'>
                <div className='image backgroundImage'></div>
              </div>
              <div className='down-background backgroundImage'></div>
              <div className="arrow backgroundImage"
                onClick={event => {
                  event.preventDefault();
                  getData('SLIDE')
                  scrollCount = 0;
                }}
                onMouseEnter={event => {
                  event.preventDefault();
                  $('#three .image').css({
                    'transform': 'scale(1.5)'
                  })
                  $('#three .down-background').css({
                    'height': '625px'
                  })
                }}
                onMouseLeave={event => {
                  event.preventDefault();
                  $('#three .image').css({
                    'transform': 'scale(1)'
                  })
                  $('#three .down-background').css({
                    'height': '700px'
                  })
                }}
              ></div>
            </li>
          </div>
        </ul>
      </div>
    </Swipe>
  )
}

export default Main;