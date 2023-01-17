import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import AboutMe from './AboutMe/AboutMe';
import Lectures from './Lectures/Lectures';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <AboutMe />
      <Lectures />
      <Footer />
    </div>
  );
}

export default App;
