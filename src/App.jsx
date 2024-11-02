import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@/reset.css';
import Nav from '@/components/nav/index.jsx';
import VideoPreview from '@/components/videoPreview';

function App() {

  return (
    <>
      <Nav />
      <VideoPreview />
    </>
  );
}

export default App
