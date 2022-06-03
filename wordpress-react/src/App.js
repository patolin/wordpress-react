import {Grommet, Box, ResponsiveContext} from 'grommet'
import AppBar from './components/AppBar'
import AppBody from './components/AppBody'
import AppSidebar from './components/AppSidebar';
import { useState } from 'react';
import apiEndpoints from './constants'

function App() {

  const [showSidebar, setShowSidebar] = useState(false);
  const switchSidebar = () => setShowSidebar(!showSidebar);
  
  const tema = {
    global: {
      colors: {
        brand: '#000000',
      },
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

  return (
    <Grommet theme={tema} full>
      <ResponsiveContext.Consumer>
        {(size) => (
        <>
        <AppBar switchSidebarHandle={switchSidebar}>
          www.patolin.com
        </AppBar>
        <Box direction='row' flex overflow={{ horizontal: 'hidden'}}>
          <AppBody apiEndpoints={apiEndpoints}/>
          <AppSidebar show={showSidebar} size={size} switchSidebarHandle={switchSidebar}/>
        </Box>
        </>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
