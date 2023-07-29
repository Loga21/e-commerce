import React, { createContext, useState } from 'react';
// import App from '../App';
import PropTypes from 'prop-types';

export const ModalContext = createContext(null)

const ModalContextProvider = ({ children }) => {
  const [modalDetail, setModalDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);
  return (
    <ModalContext.Provider value={{ modalDetail, setModalDetail, isLoading, setIsLoading, isError, setIsError }}>{children}</ModalContext.Provider>
  )
}

ModalContextProvider.propTypes = {
  children: PropTypes.object
};

export default ModalContextProvider
