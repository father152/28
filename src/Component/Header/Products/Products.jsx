import React from "react";
import { Link } from "react-router-dom";
import home from "../home.png";
import "./products.css";


function Product(props) {
  return (
    <div className="product">
      <div>
        <span className="brand">{props.brand}</span>
      </div>
      <div>
        <span className="name">{props.name}</span>
      </div>
      <img className="pic" src={props.image} alt={props.names} />
      <div>
        <span className="model">{props.model}</span>
      </div>
      <div>
        <span className="description">{props.description}</span>
      </div>
      <div>
        <span className="cost">{props.cost}$</span>
      </div>

      <button className="buy">
        <Link to="/buy">BUY</Link>
      </button>
    </div>
  );
}

const Products = () => {
  return (
    <div className="products">
      <h1>PRODUCTS</h1>
      <div className="title-products">
        <Product
          brand="Ford"
          name="Auto"
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rh5cFRzQ9DPEHZYlKO-gznuz6BB7_6LmVw&usqp=CAU"
          }
          names="Picture 3"
          model="Focus"
          description="sdfgsdfg dfgd dfgdsdfg sdfgdfg  sdfgdfg dfgsdfddf f ffgdfgdf " 
          cost="45"
        />
        <Product
          brand="Ford"
          name="Auto"
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rh5cFRzQ9DPEHZYlKO-gznuz6BB7_6LmVw&usqp=CAU"
          }
          names="Picture 3"
          model="Focus"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="45"
        />
        <Product
          brand="Ford"
          name="Auto"
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rh5cFRzQ9DPEHZYlKO-gznuz6BB7_6LmVw&usqp=CAU"
          }
          names="Picture 3"
          model="Focus"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="45"
        />
        <Product
          brand="Ford"
          name="Auto"
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rh5cFRzQ9DPEHZYlKO-gznuz6BB7_6LmVw&usqp=CAU"
          }
          names="Picture 3"
          model="Focus"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="45"
        />
        <Product
          brand="Ford"
          name="Auto"
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rh5cFRzQ9DPEHZYlKO-gznuz6BB7_6LmVw&usqp=CAU"
          }
          names="Picture 3"
          model="Focus"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="45"
        />
        <Product
          brand="Ford"
          name="Auto"
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rh5cFRzQ9DPEHZYlKO-gznuz6BB7_6LmVw&usqp=CAU"
          }
          names="Picture 3"
          model="Focus"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="45"
        />
        <Product
          brand="Ford"
          name="Auto"
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rh5cFRzQ9DPEHZYlKO-gznuz6BB7_6LmVw&usqp=CAU"
          }
          names="Picture 3"
          model="Focus"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="45"
        />
        <Product
          brand="Ford"
          name="Auto"
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rh5cFRzQ9DPEHZYlKO-gznuz6BB7_6LmVw&usqp=CAU"
          }
          names="Picture 3"
          model="Focus"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="45"
        />
        <Product
          brand="Ford"
          name="Auto"
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rh5cFRzQ9DPEHZYlKO-gznuz6BB7_6LmVw&usqp=CAU"
          }
          names="Picture 3"
          model="Focus"
          description="dfgergeg ergdfgerg ergergerg ghjuighj 
        fghjrthdh thdghdh "
          cost="45"
        />
      </div>
      <Link to="/" className="home">
        <img src={home} alt=""></img>
      </Link>
    </div>
  );
};
export default Products;
