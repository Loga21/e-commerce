import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ modalContent }) => {
  useEffect(() => console.log(modalContent), []);
  return (
    <div className='modal fade' id='staticBackdrop' aria-hidden='false'>
      <div className='modal-dialog modal-xl mt-5' style={{ maxWidth: '700px' }}>
        <div className='modal-content'>
          <div>
            <button
              type='button'
              className='btn-close position-absolute top-0 end-0 me-4 mt-4'
              data-bs-dismiss='modal'
              aria-label='Close'
            />
          </div>
          <div className='modal-body d-flex my-5'>
            <div className='col-md-5 mt-3 ms-4'>
              <img
                src={modalContent.imageUrl}
                className='col-md-10 ms-4 mt-5'
                alt={modalContent.productName}
                height={180}
              />
            </div>
            <div className='col-md-6 mt-3 ms-3'>
              <h5 className='fw-bold fs-4'>{modalContent.name}</h5>
              <p className='fw-bold text-muted modal-desc'>{modalContent.description}</p>
              <div className='mt-4 mb-3'>
                <span className='card-text fw-bold'>MRP : &#8377;{modalContent.maxRetailPrice}</span>
                {/* <s className='card-text ms-3 text-muted'>${modalContent.maxRetailPrice}</s> */}
              </div>
              <p><b>Discount : </b>{modalContent.discountApplicable}%</p>
              <p className='text-muted'><b>Quantity : </b>{modalContent.quantity}</p>
              <p><b>Added : </b>{modalContent.added}</p>
              <p><b>Product Location : </b>{modalContent.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  modalContent: PropTypes.object,
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  productName: PropTypes.string,
  gallonPack: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  maxRetailPrice: PropTypes.number,
  discountApplicable: PropTypes.number,
  quantity: PropTypes.number,
  added: PropTypes.number,
  address: PropTypes.string
};
export default Modal;
