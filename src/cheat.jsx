import React from 'react';
import Obfuscate from 'react-obfuscate';

const Cheat = () => {
    return (
        <div>
            <Obfuscate tel="12-34-56"/>

            <Obfuscate
      email="hello@coston.io"
      headers={{
        cc: 'dade@zero-cool.af',
        bcc: 'smith@machina.net',
        subject: 'react-obfuscate',
        body: 'Down with the machines!',
      }}
    />
    
        </div>
    );
};

export default Cheat;