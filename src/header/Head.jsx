import React, { useContext, useEffect, useState } from 'react';
// import { useEffect, useState } from 'react';
import SearchBar from '../Search-bar/SearchBar';
import Card from '../Card/Card';
import axios from 'axios';
import Modal from '../Modal/Modal';
import { ModalContext } from '../ModalContextProvider/ModalContextProvider';
import HelmetSetup from '../components/HelmetSetup/HelmetSetup';

const Head = () => {
  const { isLoading, setIsLoading, isError, setIsError } = useContext(ModalContext);

  const { modalDetail } = useContext(ModalContext);
  const [mode, setMode] = useState('Product');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleAPI = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        if (response.statusCode !== 404) {
          setProducts(response.data);
          setIsError(false);
        } else {
          setProducts([]);
          setIsError(true);
        }
      } catch (err) {
        console.log(err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    handleAPI();
  }, []);
  const handleMode = (e) => {
    setMode(e.target.value);
  };
  if (isLoading) {
    return <div className='spinner-border text-success' data-test-id='spinner'></div>;
  }

  if (isError) {
    return (
      <div className='py-4 mt-5 alert alert-danger'>Some Error Occurred. Try again later.</div>
    );
  }

  return (
    <div>
      <HelmetSetup title='E-Commerce' />
      <div className='head-top-container'>
        <div className='title-content'>
          <h2>E-Commerce Store</h2>
        </div>
        <div className='mode-container'>
          <select className='decorated' onChange={handleMode}>
            <option>Product</option>
            <option>Address</option>
            <option>Tag</option>
          </select>
        </div>
        {mode === 'Product' && <SearchBar mode='Product' />}
        {mode === 'Address' && <SearchBar mode='Address' />}
        {mode === 'Tag' && <SearchBar mode='Tag' />}
      </div>
      <div className='row justify-content-center g-3 mt-2 mx-5'>
        {products?.map((product, index) => (
          <Card key={index + 100} product={product} />
        ))}
      </div>
      <Modal modalContent={modalDetail} />
    </div>
  );
};

export default Head;
