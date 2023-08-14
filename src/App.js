import Layout from './Layout';
import Router from './Router';
import Footer from './Footer';

import './index.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="wrapper">
      <Layout />
      <Router />
      <Footer />
    </div>
  )

}
export default App;
