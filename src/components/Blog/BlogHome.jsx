import React from "react";
import Footer from "../Footer/Footer";
import Slide from "../Slide/Slide";
import Card from "./Card";
import CardTwo from "./CardTwo";

const BlogHome = () => {
  const data = [
    {
      id: 1,
      titleOne: "YOU CAN CHANGE THE WORLD",
      titleTwo: "STRONG STYLE",
      paraOne: "How women are redirecting Hollywood",
      paraTwo: "New ways to wear Denim belt bags make a Comeback",
      name: "By Jasmin Smith",
      subTitle: "How to shop mindfully",
      qrcode: "/images/qrcode.png",
      cover: "/images/blog5.jpg",
    },
  ];
  return (
    <>
      <section className="home">
        <div className="left-content">
          {data.map((value) => {
            return (
              <div className="content">
                <div className="logo">
                  <h1>React</h1>
                </div>
                <div className="home-img">
                  <img src={value.cover} alt="" />
                </div>
                <div className="text">
                  <h1>{value.titleOne}</h1>
                  <p>{value.paraOne}</p>
                  <span>{value.name}</span>,
                </div>
                <div className="text text2">
                  <h1>{value.titleTwo}</h1>
                  <p>{value.paraTwo}</p>
                  <span>{value.subTitle}</span>
                </div>
                <div className="qrcode">
                  <img src={value.qrcode} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="right-content">
          <Slide />
          <Card />
          <CardTwo />
          <Footer />
        </div>
      </section>
    </>
  );
};
export default BlogHome;
