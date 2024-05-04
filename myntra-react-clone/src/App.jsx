import './App.css'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import FetchItems from './components/FetchItems';
import { useSelector } from 'react-redux';
import Loader from './components/Loader';

function App() {

  const  fetchStatus = useSelector((store)=> store.fetchStatus)

  return (
    <>
      <Header/>
      {fetchStatus.currentlyFetching ? <Loader></Loader>:  <Outlet></Outlet> }
      <FetchItems></FetchItems>
      <Footer></Footer>
    </>
  )
}

export default App
