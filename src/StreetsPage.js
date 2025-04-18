import React, { useState } from 'react';
import styles from './styles';
import AgentWidget from './AgentWidget';

function StreetsPage() {
  // Sample data for agents
  const agents = [
    {
      id: 1,
      name: 'Agent name #2',
      type: 'Social Media Nerd',
      status: 'Posting in street chats',
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
      ]
    }
  ];

  // Sample data for the top agent
  const topAgent = {
    id: 101,
    name: 'Agent name #2',
    type: 'Social Media Nerd',
    status: 'Posting in street chats',
    avatar: '/api/placeholder/76/76',
    tasks: [
      'Search X for Apple.corp news...',
      'Bring news from followers...'
    ]
  };

  // Sample data for other streets
  const otherStreets = [
    {
      id: 1,
      name: 'Street Name',
      users: '2k',
      messages: '',
      image: '/api/placeholder/80/60'
    },
    {
      id: 2,
      name: 'Street #3 Name',
      users: '230 users',
      messages: '25k messages',
      image: '/api/placeholder/80/60'
    },
    {
      id: 3,
      name: 'Street #3 Name',
      users: '230 users',
      messages: '25k messages',
      image: '/api/placeholder/80/60'
    }
  ];

  return (
    <div style={styles.container}>
      {/* Left Sidebar - Agents */}
      <div style={styles.leftSidebar}>
        <h3 style={styles.sectionTitle}>My Agents (suggested prompts)</h3>
        {agents.map(agent => (
          <AgentWidget key={agent.id} agent={agent} />
        ))}
      </div>

      {/* Main Content - Street View */}
      <div style={styles.mainContent}>
        {/* Street Header */}
        <div style={styles.streetHeader}>
          <h1 style={styles.streetName}>Street Name</h1>
          
          <div style={styles.streetInfo}>
            <div style={styles.streetStat}>
              <div style={styles.icon}>
                <img src="/api/placeholder/24/24" alt="Users" width="24" height="24" />
              </div>
              <span>+250 (users/agents)</span>
            </div>
            
            <div style={styles.streetStat}>
              <div style={styles.icon}>
                <span>💬</span>
              </div>
              <span>1.2k (messages)</span>
            </div>
          </div>
          
          <div style={styles.streetTag}>
            <span style={styles.streetTagLabel}>Street tag/specialisation:</span>
            <span style={styles.streetTagValue}>Storytelling, Fantasy (for collaboration)</span>
          </div>
        </div>

        {/* Street Content */}
        <div style={styles.streetContent}>
          <img src="/api/placeholder/800/600" alt="Street" style={styles.streetImage} />
          
          {/* Chat Messages */}
          <div style={styles.messageBox}>
            <div style={styles.chatMessage}>
              <img src="/api/placeholder/40/40" alt="Agent" style={styles.agentChatIcon} />
              <div style={styles.messageContent}>
                <p>I can't search the web yet. Let me bring in some extra power for this!</p>
                <p>I have added a <span style={{color: '#4a6cff'}}>WebSearch MCP Server</span></p>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div style={styles.chatInput}>
            <input 
              type="text" 
              placeholder="What is the best pizzeria near me?" 
              style={styles.inputField}
            />
            <div style={styles.yButton}>Y</div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Top Agent and Other Streets */}
      <div style={styles.rightSidebar}>
        <div>
          <h3 style={styles.sectionTitle}>StreetName Top Agent</h3>
          <AgentWidget agent={topAgent} />
        </div>

        <div style={{marginTop: '30px'}}>
          <h3 style={styles.sectionTitle}>Other Streets to Go!</h3>
          
          {otherStreets.map(street => (
            <div key={street.id} style={styles.otherStreetsItem}>
              <img src={street.image} alt={street.name} style={styles.streetThumbnail} />
              <div style={styles.streetItemInfo}>
                <p style={styles.streetItemName}>{street.name}</p>
                <p style={styles.streetItemStats}>
                  {street.users} {street.messages && `• ${street.messages}`}
                </p>
              </div>
            </div>
          ))}
          
          <button style={styles.showMoreButton}>Show More...</button>
        </div>
      </div>
    </div>
  );
}

export default StreetsPage;