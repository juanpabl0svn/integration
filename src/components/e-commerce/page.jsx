/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import "./e-commerce.css";
import { useState } from "react";
import Item from "./item";

const Ecommerce = () => {
  const [items, setItems] = useState([
    {
      name: "Camera",
      image: "http://www.localhost:5173/images/camera.jpeg",
      price: 2000,
      units: 20,
      description:
        "This is a camera GXL-2000, it was designed in 2022 and it's perfec to take amazing photos, with its technology you will be able to develop great abilities to become an amazing photographer, it charges completely in 2 hours and it will give you aproximately 14 hours of use.",
      comments: [],
      ranking: [1, 2, 3, 4],
    },
    {
      name: "Bed",
      image: "http://www.localhost:5173/images/bed.jpeg",
      price: 1000,
      units: 6,
      description:
        "Bed 200x170 cm, made in Japan, it is contructed with caoba wood, perfect to control the temperature, also it's mattress has feather of eagle and ostrich, makingi t very comfortable and soft, it is perfect for a single person but it can work either with two people on it.",
      comments: [],
      ranking: [4, 2, 1],
    },
    {
      name: "Ipad air 4",
      image: "http://www.localhost:5173/images/ipad.jpeg",
      price: 999,
      units: 0,
      description:
        "This is the 4th generation of ipads air and it comes with 64gb of memory, 2gb ram memory, a screen 24x19.5 cm, iluminated by led lights, it has a battery of 7.720mAh, and with 1 hour and 30 minutes it can bring you at least 12 hours of entreteinment.",
      comments: [],
      ranking: [0, 2],
    },
    {
      name: "Laptop",
      image: "http://www.localhost:5173/images/laptop.jpeg",
      price: 960,
      units: 32,
      description:
        "HP laptop 2023 with amazing graphics, it has the last in techonology, havinga a i7 11th generation, 1080 ti graphic card, 16gb RAM and many more, you are just one click to have the best personal computer in the momento, buy it now.",
      comments: [],
      ranking: [3, 3, 3],
    },
    {
      name: "Iphone 14 pro max",
      image: "http://www.localhost:5173/images/iphone.jpeg",
      price: 1100,
      units: 17,
      description:
        "Iphone 14 pro max, the last item that apple have launched, it has the best of the best in mobile technology, it has new features that you will not believe, now you can record videos with the best quality, and the new dynamic island you will have a new tool to ease your life.",
      comments: [],
      ranking: [1, 2, 1],
    },
    {
      name: "Table",
      image: "http://www.localhost:5173/images/table.jpeg",
      price: 200,
      units: 37,
      description:
        "This is a camera GXL-2000, it was designed in 2022 and it's perfec to take amazing photos, with it technology you will be able to develop great abilities to become an amazing photographer, it charges completely in 2 hours and it will give you aproximately 14 hours of use.",
      comments: [],
      ranking: [6, 3, 3],
    },
    {
      name: "Mouse Gamer",
      image: "http://www.localhost:5173/images/mouse_gamer.jpeg",
      price: 45,
      units: 13,
      description:
        "This is a camera GXL-2000, it was designed in 2022 and it's perfec to take amazing photos, with it technology you will be able to develop great abilities to become an amazing photographer, it charges completely in 2 hours and it will give you aproximately 14 hours of use.",
      comments: [],
      ranking: [],
    },
    {
      name: "Tv",
      image: "http://www.localhost:5173/images/tv.jpeg",
      price: 15000,
      units: 18,
      description:
        "This brand new TV has the lastest in technology, a 76in screen, with samsung store, and many more, buy it now. ",
      comments: [],
      ranking: [1],
    },
    {
      name: "MacBook Air 2022",
      image: "http://www.localhost:5173/images/macbook.jpeg",
      price: 1700,
      units: 10,
      description:
        "MacBook Air 2022, an amazing laptop form apple perfect to code or create designs for your job, it has many tools to improve your skills and performance.",
      comments: [],
      ranking: [2, 2],
    },
    {
      name: "Chair",
      image: "http://www.localhost:5173/images/chair.jpeg",
      price: 35,
      units: 14,
      description:
        "Chair made of oak wood with an amazing design to give a nature touch in your house or space.",
      ranking: [3, 2],
      comments: [],
    },
    {
      name: "Sofa",
      image: "http://www.localhost:5173/images/sofa.jpeg",
      price: 240,
      units: 6,
      description:
        "Gray sofa made with cotton, very comfortable and perfect for your home, makes your home a better place with this sofa",
      comments: [],
      ranking: [],
    },
    {
      name: "Apple watch",
      image: "http://www.localhost:5173/images/apple_watch.jpeg",
      price: 650,
      units: 11,
      description:
        "Smart watch from apple, elegant and light, you can answer calls, watch videos, send messages and many more, buy it now.",
      comments: [],
      ranking: [],
    },
  ]);

  return (
    <main className="e-commerce">
      {items.map((item) => (
        <Item {...item} key={crypto.randomUUID()} />
      ))}
    </main>
  );
};

export default Ecommerce 
