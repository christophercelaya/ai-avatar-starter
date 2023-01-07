import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';

const Home = () => {


  // Add onChange
  const onChange = (event) => {
    setInput(event.target.value);
  };
  
  // Add generateAction
  const generateAction = async () => {
    console.log('Generating...');
  
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'image/jpeg',
      },
      body: JSON.stringify({ input }),
    });
    
    const data = await response.json();
  
    // If model still loading, drop that retry time
    if (response.status === 503) {
      console.log('Model is loading still :(.')
      return;
    }
  
    
    // If another error, drop error
    if (!response.ok) {
      console.log(`Error: ${data.error}`);
      return;
    }
  };

  // Create state property
  const [input, setInput] = useState('');

  return (
    <div className="root">
      <Head>

        {/* Add one-liner here */}
        <title>Silly picture generator | buildspace</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
        
            {/* Add one-liner here */}
            <h1>Silly picture generator</h1>
          </div>
          <div className="header-subtitle">
        
            {/* Add description here */}
            <div className="root">
  <Head>
    <title>Silly picture generator | buildspace</title>
  </Head>
  <div className="container">
    <div className="header">
      <div className="header-title">
        <h1>Silly picture generator</h1>
      </div>
      <div className="header-subtitle">
        <h2>
          Turn me into anyone you want! Make sure you refer to me as "chriscelaya" in the prompt
        </h2>
      </div>

      {/* Add prompt container here */}
      <div className="prompt-container">

        {/* Add value property */}
        <input className="prompt-box" value={input} onChange={onChange} />

        {/* Add your prompt button in the prompt container */}
        <div className="prompt-container">
          <div className="prompt-buttons">
            <a className="generate-button" onClick={generateAction}>
              <div className="generate">
                <p>Generate</p>
              </div>
            </a>
          </div>
      </div>
      </div>
    </div>
  </div>
  <div className="badge-container grow">
    <a
      href="https://buildspace.so/builds/ai-avatar"
      target="_blank"
      rel="noreferrer"
    >
      <div className="badge">
        <Image src={buildspaceLogo} alt="buildspace logo" />
        <p>build with buildspace</p>
      </div>
    </a>
  </div>
</div>
            <h2>
              Turn me into anyone you want! Make sure you refer to me as "abraza" in the prompt
            </h2>
          </div>
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-avatar"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
