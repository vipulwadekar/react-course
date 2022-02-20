import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [modeTitle, setModeTitle] = useState('Enable Dark Mode');
  const [alert ,setAlert ] = useState(null);
  
  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    }); 
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  
  
  
  
  const toogleMode = () => {
   
   
   
    if (mode === 'light') {
      setMode("dark");
      setModeTitle("Enable White Mode")
      document.body.style.backgroundColor = '#0C2D48';
      showAlert("Dark Mode has been Enabled","success");
    }
    else if (mode === 'dark') {
      setMode("light");
      setModeTitle("Enable Dark Mode")
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success");
    }
  }
  return (
    <>

      {/* first component */}
      <Navbar
        title="TextUtils"
        mode={mode}
        modeTitle={modeTitle}
        toogleMode={toogleMode}
      />

      <Alert
        alert={alert}
      />


      {/* second component */}
      <div className="container-fluid ms-2 me-2 my-3 ">
        <TextForm heading="Enter the text to analyze to below"
          mode={mode}
          showAlert={showAlert} />
      </div>

      {/* {third component} */}
      {/* <div className="container-fluid ms-2 me-2 my-3 border border-3 border-dark">

        <About />

      </div> */}

    </>

  );
}

export default App;
