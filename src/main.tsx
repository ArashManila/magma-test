import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    rootElement
  );
}