import React from 'react';

import {
	getRegistry,
} from '@substrate/txwrapper-registry';

import logo from './logo.svg';
import './App.css';

function App() {

  React.useEffect(() => {
    const registry = getRegistry({
      chainName: 'Updater',
      specName: 'aaa',
      specVersion: 1,
      metadataRpc: `0x111`,
    });
    console.log(registry);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
