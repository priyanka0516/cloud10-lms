import React from "react";
import './style.css';
import'./responsive.css';
import {FaHandPointRight} from 'react-icons/fa';
const About = () => {
  return (
    <>
    <div className="asset-banner">
      <div className="container">
        <div className="banner-text"><h2 className="section-intro-title">About Us</h2></div>
      </div>
    </div>
    <div className="center-vertical">
      <div className="about-section-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
               <h2 className="wrapper-heading">Why<span className="content-text"> Us</span></h2>
                <p className="wrapper-text">Cloud 10 Hospitality Service takes your hotel’s performance to a new height with the use of
                  advanced technology, knowledge , contemporary process for commercial performance &
                  competitive strategies.
                How we add value to your business - Clouds 10 s team of experts create and gives you
                end-to-end functional solution that includes most important elements of hotel management -
                business development and revenue maximisation, guest love and loyalty, data capture and
                synergize to produce stronger performance, profit engineering to enhance financial benefits.
            <br/><br/>Cloud10 hospitality team of experts create and gives you end-to-end functional solution that includes most important elements of hotel management  - business development and revenue maximisation, guest love and loyalty, data capture and synergize to produce stronger performance, profit engineering to enhance financial benefits.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className="role">
      <div className="about-section-mission">
      <div className="container">
        <div className="row">
        <div className="col-md-3">
          <div className="left-mission">
        <img src={require('./../assets/mission.png')} alt=""/>    
        </div>
          </div>
          <div className="col-md-3">
          <h2>Our<br/>Mission <br/>& Vision</h2>
          </div>
        <div className="col-md-6">
        <p>Our mission is to be recognized as the best hospitality management company in India and cultivating long-term relationships with  our clients to build a bond and integrity and achieve maximum Profit from their operations.</p>
      </div>
      </div>
      </div>
      </div>
    </div>
    <div className="why_work-withus">
      <div className="container">
      <div className="row">
      <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12 order_2 bg1">
          <div className="left-asset">
            <h2 className="wrapper-heading">Our<span className="content-text"> Strengths</span></h2>
          <ul className="diamond">
            <li><p className="wrapper-text-sales">We understand the business of managing hotels.</p></li>
            <li><p className="wrapper-text-sales">Great understanding of sales and marketing efforts required to position a hotel in the competitive marketplace.</p></li>
            <li><p className="wrapper-text-sales">We collaborate and not just command.</p></li>
            <li><p className="wrapper-text-sales">We promised to give you profit.</p></li>            
            <li><p className="wrapper-text-sales">Cloud10 also partners with subject matters experts in the field of engineering, procurement, human resource and internal controls which allows for providing only the highest quality advice to its clients.</p></li>  
            <li><p className="wrapper-text-sales">Our interests are aligned with that of the ownership of the hotel.</p></li>
          </ul>
          </div>
        </div>
      </div>
      </div>
    </div>  
   </>
  );
}; 
export default About;