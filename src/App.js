
import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';

const SEND_MAIN_PING = 'SEND_MAIN_PING';

function App() {
  const { ipcRenderer } = window.require("electron"); 
  const sendMail = () => { 
    ipcRenderer.send(SEND_MAIN_PING, 'send'); 
    console.log('hi');
  } 

  useEffect(() => {
    sendMail();
  }, [])
  // console.log(BrowserWindow, dialog, Menu);
  // console.log(ipcRenderer)
  return (
    <Button variant="contained" color="primary"> 
      Hello World
    </Button>
  );
}

export default App; 