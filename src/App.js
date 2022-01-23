import React from 'react';
// import { useSelector } from 'react-redux';
import Arrows from './components/Arrows';
import Controls from './components/Controls';
import Grid from './components/Grid';


function App() {

  // const state = useSelector(state => state);
  return (
    <div className={'App'}>
      <Grid />
      <Controls />
      <Arrows />
    </div>
  )
}

export default App;
