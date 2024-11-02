import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@/reset.css';
import Nav from '@/components/nav/index.jsx';
import VideoPreview from '@/components/videoPreview';
import Filter from '@/components/filter';
import Ranking from '@/components/ranking';

function App() {

  return (
    <>
      <Ranking />
      <Nav />
      <Filter />
      <VideoPreview />
    </>
  );
}

export default App
