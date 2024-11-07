import './App.css';
import './inputName.css';
import Qrcode from './components/qrcode';
import React, { useState, useEffect } from 'react';

function App() {

  const [ssid, setSsid] = useState('');
  const [passw, setPassw] = useState('');
  const [enc, setEnc] = useState('WPA');
  const [ready, setReady] = useState(false);

  function submitFunc(){

    alert('This is a Wifi QR code generator, made by Adrian Gogyan')
    if(!ssid){
      alert('Wifi Name cannot be empty');
      setReady(false);
    } else {
      setReady(true);
    }
  }

  return (
    <div className="App">
      <Qrcode e={ssid} f={passw} g={enc} />

      <div className='formGroup'>

        <h2>Wifi Qrcode generator</h2>
        
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
              type="text" 
              className='input' 
              value={passw} 
              onChange={(e) => setPassw(e.target.value)}
              required 
              
            />
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

          <button onClick={submitFunc} >About</button>
        </div>

      </div>
    </div>
  );
}

export default App;
