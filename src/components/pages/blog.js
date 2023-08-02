import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import image1 from '../../assets/blog 1.png'
import image2 from '../../assets/blog 2.png'
import image3 from '../../assets/blog 3.png'
import ava from '../../assets/avatar.jpg'
import ava1 from '../../assets/avatar2.jpg'
import ava2 from '../../assets/avatar 3.jpg'
import { Link, useNavigate } from 'react-router-dom';
import BlogAI from '../pages/blog1'


function blog() {
    // const navigate = useNavigate();
    // const handleClick = () => navigate('/blogAI');
  return (
    <>
        <section class="bg-light" id="blog">
    <div class="container">
       {/* <!--Row--> */}
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="heading-area mx-570 pb-lg-5 mb-5">
                    <span class="sub-title">We are Threefury</span>
                    <h2 class="title mb-0">Our <span class="alt-color js-rotating">latest blogs,recent news</span> will
                        keep
                        everyone updated</h2>
                </div>
            </div>
        </div>
        {/* <!--Row--> */} 
        <div class="row wow fadeInUp">
         {/* <!--News Item--> */} 
            <div class="col-lg-4">
                <div class="news-item">
                    <img alt="image" class="news-img" src={image1} />
                    <div class="news-text-box">
                        <span class="date main-color">October 29, 2020</span>
                        
                        {/* <Link to='/blog1' target="_blank"> */}
                        <h4 class="news-title">Open AI vs Software Engineer</h4>
                        {/* </Link> */}
                        
                        
                        <p class="para">OpenAI is a research organization that focuses on the development of artificial intelligence...</p>
                        <a class="author d-flex align-items-center" href="javascript:void(0);">
                            <img alt="image" class="author-img bg-blue" src={ava}/>
                            <h5 class="author-name">Hena Sword</h5>
                        </a>
                        {/* <button onClick={handleClick}> Learn more </button> */}
                    </div>
                </div>
            </div>
            {/* <!--News Item--> */}
            <div class="col-lg-4">
                <div class="news-item">
                    <img alt="image" class="news-img" src={image2} />
                    <div class="news-text-box">
                        <span class="date main-color">October 29, 2020</span>
                        <a href="agency/blog-list.html"><h4 class="news-title">Top 10 Microservices Design</h4></a>
                        <p class="para">The developers should know what Microservice is and why the Microservice architecture arises...</p>
                        <a class="author d-flex align-items-center" href="javascript:void(0);">
                            <img alt="image" class="author-img bg-purple" src={ava1}/>
                            <h5 class="author-name">David Villas</h5>
                        </a>
                    </div>
                </div>
            </div>
            {/* <!--News Item--> */}
            <div class="col-lg-4">
                <div class="news-item">
                    <img alt="image" class="news-img" src={image3}/>
                    <div class="news-text-box">
                        <span class="date main-color">October 29, 2020</span>
                        <a href="javascript:void(0);"><h4 class="news-title">Chandrayaan 3 Mission (LVM3-M4)</h4></a>
                        <p class="para">Chandrayaan-3, India’s third lunar exploration mission was launched on Friday, in the fourth...</p>
                        <a class="author d-flex align-items-center" href="javascript:void(0);">
                            <img alt="image" class="author-img bg-pink" src={ava2}/>
                            <h5 class="author-name">Jhon Walker</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default blog
