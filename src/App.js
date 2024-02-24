import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Loading from './components/loading/Loading';

function App() {
  return (
    <section className="bg-[#2C1F4A] w-full">
      <Loading />
      <Home />
      <Footer />
    </section>
  );
}

export default App;
