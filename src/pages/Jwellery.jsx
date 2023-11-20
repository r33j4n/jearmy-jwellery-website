import React,{useState} from "react";
import { Parallax, Background } from "react-parallax";
import ReactPaginate from "react-paginate";
import "./jwellery.css";
import JCard from "../components/Card/JCard";
import Black from "../assets/images/black.jpg";
import { jewells } from "../constants/data";
import Navbar from "../components/Navbar/Navbar";
import bgImage from "../assets/images/coverup.jpeg";
import bglite from "../assets/images/lightBG.jpeg";
import Footer from "../components/Footer/Footer";

const Jwellery = () => {
    const[pageNumber,setPageNumber]=useState(0);

    const jewellsPerPage=6;
    const pageVisited=pageNumber*jewellsPerPage;
    const pageCount=Math.ceil(jewells.length/jewellsPerPage);

    const changePage =({selected})=>{
         setPageNumber(selected)
    };

  return (
    <div>
      <Parallax bgImage={bgImage} strength={700}>
      <Navbar/>

        <div className="content">
          <div className="aboutx">
            <h1>Collections</h1>
            <p>
            Dive into a world of sophistication with our Jewel Collections, showcasing a harmonious blend of artistry and opulence.
            </p>
          </div>
        </div>
        
        
      </Parallax>
    <Parallax bgImage={bgImage} strength={600}>
         <section className="Collection top" id="Collection">
        <div className="c0">
        <div className="c">
         
            {jewells
            .slice(pageVisited,pageVisited+jewellsPerPage)
            .map((value, index) => {
              return (
                <div className="c1">
                <JCard
                  key={index}
                  image={value.image}
                  title={value.title}
                  price={value.price}
                  name={value.name}
                />
                </div>
              );
            })}

            <br/>
      
          </div>
          <br/>
          <div>
            <ReactPaginate 
              previousLabel={"previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationButtons"}
              previousLinkClassName={"previousButton"}
              nextLinkClassName={"nextButton"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
            </div>
            <br/>
    </div>
      </section>
      </Parallax>
      <Footer/>
    </div>
  );
};

export default Jwellery;
