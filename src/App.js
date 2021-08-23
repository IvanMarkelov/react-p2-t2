import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Typography } from 'antd';
import { Button } from 'antd';

const { Text } = Typography;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="dashed">
          <Text type="danger">React</Text>
        </Button>
      </header>
    </div>
  );
}

export default App;
