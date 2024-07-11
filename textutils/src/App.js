// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// function App() {
//   return (
//     <>
//     <h1>Good Afternoon!</h1>
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank" 
//           rel="noopener noreferrer"
//         >
//           Let's learn React
//         </a>
//       </header>
//     </div>
//     </>
//   );
// }
// let name = "Nikita";

function App(){
  const [mode, setMode] = useState('light') //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark mode"
      setInterval(() => {
          document.title = "TextUtils is Amazing!"
      }, 2000);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light mode"

      setInterval(() => {
        document.title = "Install TextUtils Now!"
    }, 1700);

    }
  }
 
  return(
    <>
{/* <Navbar /> */}
{/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About />} /> 
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
              
        </Routes>
        {/* <About /> */}
      </div>  
      </Router>
    </>
  );
}
export default App;
