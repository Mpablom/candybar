import React from 'react';
import './App.css';
import { Banner } from './components/Banner/Banner';
import { Bio } from './components/Bio/Bio';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <section id='bio'>
          <Bio />
        </section>
        <section id='galeria'>
        </section>
        <section id='contacto'>
        </section>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;