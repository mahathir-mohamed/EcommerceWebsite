import './App.css';
import PageRoutes from '../src/PageRoutes';
import Header from '../src/HeaderAndFooter/Header';
import Footer from '../src/HeaderAndFooter/Footer';
import Container from 'react-bootstrap/container';

function App() {
  return (
    <div className="mainPage">
       <Header/>
       <PageRoutes/>
       <Container>
       <Footer/>
       </Container>
    </div>
  );
}

export default App;
