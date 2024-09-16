import React,{useState} from "react";
import { Parallax, Background } from "react-parallax";
import ReactPaginate from "react-paginate";
import "./jwellery.css";
import Card from "../components/Card/Card";
import Black from "../assets/images/mra.avif";
import { jewells,earings } from "../constants/data";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Earing = () => {
  const [visibleItems, setVisibleItems] = useState(4); // Number of items initially visible
  const [allItems, setAllItems] = useState(earings);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Increase the number of visible items
  };

  return (
    <div>
      <Parallax bgImage={Black} strength={700}>
      <Navbar />
        <div className="content">
          <div className="aboutx">
            <h1>Earings</h1>
            <p>
            Adorn your ears with elegance and charm through our exquisite earring collection, where every piece is a testament to refined craftsmanship.
            </p>
          </div>
        </div>
      </Parallax>
      <Parallax bgImage={Black} strength={700}>
      <section className="Collection top" id="Collection">
        <div className="c0">
          <div className="c">
            {allItems.slice(0, visibleItems).map((value, index) => (
              <div className="c1" key={index}>
                <Card
                  key={index}
                  image={value.image}
                  title={value.title}
                  price={value.price}
                />
              </div>
            ))}
            <br />
            {visibleItems < allItems.length && (
              <button className="loadMoreButton" onClick={loadMore}>
                Load More
              </button>
            )}
          </div>
          <br />
        </div>
      </section>
      </Parallax>
      <Footer/>
    </div>
  );
};

export default Earing;
