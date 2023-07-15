import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import BookList from "./container/BookList";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/booklist" element={<BookList />} />
      </Routes>
    </>
  );
}

export default App;
