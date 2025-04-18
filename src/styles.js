// Global styles for the application
const styles = {
    // App container styles
    app: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#2D0A22', // Dark purple/maroon background color
    },
    
    // Layout styles
    mainContent: {
      display: 'flex',
      flex: 1,
      padding: '20px',
    },
    sidebar: {
      width: '20%',
      backgroundColor: '#2e2e2e',
      padding: '20px'
    },
    leftColumn: {
      width: '250px',
      marginRight: '20px',
    },
    centerColumn: {
      flex: 2,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: '8px',
      height: 'calc(100vh - 150px)',
    },
    rightColumn: {
      width: '250px',
      marginLeft: '20px',
    },
    
    // Navigation styles
    topNav: {
      backgroundColor: 'rgba(122, 27, 68, 0.8)', // Semi-transparent maroon
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
    },
    navLink: {
      color: '#aaa',
      marginRight: '25px',
      cursor: 'pointer',
      padding: '5px 0',
    },
    activeNavLink: {
      color: 'white',
      fontWeight: 'bold',
      borderBottom: '2px solid white',
    },
    logo: {
      width: '40px',
      height: '40px',
      backgroundColor: '#B52D55', // Logo background color
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '15px',
    },
    logoIcon: {
      color: 'white',
      fontSize: '24px',
    },
    
    // Header styles
    header: {
      backgroundColor: '#2e2e2e',
      padding: '15px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    headerTitle: {
      color: 'white',
      margin: 0
    },
    
    // Balance styles
    balance: {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
    },
    balanceValue: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      padding: '5px 15px',
      borderRadius: '5px',
      margin: '0 10px',
    },
    addButton: {
      backgroundColor: 'transparent',
      color: 'white',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
    },
    userIcon: {
      width: '35px',
      height: '35px',
      borderRadius: '50%',
      backgroundColor: '#FFB84D', // Orange color for user icon
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '15px',
    },
    
    // Section titles
    sectionTitle: {
      color: 'white',
      marginBottom: '15px',
      fontSize: '18px',
      fontWeight: 'normal',
    },
    h3: {
      color: 'white'
    },
    
    // Button styles
    button: {
      marginTop: '10px',
      padding: '8px 12px',
      backgroundColor: '#4a4a4a',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    addNewButton: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      border: 'none',
      color: 'white',
      padding: '8px 15px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '14px',
    },
    showAllButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'white',
      padding: '5px 0',
      fontSize: '14px',
      cursor: 'pointer',
      display: 'block',
      marginLeft: 'auto',
    },
    
    // Form inputs
    input: {
      width: '80%',
      padding: '8px',
      marginTop: '10px'
    },
    inputField: {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'white',
      flex: 1,
      fontSize: '16px',
      outline: 'none',
    },
    voiceButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'white',
      fontSize: '20px',
      cursor: 'pointer',
    },
    inputContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '25px',
      padding: '10px 20px',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      bottom: '20px',
      left: '20px',
      right: '20px',
    },
    
    // Agent widget styles
    agentCard: {
      backgroundColor: 'rgba(41, 18, 41, 0.7)', // Dark purple semi-transparent
      borderRadius: '8px',
      marginBottom: '15px',
      overflow: 'hidden',
      width: '100%',
      minHeight: '76px',
    },
    agentHeader: {
      display: 'flex',
      padding: '0',
      minHeight: '76px',
    },
    agentAvatar: {
      width: '76px',
      height: '76px',
      flex: '0 0 76px', // Ensures the image stays at fixed size
      objectFit: 'cover',
      marginRight: '15px',
    },
    agentInfo: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flex: '1',
      padding: '10px 15px',
    },
    agentName: {
      margin: '0 0 5px 0',
      fontSize: '16px',
      color: '#B0ACC2',
    },
    agentType: {
      margin: '0 0 5px 0',
      fontSize: '14px',
      color: '#BD5353',
    },
    agentStatus: {
      margin: '0',
      fontWeight: 'bold',
      fontSize: '20px',
      color: '#FFF9FF',
    },
    moreLabel: {
      color: '#b58db6',
      fontSize: '12px',
      marginLeft: 'auto',
      paddingRight: '15px',
    },
    
    // Agent tasks
    tasksList: {
      padding: '0 15px 15px 15px',
    },
    taskItem: {
      display: 'flex',
      alignItems: 'center',
      color: '#b58db6',
      marginBottom: '8px',
      fontSize: '14px',
    },
    taskIcon: {
      width: '18px',
      height: '18px',
      backgroundColor: '#4C934C', // Green
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '10px',
      color: 'white',
      fontSize: '12px',
      borderRadius: '3px',
    },
    
    // Activity feed styles
    activityFeed: {
      flexGrow: 1,
      padding: '20px',
      marginRight: '20px'
    },
    activityItem: {
      marginBottom: '20px',
      backgroundColor: 'white',
      padding: '15px',
      borderRadius: '5px'
    },
    
    // Completed tasks styles
    completedTasksList: {
      marginTop: '20px',
    },
    completedTaskItem: {
      backgroundColor: 'rgba(41, 18, 41, 0.7)',
      borderRadius: '8px',
      padding: '10px 15px',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    taskQuestion: {
      backgroundColor: '#6A447C',
      width: '24px',
      height: '24px',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      marginRight: '10px',
    },
    taskInfo: {
      flex: 1,
    },
    taskName: {
      color: 'white',
      margin: '0 0 5px 0',
      fontSize: '14px',
    },
    taskTime: {
      color: '#b58db6',
      margin: '0',
      fontSize: '12px',
    },
    
    // Ideas/cards styles
    ideaCard: {
      backgroundColor: 'rgba(41, 18, 41, 0.7)',
      borderRadius: '8px',
      overflow: 'hidden',
      marginBottom: '15px',
    },
    ideaImage: {
      width: '100%',
      height: '120px',
      objectFit: 'cover',
    },
    ideaFooter: {
      padding: '10px 15px',
      display: 'flex',
      alignItems: 'center',
    },
    ideaIcon: {
      width: '18px',
      height: '18px',
      backgroundColor: '#4C934C',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '10px',
      color: 'white',
      fontSize: '12px',
      borderRadius: '3px',
    },
    ideaText: {
      color: 'white',
      fontSize: '14px',
      flex: 1,
    },
    playButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
    },
    
    // Streets page specific styles
    streetHeader: {
      padding: '20px',
    },
    streetName: {
      fontSize: '32px',
      fontWeight: 'bold',
      margin: '0 0 15px 0',
      color: 'white',
    },
    streetInfo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
    },
    streetStat: {
      display: 'flex',
      alignItems: 'center',
      marginRight: '30px',
      color: 'white',
    },
    icon: {
      width: '36px',
      height: '36px',
      backgroundColor: '#3a3a3a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '5px',
      marginRight: '10px',
    },
    streetContent: {
      flex: '1',
      overflow: 'hidden',
      position: 'relative',
    },
    streetImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    streetTag: {
      color: '#B0ACC2',
      marginBottom: '15px',
    },
    streetTagLabel: {
      display: 'block',
      fontSize: '14px',
    },
    streetTagValue: {
      fontSize: '16px',
      color: 'white',
    },
    otherStreetsItem: {
      display: 'flex',
      marginBottom: '15px',
      cursor: 'pointer',
    },
    streetThumbnail: {
      width: '80px',
      height: '60px',
      marginRight: '15px',
      borderRadius: '5px',
    },
    streetItemInfo: {
      flex: '1',
    },
    streetItemName: {
      margin: '0 0 5px 0',
      fontSize: '16px',
      color: 'white',
    },
    streetItemStats: {
      color: '#B0ACC2',
      fontSize: '14px',
    },
    chatMessage: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '15px',
    },
    agentChatIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '5px',
      marginRight: '10px',
    },
    messageContent: {
      flex: '1',
      color: 'white',
    },
    messageBox: {
      position: 'absolute',
      bottom: '100px',
      right: '20px',
      width: '300px',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderRadius: '8px',
      padding: '15px',
    },
    chatInput: {
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '25px',
      padding: '10px 20px',
      display: 'flex',
      alignItems: 'center',
    },
    // MCP Server Item styles
    mcpServerItem: {
      container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1e1e1e',
        borderRadius: '6px',
        padding: '8px 12px',
        width: '100%',
        color: 'white',
        marginBottom: '10px',
      },
      leftContent: {
        display: 'flex',
        alignItems: 'center',
      },
      icon: {
        width: '32px',
        height: '32px',
        borderRadius: '6px',
        marginRight: '12px',
        objectFit: 'cover',
      },
      textContainer: {
        display: 'flex',
        flexDirection: 'column',
      },
      title: {
        fontSize: '16px',
        fontWeight: '500',
        color: '#ffffff',
        margin: '0',
      },
      subtitle: {
        fontSize: '14px',
        color: '#7d7d7d',
        margin: '0',
      },
      count: {
        fontSize: '14px',
        color: '#7d7d7d',
        marginLeft: '8px',
      },
      addButton: {
        backgroundColor: '#5c5470', // Purple color from image
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '6px 16px',
        fontSize: '14px',
        cursor: 'pointer',
        fontWeight: '500',
      }
    },
  };
  
  export default styles;