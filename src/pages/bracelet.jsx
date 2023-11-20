import React,{useState} from "react";
import { Parallax, Background } from "react-parallax";
import ReactPaginate from "react-paginate";
import "./jwellery.css";
import Card from "../components/Card/Card";
import Black from "../assets/images/mra.avif";
import { jewells,bracelets } from "../constants/data";
import Navbar from "../components/Navbar/Navbar";


const Bracelet = () => {
  const [visibleItems, setVisibleItems] = useState(4); // Number of items initially visible
  const [allItems, setAllItems] = useState(bracelets);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Increase the number of visible items
  };

  return (
    <div>
      <Parallax bgImage={Black} strength={700}>
      <Navbar />
        <div className="content">
          <div className="aboutx">
            <h1>Bracelet</h1>
            <p>
            Wrap your wrist in sophistication with our captivating bracelet collection, a harmonious blend of style and craftsmanship.
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
    </div>
  );
};

export default Bracelet;
