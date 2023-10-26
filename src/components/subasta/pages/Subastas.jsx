import React, { useState, useEffect } from "react";
import Subasta from "../components/Subasta.jsx";

const Subastas = ({ person }) => {
  const [auctions, setAuctions] = useState([]);
  const [people, setPeople] = useState([]);
  const [products, setProducts] = useState([]);
  const [loadingAuctions, setLoadingAuctions] = useState(false);
  const [loadingPeople, setLoadingPeople] = useState(false);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setLoadingAuctions(true);
    setLoadingPeople(true);
    setLoadingProducts(true);

    fetch("v1/auction/list")
      .then((response) => response.json())
      .then((data) => {
        setAuctions(data);
        setLoadingAuctions(false);
      });

    fetch("v1/person/list")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data);
        setLoadingPeople(false);
      });

    fetch("v1/product/list")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoadingProducts(false);
      });
  }, [refresh]);

  if (loadingAuctions || loadingPeople || loadingProducts) {
    return <p>Loading...</p>;
  }

  return (
    <div className="Content">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Fecha inicial</th>
            <th scope="col">Fecha final</th>
            <th scope="col">Producto</th>
            <th scope="col">Valor Actual</th>
            <th scope="col">Vendedor</th>
            <th scope="col">Comprador</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {auctions.map((auction, index) => (
            <Subasta
              subasta={auction}
              people={people}
              products={products}
              setRefresh={setRefresh}
              person={person}
              key={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Subastas;
