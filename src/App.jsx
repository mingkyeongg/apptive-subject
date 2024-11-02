import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@/reset.css';
import Nav from '@/components/nav/index.jsx';

function App() {

  return (
    <>
      <Nav />
      <h1>Hello Vite + React!</h1>
      <p>
        <img src={reactLogo} alt="react logo" />
        <img src={viteLogo} alt="vite logo" />
      </p>
    </>
  );
}

export default App
