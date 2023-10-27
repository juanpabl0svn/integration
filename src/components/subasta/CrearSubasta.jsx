import React, { useRef } from "react";
import "./App.css";

const CrearSubasta = ({ person }) => {
  const auction = useRef({});
  const product = useRef({});

  const handleAuctionChange = (event) => {
    auction.current = {
      ...auction,
      [event.target.name]: event.target.value,
    };
  };

  const handleProductChange = (event) => {
    product.current = {
      ...product,
      [event.target.name]: event.target.value,
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <br />
      <form className="Content" onSubmit={handleSubmit}>
        <h1>Creación de subasta</h1>
        <div className="form-group row">
          <div className="col-6">
            <label htmlFor="initialDate" className="short">
              Fecha inicio
            </label>
            <input
              type="date"
              className="form-control"
              id="initialDate"
              name="initialDate"
              placeholder="Ingresa la fecha de inicio"
              onChange={handleAuctionChange}
            />
          </div>
          <div className="col-6">
            <label htmlFor="finalDate" className="short">
              Fecha inicio
            </label>

            <input
              type="date"
              className="form-control"
              id="finalDate"
              name="finalDate"
              placeholder="Ingresa la fecha final"
              onChange={handleAuctionChange}
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Ingresa el nombre del producto"
              onChange={handleProductChange}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              id="value"
              name="value"
              placeholder="Ingresa el valor del producto"
              onChange={handleProductChange}
            />
          </div>
        </div>
        <br />
        <div className="form-group">
          <div className="col-12">
            <label htmlFor="description">Descripción del producto:</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="3"
              onChange={handleProductChange}
            ></textarea>
          </div>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Crear
        </button>
      </form>
    </>
  );
};

export default CrearSubasta;
