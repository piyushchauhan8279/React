import Title from "./Title";
import "./Card.css";
import Description from "./Description";
import Price from "./Price";
export default function Card({ titleArr, idx }) {
  let description = [
    ["Laptop", "15.6-inch display, Intel i5, 8GB RAM, 512GB SSD"],
    ["Smartphone", "6.5-inch AMOLED, 128GB storage, 48MP camera"],
    ["Headphones", "Wireless, Noise-cancelling, 20 hrs battery"],
    ["Smartwatch", "Heart rate monitor, GPS, Water resistant"],
  ];

  let prices = [
    ["$799", "$699"], // Laptop
    ["$499", "$449"], // Smartphone
    ["$199", "$159"], // Headphones
    ["$149", "$129"], // Smartwatch
  ];
  return (
    <>
      <div className="card-container">
        <Title title={titleArr[idx]}></Title>
        <Description description={description[idx]}>
        </Description>
        <Price price={prices[idx]}></Price>
      </div>
    </>
  );
}
