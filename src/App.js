import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useSearchParams,
  useNavigate,
} from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Account from './pages/Account';
import RecoverPassword from './pages/RecoverPassword';
import ResetPassword from './pages/ResetPassword';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import UserDashboard from './pages/UserDashboard';
import Profile from './pages/Profile';
import Quotation from './pages/Quotation';
import Lead from './pages/Lead';
import { routes } from './contant';
import SupportPage from './pages/Support'
import RequestList from './components/RequestList';
import Event1 from './pages/Event1';
import Events2 from './pages/Events2';
import Event3 from './pages/Event3';
import Event4 from './pages/Event4';
import InternshipSection from './pages/Internship'
import ScholarshipProgram from './pages/Scholarship'

// Public Route Component
const PublicRoute = ({ isAuthenticated, children }) => {
  const token = getToken();
  return token ? <Navigate to='/' /> : children;
};

// Private Route Component
const PrivateRoute = ({ isAuthenticated, children }) => {
  const token = getToken();
  return token ? children : <Navigate to='/signin' />;
};

// Verification Component
const Verify = ({ isAuthenticated }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const mode = searchParams.get('mode');

  useEffect(() => {
    if (mode === 'verifyEmail') {
      // Navigate to Account page
      navigate(routes.account);
    } else if (mode === 'resetPassword') {
      // Navigate to Reset Password page
      navigate(routes.resetPassword);
    } else {
      // Handle unsupported modes
      console.error('Unsupported mode:', mode);
    }
  }, [mode, navigate]);

  return <div>Processing your request...</div>;
};

const getToken = () => {
  const token = localStorage.getItem('token');
  return !!token;
};
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route
          path={routes.main}
          element={<HomePage />}
        />
        <Route
          path={routes.aboutUs}
          element={<AboutUs />}
        />
        <Route
          path={routes.support}
          element={<SupportPage />}
        />
        <Route
          path={routes.dashboard}
          element={
            <PrivateRoute >
              <UserDashboard />
            </PrivateRoute>
          }
        />
        <Route
  path={routes.lead}
  element={
    <PrivateRoute isAuthenticated={isAuthenticated}>
      <Lead />
    </PrivateRoute>
  }
/>
<Route
  path="/event-1"
  element={
    <PrivateRoute>
      <Event1/>
    </PrivateRoute>
  }
/>
<Route
  path="/event-2"
  element={
    <PrivateRoute>
      <Events2/>
    </PrivateRoute>
  }
/>
<Route
  path="/event-3"
  element={
    <PrivateRoute>
      <Event3/>
    </PrivateRoute>
  }
/>
<Route
  path="/event-4"
  element={
    <PrivateRoute>
      <Event4/>
    </PrivateRoute>
  }
/>
<Route
  path="/request-list"
  element={
    <PrivateRoute>
      <RequestList />
    </PrivateRoute>
  }
/>


        <Route
          path={routes.quotation}
          element={
            <PrivateRoute >
              <Quotation />
            </PrivateRoute>
          }
        />
        <Route
          path={routes.account}
          element={
            <PublicRoute >
              <Account />
            </PublicRoute>
          }
        />
        <Route
          path={routes.profile}
          element={
            <PrivateRoute >
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path={routes.signup}
          element={
            <PublicRoute >
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path={routes.signin}
          element={
            <PublicRoute >
              <SignIn  />
            </PublicRoute>
          }
        />
        <Route
          path={routes.recoverPassword}
          element={<RecoverPassword />}
        />
        <Route
          path={routes.resetPassword}
          element={<ResetPassword />}
        />
        <Route
          path='/verify'
          element={<Verify />}
        />
        <Route
          path='/'
          element={<Navigate to={routes.main} />}
        />
        {/* <Route
          path={routes.CourseSelection}
          element={<CourseSelection />}
        /> */}
        <Route
          path={routes.internship}
          element={<InternshipSection/>}
        />

        <Route
          path={routes.scholarship}
          element={<ScholarshipProgram/>}
        />
      
      </Routes>
    </Router>
  );
}

export default App;
