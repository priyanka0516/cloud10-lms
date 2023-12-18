import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import'./responsive.css';
export default class Home extends Component {
    render() {
      const handleClickScroll = () => {
        const element = document.getElementById('section-1');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };

      return (
        <>
        <div className="top-banner">
          <div className="container">
          <div className="top-banner--text">
            <h1>We Increase Overal performace of the hotel, growth</h1>
              <p>Cloud10 Hospitality Services takes your hotel’s performance to a new height with the use of advanced technology, knowledge , contemporary process for commercial performance & competitive strategies.</p>	
            </div>  
            <div className="scrolldown" onClick={handleClickScroll}>  
              <div className="chevrons"onClick={handleClickScroll}>
                <div className='chevrondown'onClick={handleClickScroll}></div>
                <div className='chevrondown'onClick={handleClickScroll}></div>
              </div>
            </div>
        </div>
        </div>
        <div className="home-about" id="section-3">
          <div className="container">
            <div className="row">
                <div className="col-sm-12">             
                <h2 className="wrapper-heading">About<span className="content-text"> Us</span></h2>
                <p className="wrapper-text">Cloud 10 Hospitality Service takes your hotel’s performance to a new height with the use of
                  advanced technology, knowledge , contemporary process for commercial performance &
                  competitive strategies.
                How we add value to your business - Clouds 10 s team of experts create and gives you
                end-to-end functional solution that includes most important elements of hotel management -
                business development and revenue maximisation, guest love and loyalty, data capture and
                synergize to produce stronger performance, profit engineering to enhance financial benefits.</p>   
                </div> 
            </div>
          </div>
        </div> 
        <div className="about-section-6">
        <div className="container">
          <div className="about-wrap">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-left">
                  <div className="section-title">
                    <h3 className="sub-title text-left">Who we are</h3>
                    <h2 className="title">We specialise in Serving profit by giving best services.</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">         
              <div className="about-right">
                <div className="about-experience-award">
                  <div className="single-item">
                    <h2 className="number">01</h2>
                    <span>Years of <br/> experience</span>
                  </div>
                  <div className="single-item">
                    <h2 className="number">10+</h2>
                    <span>Satisfied <br/>Clients </span>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* <div className="section counter-section">
            <div className="container">
                <div className="counter-wrap">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">                      
                            <div className="counter-item text-center">
                                <div className="counter-icon">
                                  <img src="assets/images/counter/counter-1.png" alt=""/>
                                </div>
                                <div className="counter-text">
                                    <span>
                                    <span className="counter">354</span>+
                                    </span>
                                    <p>Completed Projects</p>
                                </div>
                            </div>           
                        </div>
                        <div className="col-lg-3 col-sm-6">                         
                            <div className="counter-item text-center">
                              <div className="counter-icon">
                                <img src="assets/images/counter/counter-2.png" alt=""/>
                              </div>
                              <div className="counter-text">
                                <span>
                                <span className="counter">119</span>+
                                </span>
                                <p>Satisfied Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">            
                            <div className="counter-item text-center">
                                <div className="counter-icon">
                                  <img src="assets/images/counter/counter-3.png" alt=""/>
                                </div>
                                <div className="counter-text">
                                  <span>
                                  <span className="counter">99</span>%
                                  </span>
                                  <p>Web Site Analyse</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-item text-center">
                                <div className="counter-icon">
                                  <img src="assets/images/counter/counter-4.png" alt=""/>
                                </div>
                                <div className="counter-text">
                                  <span>
                                  <span className="counter">321</span>+
                                  </span>
                                  <p>Clients Supoort Done</p>
                                </div>
                            </div>          
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        <div className="get-intouch">
          <div className="container">
          <div className="row">
          <div className="col-md-4">
            <div className="get-intouch-text">
              <h2 className="intouchleft-text">Are You Looking for The Best Hotel Management Services?</h2>
            </div>
          </div>
          <div className="col-md-4">
          <div className="get-intouch-text">
              <p className="intouchcenter-text">If you’re looking for a unique management style with a hands on approach for your next resort project then we’d love to speak to you. </p>
            </div>
          </div>
          <div className="col-md-4">
          <div className="get-intouch-text">
              <Link to={"/contact/#contact-detail"}><button className="intouchright-text">Get In Touch Now</button></Link>
            </div>
          </div>
        </div>
          </div>
        </div>
        {/* <div id="service"> 
        <div className="container">
        <div className="row">
        <div className="section_title text-center">
        <h2>Our <span className="content-text">Services</span></h2>
        <p>Our entrepreneurial approach to hotel operations focuses on building authentic relationships, identifying opportunities, and achieving common goals.</p>
        </div>
          <div className="col-lg-3 col-sm-6">
            <div className="blob">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div className="icon"><img src={require('./../assets/hotel.png')} alt="hero1"/></div>
              </div>
              <div className="single_service-body">
                <h4 className="single_service-heading">Hotel Operations</h4>
                <p>We take great pride in our operations and strive to provide our guests with the best possible experience during their stay.</p>
                <button className="read_button"><Link to="/hoteloperation" className="read_link">Read More &rarr;</Link></button>
              </div>
            </div>
            </div>

       <div className="blob">
     <div className="single_service hvr-curl-top-right">
       <div className="single_service-left">
        <div className="icon"><img src={require('./../assets/social-media.png')} alt="hero1"/></div>
       </div>
       <div className="single_service-body">
         <h4 className="single_service-heading">Digital Marketing</h4>
         <p>Digital marketing is the practice of promoting products or services through digital channels, such as search engines, social media, email, and websites.</p>
         <button className="read_button"><Link to="/digitalmarketing" className="read_link">Read More &rarr;</Link></button>
      </div>
     </div>
     </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="blob">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div className="icon"><img src={require('./../assets/growth.png')} alt="hero1"/></div>
              </div>
              <div className="single_service-body">
                <h4 className="single_service-heading">Business Development</h4>
                <p>Our Business development plan  is to  finding new ways to grow and innovate within a business, with the ultimate goal of creating long-term value for the investors.</p>
                <button className="read_button"><Link to="/hoteloperation" className="read_link">Read More &rarr;</Link></button>
              </div>
            </div>
            </div>
     <div className="blob">
     <div className="single_service hvr-curl-top-right">
       <div className="single_service-left">
        <div className="icon"><img src={require('./../assets/service.png')} alt="hero1"/></div>
       </div>
       <div className="single_service-body">
        <h4 className="single_service-heading">Guest Satisfaction </h4>
        <p>Guest satisfaction refers to the degree to which clients are happy with a product, service, or overall experience provided by a business.</p>
        <button className="read_button"><Link to="/guest" className="read_link">Read More &rarr;</Link></button>
      </div>
     </div>
     </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="blob">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div className="icon"><img src={require('./../assets/profit.png')} alt="hero1"/></div>
              </div>
              <div className="single_service-body">
                <h4 className="single_service-heading">Profit engineering</h4>
                <p>Enhancing profit requires a combination of strategic thinking, creativity, and implementation of effective tactics.we are here to help you .</p>    
                <button className="read_button"><Link to="/profit" className="read_link">Read More &rarr;</Link></button> </div>
            </div>
            </div>
            <div className="blob">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div className="icon"><img src={require('./../assets/business-people.png')} alt="hero1"/></div>
              </div>
              <div className="single_service-body">
                <h4 className="single_service-heading">Sales process & effective methods</h4>
                <p>Staffing and career development are crucial components of any successful business.we trained our staff professionally they can provide you best services.</p>
                <button className="read_button"><Link to="/sales" className="read_link">Read More &rarr;</Link></button>
              </div>
            </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6"> 
          <div className="blob">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div className="icon"><img src={require('./../assets/resource.png')} alt="hero1"/></div>
              </div>
              <div className="single_service-body">
                <h4 className="single_service-heading">Marketing Plan</h4>
                <p>Asset management requires careful planning, monitoring & ongoing evaluation. By managing assets effectively, companies can improve efficiency.</p>
                <button className="read_button"><Link to="/marketingplan" className="read_link">Read More &rarr;</Link></button>
              </div>
            </div>
          </div>
     <div className="blob">
     <div className="single_service hvr-curl-top-right">
       <div className="single_service-left">
        <div className="icon"><img src={require('./../assets/profit-growth.png')} alt="hero1"/></div>
       </div>
       <div className="single_service-body">
         <h4 className="single_service-heading">Revenue Management</h4>
         <p>Revenue management is the process of maximizing revenue by optimizing pricing, inventory, and demand.</p>
         <button className="read_button"><Link to="/revenue" className="read_link">Read More &rarr;</Link></button>
      </div>
     </div>
     </div>
    </div>
    </div>
    </div>
    </div>*/}
    <div id="service"> 
      <div className="container">
        <div className="row">
        <div className="section_title text-center">
        <h2 className="wrapper-heading">Our <span className="content-text">Services</span></h2>
        <p>Our entrepreneurial approach to hotel operations focuses on building authentic relationships, identifying opportunities, and achieving common goals.</p>
        </div>
        <div className="col-sm-5">
          <div className="sec">
          <h3 className="demo-content"> Hotel Management Services </h3>      
          <p className="wrapper-text">Cloud10 hospitality team of experts create and gives you end-to-end functional solution that includes most important elements of hotel management.</p>
          <button className="read_button"><Link to="/hoteloperation" className="read_link">Read More &rarr;</Link></button>
          </div>
        </div>
        <div className="col-sm-7">
        <div className="right-image">
            <img src={require('./../assets/download.png')} alt="hero1"/>
          </div>
        </div>
        <div className="col-sm-5">
        <div className="right-image">
            <img src={require('./../assets/Business-Consultant.png')} alt="hero1"/>
          </div>
        </div>
        <div className="col-sm-7">
        <div className="sec">
        <h3 className="demo-content"> Hotel Consultancy Services </h3>
        <p className="wrapper-text">We know how to enhance your business we’ve been there.Manage Revenue,manage Guest,manage Profit etc.</p>
        <button className="read_button"><Link to="/hotel-management" className="read_link">Read More &rarr;</Link></button>
        </div>
        </div>
        <div className="col-sm-5">
        <div className="sec">
        <h3 className="demo-content">Hotel Development Services</h3>      
        <p className="wrapper-text">Development, operations, asset management,food & beverage, marketing, & accounting services we're here to help you.</p>
        <button className="read_button"><Link to="/revenue" className="read_link">Read More &rarr;</Link></button>
        </div>
        </div>
        <div className="col-sm-7">
          <div className="right-image">
            <img src={require('./../assets/k.png')} alt="hero1"/>
          </div>
        </div>
        </div>
        </div>   
      </div>
      <div className="example-header">
            <h1 className="text-center">Let's Work Together</h1>
            <p>We are here to give you profit</p>
      </div>
      <div id="clients" className="wow fadeInUp">
      <div className="container">
        <h2 className="wrapper-heading">Our<span className="content-text"> Partners</span></h2>
        <Slider {...settings}>
          <div className="ourclients">
          <img src={require('./../assets/aws_client.png')} alt="hero1"/>
          </div>
          <div className="ourclients">
          <img src={require('./../assets/tesla_client.png')} alt="hero1"/>
          </div>
          <div className="ourclients">
          <img src={require('./../assets/google_client.png')} alt="hero1"/>
          </div>
          <div className="ourclients">
          <img src={require('./../assets/booking_client.png')} alt="hero1"/>
          </div>         
          <div className="ourclients">
          <img src={require('./../assets/expedia_client.png')} alt="hero1"/>
          </div>
          <div className="ourclients">
          <img src={require('./../assets/aws_client.png')} alt="hero1"/>
          </div>
          <div className="ourclients">
          <img src={require('./../assets/expedia_client.png')} alt="hero1"/>
          </div>
          <div className="ourclients">
          <img src={require('./../assets/tesla_client.png')} alt="hero1"/>
          </div>
        </Slider>
        </div>
      </div>
      </>
      );
    }
}
  
