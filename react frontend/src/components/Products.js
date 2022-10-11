import { useState, useEffect } from 'react';
import useNotifications from '../hooks/useNotification';
import useProducts from '../hooks/useProducts';
import Notification from './Notification';

function Products() {
  const [productsData, setProductsData] = useState([]);
  let initialProducts = productsData?.map((item) => {
    return { ...item, selected: false };
  });
  useEffect(() => {
    fetch(
      'https://0frzssm5pi.execute-api.us-east-1.amazonaws.com/Prod/products'
    )
      .then((response) => response.json())
      .then((data) => {
        setProductsData(data);
        console.log(data);
      });
  }, []);

  const { cart, addProduct, removeProduct, calculateSum } = useProducts();
  const { notifications, createNotification } = useNotifications();
  const isInCart = (product) => {
    return !cart.find((item) => item.id === product.id);
  };

  return (
    <div>
      {notifications ? (
        <Notification newNotification={notifications} />
      ) : (
        <div className="row">
          {initialProducts?.map((product) => {
            return (
              <div className="card col-md-4" key={product.id}>
                <div className="text-center">
                  <img
                    style={{ width: '400px' }}
                    alt=""
                    src={product.imageURL}
                  />
                </div>
                <div className="card-body">
                  <h2>{product.name}</h2>

                  <p className="card-text">{product.description}</p>
                  <p>
                    <strong>
                      price: {product.price} {product.currency}
                    </strong>
                  </p>
                  {isInCart(product) && (
                    <button
                      onClick={() => {
                        addProduct(product);
                        createNotification(['Adding Product']);
                      }}
                      className="btn btn-primary"
                    >
                      Select
                    </button>
                  )}
                  {!isInCart(product) && (
                    <button
                      onClick={() => {
                        removeProduct(product);
                        createNotification(['Removing Product']);
                      }}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      <form>
        <div className="form-group mt-4 col-md-4">
          <p className="mt-4">You will be charged: {calculateSum(cart)}</p>

          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Buy now
        </button>
      </form>
    </div>
  );
}

export default Products;
