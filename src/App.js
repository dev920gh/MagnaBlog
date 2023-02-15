import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogArticle from './pages/BlogArticle';


function App() {
  return (
    <div className="App">
      <Header />
      <BlogArticle />
      <Footer />
    </div>
  );
}

export default App;
