
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm1 from './pages/loginform1';
import ForgotPassword from './pages/forgotpassword';
import CreateAccount from './pages/createAccount';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm1 />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path= "createAccount"  element={<CreateAccount/>}/>
       
      </Routes>
    </Router>
  );
};

export default App;
