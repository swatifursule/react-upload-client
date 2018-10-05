import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FileUpload from './FileUpload';
import UploadComponent from './UploadComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
	<p> This project is client for uploading files into S3 </p>
        </header>
	<h3> This is simple upload to S3 </h3>
	<UploadComponent/>
      </div>
    );
  }
}

export default App;
