import { Router } from './Router';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {

  return (
    <div>
      <Router />
      <ToastContainer />
    </div>
  )
}

export default App;
