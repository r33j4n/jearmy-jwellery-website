import React, {useState} from 'react';
import {worksGallery} from "../../constants/data";
import "./Work.css";
import {BsPlusLg} from "react-icons/bs";
import {ImCancelCircle} from "react-icons/im";
import Aramx from '../../pages/aram copy';
import Chainx from '../../pages/chainW';
import Necklacex from '../../pages/necklace copy';

const Work = () => {
    const [imageModal, setImageModal] = useState(false);
    const [imageSource, setImageSource] = useState("");

    const setImageOnModal = (src) => {
        setImageModal(true);
        setImageSource(src);
    }

  return (
    <React.Fragment>
    <Aramx />
    <Chainx />
    <Necklacex />
<div className='work section-p bg-grey' id = "work">
        <div className={imageModal ? "image-box show-image-box" : "image-box"}>
            <div className='image-box-content'>
                <img src = {imageSource} alt = "" />
                <span className='image-box-close-btn' onClick={() => setImageModal(false)}>
                    <ImCancelCircle size = {30} />
                </span>
            </div>
        </div>

        <div className='container'>
            <div className='work-content'>
                <div className='section-title'>
                    <h3 className='text-brown'>latest <span className='text-dark'>Designs</span></h3>
                    <p className='text'>Witness our Latest Designs</p>
                </div>

                <div className='work-list grid'>
                    {
                        worksGallery.map((work, index) => {
                            return (
                                <div className='work-item text-center' key = {index} onClick = {() => setImageOnModal(work.image)}>
                                    <img src = {work.image} alt = "" />
                                    <span className='work-item-icon'>
                                        <BsPlusLg size = {38} className = "text-brown" />
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>

  )
}

export default Work