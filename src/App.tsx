import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { HabilidadesTecnicas } from './components/sections/HabilidadesTecnicas';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Formacion } from './components/sections/Formacion';


function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <HabilidadesTecnicas />
        < Formacion />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
