import React from 'react';
import ChatBot, { Loading } from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import BackendQueryComponent from './BackendQueryComponent';

const theme = {
    background: 'white',
    headerBgColor: '#1b4080',
    headerFontSize: '20px',
    botBubbleColor: '#5082ba',
    userBubbleColor: '#dae4e8',
    headerFontColor: 'white',
    botFontColor: 'white',
    userFontColor: 'black',
  };
  
  const ExampleBackendQuery = () => (
    <ThemeProvider theme={theme}>
      <ChatBot
      
        floating
        headerTitle="3DSF ChatBot"
        steps={[
          {
            id: '1',
            message: "Hello! I'm here to assist you with any questions you have about Data Science. How can I help you today?",
            trigger: 'search',
          },
          {
            id: '2',
            message: "Is there a specific topic or question you'd like to know more about in the realm of Data science? Feel free to ask, and I'll do my best to provide you with a helpful answer.",
            trigger: 'search',
          },
          {
            id: 'search',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            component: <BackendQueryComponent />,
            waitAction: true,
            trigger: '2',
          },
        ]}
      />
    </ThemeProvider>
  );

export default ExampleBackendQuery;
