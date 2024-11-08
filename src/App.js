import './App.css';
import './inputName.css';
import Qrcode from './components/qrcode';
import React, { useState, useEffect } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function App() {

  const [ssid, setSsid] = useState('');
  const [passw, setPassw] = useState('');
  const [enc, setEnc] = useState('WPA');
  const [showPassw, setShowPassw] = useState(false);
  const [screenshotReady, setScreenShotReady] =useState(false);

  const toggleShowPassw = () =>{
    setShowPassw((e) => !e)
  }

  function screenShotFunc(){

    setScreenShotReady((e) => !e);


  }

  return (
    <div className="App">
      <Qrcode e={ssid} f={passw} g={enc} />
      {screenshotReady ? 
        <div className='ssDiv'>
          {ssid}
        </div> : 
      <div className='formGroup'>

        <h2>Wifi QrCode generator</h2>
        
        <div className='inputGroupDiv'>
          <div className='group'>
            <input 
              type="text" 
              className='input' 
              value={ssid} 
              onChange={(e) => setSsid(e.target.value)}
              required />
            <span className='highlight'></span>
            <span className='bar'></span>
            <label>Wifi Name</label>
          </div>

          <div className='group'>
            <input 
              type={showPassw ? 'text' : 'password'}
              className='input' 
              value={passw} 
              onChange={(e) => setPassw(e.target.value)}
              required 
              
            />
            <div className='visIcon' onClick={toggleShowPassw} >{showPassw ? < IoEyeOutline /> : < IoEyeOffOutline />}</div>
            
            <span className='highlight'></span>
            <span className='bar'></span>
            <label>Password</label>
          </div>

          <div className='group'>
            {/* <input type="text" className='input' required /> */}
            <select 
              className='input' 
              value={enc}
              onChange={(e) => setEnc(e.target.value)}
              >
              <option value={'WPA'}>WPA/WPA2</option>
              <option value={'WPE'}>WPE</option>
              <option value={'none'}>NONE</option>
            </select>
            <span className='highlight'></span>
            <span className='bar'></span>
            <label>Encryption</label>
            
          </div>

        </div>

      </div>
      }
      <button onClick={screenShotFunc} >{screenshotReady ? 'Back' : 'Screenshot ready'}</button>

    </div>
  );
}

export default App;
