// import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';
import Head from './header/Head';
import ModalContextProvider from './ModalContextProvider/ModalContextProvider';
import ErrorBoundary from './Error_Boundary/ErrorBoundary';

function App() {
  // const [products, setProducts] = useState([])
  // const [filteredList, setFilteredList] = useState([]);
  // const dummy = true;
  // useEffect(()=>{
  //   fetch('http://localhost:5000/products', {method:'GET'}).then(res=>res.json()).then(data=>{setProducts(data); console.log(products)});
  // },[dummy])
  // function handleFilter(e){
  //   let word = e.target.value;
  //   let filtArr = products.length && products.filter(item=>{
  //     return item.name.toLowerCase().includes(word.toLowerCase())
  //   });
  //   products.length && setFilteredList(filtArr)
  //   products.length && console.log(filteredList);
  // }
  return (
    <ErrorBoundary>
      <ModalContextProvider>
        <div className='App'>
          <Head />
        </div>
      </ModalContextProvider>
    </ErrorBoundary>
  );
}

export default App;
