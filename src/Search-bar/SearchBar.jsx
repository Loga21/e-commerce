import React, { useContext, useEffect, useState } from 'react';
// import {  } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ModalContext } from '../ModalContextProvider/ModalContextProvider';

const SearchBar = ({ mode }) => {
  const { isLoading, setIsLoading, isError, setIsError, setModalDetail } = useContext(ModalContext);

  const [filteredList, setFilteredList] = useState([]);
  const [products, setProducts] = useState([]);
  const [viewDetailsBtn, setViewDetailsBtn] = useState(false);

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

  if (isLoading) {
    return <div className='spinner-border text-success' data-test-id='spinner'></div>;
  }

  if (isError) {
    return (
      <div className='py-4 mt-5 alert alert-danger'>Some Error Occurred. Try again later.</div>
    );
  }

  function handleFilter(e) {
    setViewDetailsBtn(false);
    const filtArr =
      products &&
      products.filter((item) => {
        const regex = e.target.value;
        if (mode === 'Tag') return item.tag.match(regex);
        else if (mode === 'Address') return item.address.toLowerCase().match(regex);
        else return item.name.toLowerCase().match(regex);
      });
    products && e.target.value ? setFilteredList(filtArr) : setFilteredList([]);
    // products && console.log(filteredList);
  }

  return (
    <div className='absolute-box'>
      <div>
        <input
          type='text'
          id='Input1'
          placeholder={
            mode === 'Tag'
              ? 'Enter Tag name'
              : mode === 'Address'
                ? 'Enter City or Address'
                : 'Enter Product Name'
          }
          onChange={handleFilter}
        />
      </div>
      {viewDetailsBtn && (
        <div className='viewDetailsBtn'>
          <button data-bs-toggle='modal' data-bs-target='#staticBackdrop'>
            View Details
          </button>
        </div>
      )}
      <div className={filteredList ? 'suggestions-alt ' : 'suggestions'}>
        {filteredList &&
          filteredList.map((item, index) => (
            <div
              onClick={() => {
                setFilteredList([]);
                const inp = document.getElementById('Input1');
                inp.value = item.name;
                setModalDetail(item);
                setViewDetailsBtn(true);
              }}
              key={index}
              className='drop-down-list'>
              {mode === 'Tag'
                ? (
                <h6>
                  {item.name} <sub>{item.tag}</sub>
                </h6>)
                : mode === 'Address'
                  ? (
                <p>
                  {item.name} <sub>{item.address}</sub>
                </p>
                    )
                  : (
                      item.name
                    )}
            </div>
          ))}
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  mode: PropTypes.string
};

export default SearchBar;
