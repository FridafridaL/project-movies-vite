import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieList } from "./components/MovieList";
export const App = () => {


  
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<MovieList />} />
    </Routes>
  </BrowserRouter>

  )
};
