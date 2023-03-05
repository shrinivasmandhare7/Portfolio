import { About, Header, Footer, Works, Skills } from './container'
import { Navbar } from './components';
import './App.scss'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
