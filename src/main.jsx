import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ModeProvider } from './globalState/ModeContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <ModeProvider>
    <App />
  </ModeProvider>
);
