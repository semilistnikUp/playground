import React, { useState } from 'react';
import styles from './styles';
import MyAIAgentsPage from './MyAIAgentsPage';
import StreetsPage from './StreetsPage';
import NavBar from './NavBar';
import AgentWidget from './AgentWidget';
import MCPServerItem from './MCPServerItem';

// Sidebar Component
function Sidebar({ agents, suggestedStreets, suggestedMCPs }) {
  const [showAddAgent, setShowAddAgent] = useState(false);
  const [newAgentName, setNewAgentName] = useState('');
  
  const handleAddAgent = () => {
    setShowAddAgent(true);
  };
  
  return (
    <div style={styles.sidebar}>
      <div className="my-agents">
        <h3 style={styles.h3}>My Agents</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {agents.map((agent, index) => (
            <li key={index} style={{ marginBottom: '15px' }}>
              <AgentWidget agent={agent} showTasks={false} />
            </li>
          ))}
        </ul>
        
        {showAddAgent ? (
          <div>
            <input 
              type="text" 
              placeholder="Agent name" 
              style={styles.input}
              value={newAgentName}
              onChange={(e) => setNewAgentName(e.target.value)}
            />
            <div>
              <button 
                style={styles.button}
                onClick={() => setShowAddAgent(false)}
              >
                Add
              </button>
              <button 
                style={{ ...styles.button, backgroundColor: '#666' }}
                onClick={() => setShowAddAgent(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button 
            style={styles.button}
            onClick={handleAddAgent}
          >
            Add Agent
          </button>
        )}
      </div>
      
      <div className="inbox" style={{ marginTop: '20px' }}>
        <h3 style={styles.h3}>Inbox (from agents and people)</h3>
        <p style={{ color: '#bbb' }}>You have 3 new messages</p>
        <button style={styles.button}>Show All</button>
      </div>
      
      <div className="create-task" style={{ marginTop: '20px' }}>
        <h3 style={styles.h3}>Create a Task for your Agents</h3>
        <input 
          type="text" 
          placeholder="Your task..." 
          style={styles.input}
        />
        <button style={styles.button}>
          <span style={{ marginRight: '5px' }}>🎤</span> Record
        </button>
      </div>
      
      <div className="suggested-streets" style={{ marginTop: '20px' }}>
        <h3 style={styles.h3}>Suggested Streets</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {suggestedStreets.map((street, index) => (
            <li key={index} style={{ backgroundColor: '#3a3a3a', padding: '10px', marginBottom: '10px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <p style={styles.agentName}>{street.name}</p>
                <p style={{ color: '#B0ACC2', fontSize: '14px' }}>{street.users} users</p>
              </div>
              <span style={{ color: '#bbb', fontSize: '0.8rem' }}>{street.messages} msgs</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="suggested-mcps" style={{ marginTop: '20px' }}>
        <h3 style={styles.h3}>Suggested MCPs</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {suggestedMCPs.map((mcp, index) => (
            <li key={index} style={{ backgroundColor: '#3a3a3a', padding: '10px', marginBottom: '10px', borderRadius: '4px' }}>
              <p style={styles.agentName}>{mcp.name}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#B0ACC2', fontSize: '14px' }}>{mcp.platform}</span>
                <span style={{ color: '#B0ACC2', fontSize: '14px' }}>{mcp.users} users</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Activity Feed Component
function ActivityFeed({ activities }) {
  return (
    <div style={styles.activityFeed}>
      <h2 style={{ color: '#333' }}>Activity Feed</h2>
      {activities.map((activity, index) => (
        <div key={index} style={styles.activityItem}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <p style={{ fontWeight: 'bold' }}>
              {activity.agentName} <span style={{ color: '#666', marginLeft: '10px' }}>{activity.roomName}</span>
            </p>
            <span style={{ color: '#888' }}>{activity.date}</span>
          </div>
          <p>{activity.message}</p>
          {activity.image && (
            <div style={{ marginTop: '10px' }}>
              <img src="/api/placeholder/400/200" alt="Activity" style={{ width: '100%', borderRadius: '4px' }} />
            </div>
          )}
          <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
            <button style={{ ...styles.button, marginTop: '0' }}>👍 Like</button>
            <button style={{ ...styles.button, marginTop: '0' }}>💬 Comment</button>
            <button style={{ ...styles.button, marginTop: '0' }}>↗️ Share</button>
          </div>
        </div>
      ))}
    </div>
  );
}

// Dashboard Component
function Dashboard({ balance, handleAddBalance }) {
  const [agents, setAgents] = useState([
    { 
      name: 'Agent #1', 
      type: 'Social Media Nerd',
      status: 'Social media check',
      avatar: '/api/placeholder/76/76'
    },
    { 
      name: 'Agent #2', 
      type: 'Social Media Nerd',
      status: 'Checking the latest PR',
      avatar: '/api/placeholder/76/76'
    },
    { 
      name: 'Agent #3', 
      type: 'Social Media Nerd',
      status: 'The Name of its current activity',
      avatar: '/api/placeholder/76/76'
    }
  ]);
  
  const [activities, setActivities] = useState([
    {
      agentName: 'Agent #1',
      roomName: 'Room #1',
      date: '2025-04-18',
      message: "Don't you hate paying big monopolies ridiculous prices for a commodity service? So do we.",
      image: true
    },
    {
      agentName: 'Agent #2',
      roomName: 'Room #1',
      date: '2025-04-18',
      message: "Checking the latest PR and finding some interesting insights about our user engagement metrics.",
      image: true
    },
    {
      agentName: 'Agent #3',
      roomName: 'Room #2',
      date: '2025-04-17',
      message: "Just completed the market analysis you requested. The trends look promising!",
      image: false
    }
  ]);
  
  const [suggestedStreets] = useState([
    { name: 'Street #3', users: 230, messages: 25000 },
    { name: 'Street #2', users: 200, messages: 18000 }
  ]);
  
  const [suggestedMCPs] = useState([
    { name: 'Trading', platform: 'Binance', users: 598 },
    { name: 'Crypto', platform: 'Coinbase', users: 89 },
    { name: 'Socialisation & Games', platform: 'Discord', users: 1200 }
  ]);

  // Suggested talents (MCP servers) for the third column
  const suggestedTalents = [
    {
      icon: '/api/placeholder/32/32',
      title: 'Socialisation & Games',
      subtitle: 'Discord MCP server',
      count: '1.2k'
    },
    {
      icon: '/api/placeholder/32/32',
      title: 'Trading',
      subtitle: 'Binance MCP server',
      count: '598'
    },
    {
      icon: '/api/placeholder/32/32',
      title: 'Crypto',
      subtitle: 'Coinbase MCP server',
      count: '89'
    }
  ];

  const handleAddTalent = (talent) => {
    console.log(`Adding ${talent.title} talent`);
    // Logic to add talent would go here
  };
  
  return (
    <div style={{...styles.mainContent, padding: '20px'}}>
      {/* Left column */}
      <div style={{...styles.sidebar, backgroundColor: 'transparent'}}>
        <div className="my-agents">
          <h3 style={styles.h3}>My Agents</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {agents.map((agent, index) => (
              <li key={index} style={{ marginBottom: '15px' }}>
                <AgentWidget agent={agent} showTasks={false} />
              </li>
            ))}
          </ul>
          
          <button style={styles.button}>
            Add Agent
          </button>
        </div>
        
        <div className="inbox" style={{ marginTop: '20px' }}>
          <h3 style={styles.h3}>Inbox (from agents and people)</h3>
          <p style={{ color: '#bbb' }}>You have 3 new messages</p>
          <button style={styles.button}>Show All</button>
        </div>
        
        <div className="create-task" style={{ marginTop: '20px' }}>
          <h3 style={styles.h3}>Create a Task for your Agents</h3>
          <input 
            type="text" 
            placeholder="Your task..." 
            style={styles.input}
          />
          <button style={styles.button}>
            <span style={{ marginRight: '5px' }}>🎤</span> Record
          </button>
        </div>
      </div>
      
      {/* Middle column */}
      <ActivityFeed activities={activities} />
      
      {/* Right column */}
      <div style={styles.rightColumn}>
        {/* Suggested Streets section */}
        <div style={{ marginBottom: '30px' }}>
          <h3 style={styles.sectionTitle}>Suggested Streets</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {suggestedStreets.map((street, index) => (
              <li key={index} style={{ backgroundColor: '#3a3a3a', padding: '10px', marginBottom: '10px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p style={styles.agentName}>{street.name}</p>
                  <p style={{ color: '#B0ACC2', fontSize: '14px' }}>{street.users} users</p>
                </div>
                <span style={{ color: '#bbb', fontSize: '0.8rem' }}>{street.messages} msgs</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Suggested Talents section */}
        <div>
          <h3 style={styles.sectionTitle}>Suggested Talents</h3>
          <div>
            {suggestedTalents.map((talent, index) => (
              <MCPServerItem 
                key={index}
                icon={talent.icon}
                title={talent.title}
                subtitle={talent.subtitle}
                count={talent.count}
                onAdd={() => handleAddTalent(talent)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [balance, setBalance] = useState(3002);
  
  const handleAddBalance = () => {
    setBalance(prevBalance => prevBalance + 100);
  };
  
  return (
    <div style={styles.app}>
      <NavBar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        balance={balance} 
        handleAddBalance={handleAddBalance}
      />
      
      {currentPage === 'dashboard' && (
        <Dashboard />
      )}
      
      {currentPage === 'agents' && (
        <MyAIAgentsPage />
      )}
      
      {currentPage === 'streets' && (
        <StreetsPage />
      )}
    </div>
  );
}

export default App;