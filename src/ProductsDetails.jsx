import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import table from './assets/Images/table.jpg';
import { useParams } from 'react-router-dom';
import { products } from './Products';
import { IoStar } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { IoIosAddCircleOutline } from 'react-icons/io';

const ProductDetailsPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [description, setDescription] = useState('des');
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const filterRelatedProducts = (data) => {
    const filtered = products.filter((item) => {
      return item.category === data.category && data.id !== item.id;
    });
    setRelatedProducts(filtered);
  };

  const fetchProductDetails = () => {
    const [data] = products.filter((item) => {
      return item.id == id;
    });
    setProduct(data);
    filterRelatedProducts(data);
    fetchProductRatings(data);
  };

  const handleDescription = (type) => {
    setDescription(type);
  };

  const fetchProductRatings = (data) => {
    setRatings(data.reviews);
  };

  const notify = () => toast.success('Product has been added to cart!');

  return (
    <>
      <Navbar />

      <div style={{ position: 'relative' }}>
        {product && (
          <h5
            style={{
              position: 'absolute',
              top: '100px',
              left: '40%',
              color: 'white',
              zIndex: '5',
              fontSize: '38px',
              textAlign: 'center',
            }}
          >
            {product.productName}
          </h5>
        )}
        <img style={{ width: '100%', height: '250px' }} src={table} alt="Banner" />
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '250px',
            background: 'rgba(0, 0, 0, 0.6)',
          }}
        ></div>
      </div>

      {product && (
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <img style={{ height: '450px', width: '100%' }} src={product.imgUrl} alt={product.productName} />
          </div>
          <div className="ps-5" style={{ marginTop: '70px', textAlign: 'left' }}>
            <h2>{product.productName}</h2>
            <span>
              <h6 style={{ color: '#e9bb13', top: '50px', marginTop: '30px' }}>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <span style={{ color: 'grey', marginLeft: '20px' }}>{product.avgRating} rating</span>
              </h6>
            </span>
            <h6 style={{ fontSize: '20px', marginTop: '30px' }}>
              ${product.price} <span style={{ marginLeft: '30px', color: 'gray', fontSize: '17px' }}>Category: {product.category}</span>
            </h6>
            <p style={{ marginTop: '30px' }}>{product.shortDesc}</p>
            <input type="number" placeholder="1" style={{ marginTop: '30px', width: '10%' }} />
            <br />
            <button style={{ marginTop: '30px', borderRadius: '8px', padding: '4px', backgroundColor: 'blue', color: 'white' }}>
              Add To Cart
            </button>
          </div>
        </div>
      )}

      <div className="container mt-5">
        {product && (
          <div className="container" style={{ textAlign: 'left' }}>
            <div className="d-flex">
              <p
                style={{ cursor: 'pointer', color: description === 'des' ? 'black' : 'grey' }}
                onClick={() => handleDescription('des')}
              >
                Description
              </p>
              <p
                style={{ cursor: 'pointer', marginLeft: '20px', color: description === 'rev' ? 'black' : 'grey' }}
                onClick={() => handleDescription('rev')}
              >
                Reviews({ratings.length})
              </p>
            </div>

            {description === 'des' ? (
              <p>{product.description}</p>
            ) : (
              ratings.map((review, index) => (
                <div key={index}>
                  <p className="text-warning">{review.rating} (rating)</p>
                  <p>{review.text}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <div className="container">
        <h4 style={{ top: '280px', textAlign: 'left' }}>You might also like</h4>
        <div className="row">
          {relatedProducts.map((item) => (
            <div className="col-4 d-grid" key={item.id}>
              <Link to={`/productdetails/${item.id}`}>
                <div className="card border gap-3 mb-4">
                  <p
                    style={{
                      textAlign: 'left',
                      border: '1px solid blue',
                      position: 'absolute',
                      padding: '2px',
                      borderRadius: '10px',
                      background: '#022f72',
                      color: 'white',
                    }}
                  >
                    {item.discount}% Off
                  </p>
                  <img className="card-img-top" style={{ height: '350px' }} src={item.imgUrl} alt={item.productName} />
                  <div className="card-body" style={{ textAlign: 'left' }}>
                    <h4 className="card-title">
                      {item.productName} <br />
                      <p style={{ color: '#f0be2a' }}>
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </p>
                    </h4>
                    <h6 className="card-text fw-bold fs-4">${item.price}</h6>
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

export default ProductDetailsPage;