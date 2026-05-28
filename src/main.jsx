import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { LanguageProvider } from './globalState/LanguageContext.jsx';
import { ModeProvider } from './globalState/ModeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LanguageProvider>
      <ModeProvider>
        <App />
      </ModeProvider>
    </LanguageProvider>
  </BrowserRouter>
);
