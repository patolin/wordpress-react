import {Grommet, Box, ResponsiveContext} from 'grommet'
import AppBar from './components/AppBar'
import AppBodyPosts from './components/AppBodyPosts'
import AppBodyPostSingle from './components/AppBodyPostSingle';
import AppSidebar from './components/AppSidebar';
import { useState } from 'react';
import apiEndpoints from './constants'
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom"

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
          <Router>
            <AppBar switchSidebarHandle={switchSidebar}>
              www.patolin.com
            </AppBar>
            <Box direction='row' flex overflow={{ horizontal: 'hidden'}}>
              
                <Routes>
                    <Route path="/" element={<AppBodyPosts apiEndpoints={apiEndpoints}/>} />
                    <Route path="/:postY/:postM/:postD/:postSlug" element={<AppBodyPostSingle apiEndpoints={apiEndpoints}/>} />
                  </Routes>    
              
              <AppSidebar show={showSidebar} size={size} switchSidebarHandle={switchSidebar}/>
            </Box>  
          </Router>
          </>
          )}
        
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
