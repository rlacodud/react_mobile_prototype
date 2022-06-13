import React from 'react';
import { useState, useEffect } from 'react';
import Main from './Main';
import Slide from './Slide';

import "swiper/css";

import "./App.css";

function App() {
  const [mode, setMode] = useState((
    () => JSON.parse(window.localStorage.getItem("mode")) || 'MAIN'
  ));

  // 모드값을 가져와 로컬스토리지에 저장해둠
  useEffect(() => {
    window.localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);
  
  const getData = (mode) => {
    setMode(mode);
  }

  let mainContent = null;

  if (mode === 'MAIN') {
    mainContent = <Main mode={mode} getData={getData}/>
  } else if (mode === 'SLIDE') {
    mainContent = <Slide mode={mode} getData={getData}/>
  }

  return (
    <div>
      {mainContent}
    </div>
  );
}

export default App;