import React, { useEffect, useState } from 'react';
import { products } from './Products';
import { IoStar } from 'react-icons/io5';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  const notify = () => toast.success('Product has been added to cart!');

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filterProducts = products.filter((product) => {
      return product.category === 'mobile' || product.category === 'wireless';
    });
    setFilteredProducts(filterProducts);
  }, []);

  return (
    <>
      <div className="container pt-5">
        <h2 className="pb-5">New Arrivals</h2>
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-4 d-grid" key={product.id}>
              <Link to={`/productdetails/${product.id}`}>
                <div className="card border gap-3 mb-4">
                  <img
                    className="card-img-top"
                    style={{ height: '350px' }}
                    src={product.imgUrl}
                    alt={product.productName}
                  />
                  <div className="card-body" style={{ textAlign: 'left' }}>
                    <h4 className="card-title">
                      {product.productName} <br />
                      <p style={{ color: '#f0be2a' }}>
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </p>
                    </h4>
                    <h6 className="card-text fw-bold fs-4">${product.price}</h6>
                  </div>
                </div>
              </Link>
              <div
                style={{
                  textAlign: 'right',
                  fontSize: '33px',
                  position: 'relative',
                  bottom: '90px',
                  right: '20px',
                  margin: '0',
                }}
                onClick={notify}
              >
                <IoIosAddCircleOutline />
                <ToastContainer style={{ fontSize: '15px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
