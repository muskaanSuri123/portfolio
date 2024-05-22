
import './App.css';
import { Banner } from './components/Banner';
import { ContactForm } from './components/ContactForm';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    <ContactForm/>
    </div>
  );
}

export default App;
