import styles from "./App.module.css"
import TopBar from './components/topbar';
import Mint from './components/mint';
// import { useState } from "react";
import HomePage from './components/homepage';
import Collections from './components/collections';
// import Modal from 'react-bootstrap/Modal'
import { NotificationContainer } from 'react-notifications';
import { Routes, Route } from "react-router-dom";
import Marketplace from "./components/marketplace";
import Wallets from "./components/wallets";
import Mandala from "./components/mandala";

function App() {
  return (
    <div className={styles.App}>
      <TopBar loggedIn={false} />
      <NotificationContainer className={styles.Notifs} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/wallet/:id" element={<Wallets />} />
        <Route path="/mandala/:id" element={<Mandala />} />
      </Routes>
    </div>
  );
}

export default App;
