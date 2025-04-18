import React from 'react';
import styles from './styles';

// Navigation bar component
function NavBar({ currentPage, setCurrentPage, balance, handleAddBalance }) {
  return (
    <div style={styles.topNav}>
      <div style={styles.navLinks}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}>S</span>
        </div>
        <div 
          style={currentPage === 'dashboard' ? {...styles.navLink, ...styles.activeNavLink} : styles.navLink}
          onClick={() => setCurrentPage('dashboard')}
        >
          Dashboard
        </div>
        <div 
          style={currentPage === 'agents' ? {...styles.navLink, ...styles.activeNavLink} : styles.navLink}
          onClick={() => setCurrentPage('agents')}
        >
          My AI Agents
        </div>
        <div 
          style={currentPage === 'streets' ? {...styles.navLink, ...styles.activeNavLink} : styles.navLink}
          onClick={() => setCurrentPage('streets')}
        >
          Streets
        </div>
      </div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div style={styles.balance}>
          <span>Balance</span>
          <span style={styles.balanceValue}>¢ {balance}</span>
          <button style={styles.addButton} onClick={handleAddBalance}>+</button>
        </div>
        <div style={styles.userIcon}>👤</div>
      </div>
    </div>
  );
}

export default NavBar;