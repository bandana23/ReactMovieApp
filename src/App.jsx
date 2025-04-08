import './css/App.css';
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';
function App() {
  return (
    <>
    <MovieProvider>
      <NavBar/>
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/favorites' element={<Favorites></Favorites>}></Route>
        </Routes>
      </main>
    </MovieProvider>
    </>
  )
}


export default App;
