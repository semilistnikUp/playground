import React from 'react';
import styles from './styles';

function MCPServerItem({ icon, title, subtitle, count, onAdd }) {
  return (
    <div style={styles.mcpServerItem.container}>
      <div style={styles.mcpServerItem.leftContent}>
        <img src={icon} alt={title} style={styles.mcpServerItem.icon} />
        <div style={styles.mcpServerItem.textContainer}>
          <p style={styles.mcpServerItem.title}>{title}</p>
          <p style={styles.mcpServerItem.subtitle}>
            {subtitle}
            {count && <span style={styles.mcpServerItem.count}>{count}</span>}
          </p>
        </div>
      </div>
      <button style={styles.mcpServerItem.addButton} onClick={onAdd}>
        Add
      </button>
    </div>
  );
}

export default MCPServerItem;