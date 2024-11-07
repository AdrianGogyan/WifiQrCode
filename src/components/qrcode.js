import { QRCodeCanvas } from "qrcode.react";
import React, { useState, useEffect } from "react";

const Qrcode = ({e, f, g}) => {

    const [eparam, setEparam] = useState('wifi');
    const [fparam, setFparam] = useState('passw');
    const [gparam, setGparam] = useState('wap');
    
    useEffect(() => {
        setEparam(e);
        setFparam(f);
        setGparam(g);
    }, [e, f, g])


    return(
        <div>
            <QRCodeCanvas value={`WIFI:S:${e};T:${g};P:${f};;`} 
            bgColor="transparent"                // Set the background color to transparent
            fgColor="#000000"                    // Set foreground (QR code) color to black (or any color)
            level="H"                             // Error correction level
            size={148}
            />
        </div>
    )
};

export default Qrcode;