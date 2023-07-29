import React, { useContext } from 'react';
import { ModalContext } from '../ModalContextProvider/ModalContextProvider';
import PropTypes from 'prop-types';

const Card = ({ product }) => {
  const { setModalDetail } = useContext(ModalContext);
  const truncate = (string, n) => {
    return string?.length ? string.substr(0, n - 1) + '...' : string;
  };

  return (
    <div className='col-12 col-md-6 col-lg-4 mb-4' key={product.id}>
      <div className='card p-3 shadow bg-body-white rounded mx-2'>
        <div className='px-5 pt-5 pb-2 card-image-background'>
          <img
            src={product.imageUrl}
            className='col-md-11 ms-2'
            alt={product.productName}
            height={170}
          />
        </div>
        <div className='card-body p-0 mt-4'>
          <div className='position-absolute top-0 end-0 rounded-circle px-1 py-1 me-2 mt-2 text-white'>
          </div>
          <h6 className='card-title fw-bold mb-0 text-center fs-5 mb-2'>{product.name}</h6>
          <p className='card-text fw-bold text-muted'>{truncate(product?.description, 75)}</p>
          <div className='my-4 pb-3'>
            <span className='card-text fw-bold float-start ms-2'>MRP : &#8377; {product.maxRetailPrice}</span>
            <button
              type='button'
              className='btn-link fw-medium border-0 bg-transparent float-end text-primary me-3'
              onClick={() => setModalDetail({ ...product })}
              data-bs-toggle='modal'
              data-bs-target='#staticBackdrop'
              data-testid='modalBtn'>
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object,
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  productName: PropTypes.string,
  gallonPack: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  maxRetailPrice: PropTypes.number
};

export default Card;
