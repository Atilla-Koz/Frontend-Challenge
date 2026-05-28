import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landing from './pages/Landing.jsx';
import SoftwarePortfolio from './pages/SoftwarePortfolio.jsx';
import PhotoPortfolio from './pages/PhotoPortfolio.jsx';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/software" component={SoftwarePortfolio} />
        <Route path="/photo" component={PhotoPortfolio} />
        <Redirect to="/" />
      </Switch>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        limit={3}
      />
    </>
  );
}
