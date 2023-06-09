import React , {useState} from "react";

export default function Pizza({ pizza }) {
  const [ quantity, setquantity ] = useState(1) 
  const [ variant, setvariant ] = useState('Full') 
  return (
    <div style = {{margin:'70px'}} className="shadow-lg p-3 mb-5 bg-white rounded">
      <h1>{pizza.name}</h1>
      <img
        src={pizza.image}
        className="img-fluid"
        style={{ height: "200px", width: "200px" }}
      />

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Variants</p>
          <select className='form-control' value={variant} onChange={(e)=>{setvariant(e.target.value)}}>
            {pizza.variants.map((variant) => {
              return <option value={variant}>{variant}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select className='form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
              {[...Array(5).keys()].map((x , i)=>{

                return <option value={i+1}>{i+1}</option>

              })}
          </select>
        </div>
      </div>
              <div className="flex-container">
                <div className="m-1 w-100">
                  <h1 className="mt-1">Price : {pizza.prices[0][variant] * quantity}Rs/-</h1>
                </div>
                <div className="m-1 w-100">
                  <button className="btn">ADD TO CART</button>
                </div>
              </div>
    </div>
  );
}
