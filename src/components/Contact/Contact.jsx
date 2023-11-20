import React, {useState} from 'react';
import "./Contact.css";
import { about_stats } from '../../constants/data';

const Contact = () => {
    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     message: ""
    // });

    // const handleChange = (e) => {
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [e.target.id] : e.target.value
    //     }))
    // }

    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //     console.log(formData);
    // }

  return (
    <div className='contact section-p'>
    <div className='section-title'>
                    <h3 className='text-brown'>Contact <span className='text-dark'>Us</span></h3>
                </div>
  
        {/* <div className='container'>
            <div className='contact-section'>
                <div className='section-title'>
                    <h3 className='text-brown'>contact <span className='text-dark'>us</span></h3>
                    <p className='text'>Contact through Email</p>
                </div>
            </div>

            <form className='contact-form mx-auto' onSubmit={handleSubmit}>
                <div className='form-elem'>
                    <input type = "text" value = {formData.name} className = "form-control" placeholder='Name' onChange={handleChange} id = "name" />
                </div>
                <div className='form-elem'>
                    <input type = "text" value = {formData.email} className = "form-control" placeholder='Email' onChange={handleChange} id = "email" />
                </div>
                <div className='form-elem'>
                    <textarea rows = "2" value = {formData.message} className = "form-control" placeholder='Message' onChange={handleChange} id = "message"></textarea>
                </div>
                <button type = "submit" className='bg-brown text-white submit-btn fw-3 fs-22'>Submit</button>
            </form>
        </div> */}

        <div className='container'>
            <div className='work-content'>
            <div className="about-grid parent-container  ">
            <div className='about-content' >
        <div className="about-grid parent-container  ">
            {about_stats.map((about_stat, index) => {
              return (
                <div className="about-item  flex set-align grid" key={index}>
                  <div className="about-item-icon ">
                    <img src={about_stat.image} alt="jearmy jwellers" />
                  </div>
                  <div className="about-item-text ">
                    {about_stat.value === "+61 413 593 119" ? (
                      <a href="tel:+61413593119">
                        <h3 className="fs-24 ls-2">{about_stat.value}</h3>
                        <p className="text">{about_stat.title}</p>
                      </a>
                    ) : about_stat.value === "jearmyjwellery@gmail.com" ? (
                      <a href={`mailto:${about_stat.value}`}>
                        <h3 className="fs-24 ls-2">{about_stat.value}</h3>
                        <p className="text">{about_stat.title}</p>
                      </a>
                    ) : (
                      <>
                        <h3 className="fs-24 ls-2">{about_stat.value}</h3>
                        <p className="text">{about_stat.title}</p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          </div>
          </div>
          </div>
          </div>
    </div>
  )
}

export default Contact