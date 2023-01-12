import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { About } from './pages/About/About';
import { EditTest } from './pages/EditTest/EditTest';
import { Home } from './pages/Home/Home';
import { Test } from './pages/TestPage/TestPage';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/editor" element={<EditTest />} />
        <Route path="/test/:testId" element={<Test />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
