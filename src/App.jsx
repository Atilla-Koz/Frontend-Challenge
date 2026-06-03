import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landing from './pages/Landing.jsx';
import SoftwarePortfolio from './pages/SoftwarePortfolio.jsx';
import PhotoPortfolio from './pages/PhotoPortfolio.jsx';
import ProfessionalWorks from './pages/ProfessionalWorks.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/software" component={SoftwarePortfolio} />
        <Route exact path="/photo" component={PhotoPortfolio} />
        <Route path="/photo/works" component={ProfessionalWorks} />
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
