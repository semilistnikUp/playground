import React from 'react';
import styles from './styles';

// AgentWidget Component - Reusable agent card
function AgentWidget({ agent, showTasks = true }) {
  return (
    <div style={styles.agentCard}>
      <div style={styles.agentHeader}>
        <img 
          src={agent.avatar || "/api/placeholder/76/76"} 
          alt={agent.name} 
          style={styles.agentAvatar} 
        />
        <div style={styles.agentInfo}>
          <h4 style={styles.agentName}>{agent.name}</h4>
          <p style={styles.agentType}>{agent.type}</p>
          <p style={styles.agentStatus}>{agent.status}</p>
        </div>
        {agent.moreCount && <span style={styles.moreLabel}>{agent.moreCount} more</span>}
      </div>
      
      {showTasks && agent.tasks && agent.tasks.length > 0 && (
        <div style={styles.tasksList}>
          {agent.tasks.map((task, index) => (
            <div key={index} style={styles.taskItem}>
              <div style={styles.taskIcon}>✓</div>
              <span>{task}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AgentWidget;