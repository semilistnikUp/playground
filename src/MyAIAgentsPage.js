import React, { useState } from 'react';
import styles from './styles';
import AgentWidget from './AgentWidget';

function MyAIAgentsPage() {
  // Sample data for agents
  const agents = [
    {
      id: 1,
      name: 'Agent name #1',
      type: 'Pro-Gamer',
      status: 'Idle',
      avatar: '/api/placeholder/76/76',
      tasks: [
        'Search X for Apple.corp news...',
        'Bring news from followers...'
      ]
    },
    {
      id: 2,
      name: 'Agent name #2',
      type: 'Social Media Nerd',
      status: 'Posting in street chats',
      avatar: '/api/placeholder/76/76',
      tasks: [
        'Search X for Apple.corp news...',
        'Bring news from followers...'
      ],
      moreCount: 5
    },
    {
      id: 3,
      name: 'Agent name #2',
      type: 'Social Media Nerd',
      status: 'Posting in street chats',
      avatar: '/api/placeholder/76/76',
      tasks: [
        'Search X for Apple.corp news...'
      ],
      moreCount: 5
    },
    {
      id: 4,
      name: 'Agent name #3',
      type: 'Social Media Nerd',
      status: 'Checking the latest PR',
      avatar: '/api/placeholder/76/76',
      tasks: []
    },
    {
      id: 5,
      name: 'Agent name #3',
      type: 'Social Media Nerd',
      status: 'Checking the latest PR',
      avatar: '/api/placeholder/76/76',
      tasks: []
    }
  ];

  // Sample data for completed tasks
  const completedTasks = [
    { id: 1, name: 'task 2 name', time: '18:45' },
    { id: 2, name: 'task 2 name', time: '18:45' },
    { id: 3, name: 'task 3 name', time: '18:45' }
  ];

  // Sample data for ideas
  const ideas = [
    { id: 1, text: 'Co-op games with my AI Team', image: '/api/placeholder/300/150' },
    { id: 2, text: 'Stream for me', image: '/api/placeholder/300/150' }
  ];

  return (
    <>
      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Left Column - Agents List */}
        <div style={styles.leftColumn}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h2 style={styles.sectionTitle}>My Agents</h2>
            <button style={styles.addNewButton}>Add New Agent</button>
          </div>

          <div style={styles.agentsList}>
            {agents.map(agent => (
              <AgentWidget key={agent.id} agent={agent} />
            ))}
          </div>
        </div>

        {/* Center Column - Chat Area */}
        <div style={styles.centerColumn}>
          {/* This is the main chat/interaction area */}
          <div style={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px'
          }}>
            {/* Message area would go here */}
            <div style={{flex: 1}}></div>
            
            {/* Input field at bottom */}
            <div style={styles.inputContainer}>
              <input 
                type="text" 
                placeholder="What will your team to do?" 
                style={styles.inputField}
              />
              <button style={styles.voiceButton}>🎤</button>
            </div>
          </div>
        </div>

        {/* Right Column - Ideas and Completed Tasks */}
        <div style={styles.rightColumn}>
          {/* Ideas Section */}
          <div>
            <h3 style={styles.sectionTitle}>Ideas (tasks to do based on the Team)</h3>
            <div>
              {ideas.map(idea => (
                <div key={idea.id} style={styles.ideaCard}>
                  <img src={idea.image} alt="Idea" style={styles.ideaImage} />
                  <div style={styles.ideaFooter}>
                    <div style={styles.ideaIcon}>✓</div>
                    <span style={styles.ideaText}>{idea.text}</span>
                    <button style={styles.playButton}>▶</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Completed Tasks Section */}
          <div style={styles.completedTasksList}>
            <h3 style={styles.sectionTitle}>Completed Tasks</h3>
            {completedTasks.map(task => (
              <div key={task.id} style={styles.completedTaskItem}>
                <div style={styles.taskQuestion}>?</div>
                <div style={styles.taskInfo}>
                  <p style={styles.taskName}>{task.name}</p>
                  <p style={styles.taskTime}>{task.time}</p>
                </div>
                <img src="/api/placeholder/35/35" alt="Avatar" style={{borderRadius: '50%'}} />
              </div>
            ))}
            <button style={styles.showAllButton}>Show All</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAIAgentsPage;