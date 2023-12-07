import React from 'react';
import banner from '../../assets/img/banner_bg.jpg'

const Events = () => {
  return (
    <>
    <div class="inner_pages_banner position-absolute top-0 start-0"></div>
<div class="baner_text d-flex sections_padding pt-0 align-items-center text-center">
    <div class="container">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        <h1>The Nanny Line</h1>
    </div>
</div>
<div class="sections_padding mt-5">
    <div class="d-flex mt-4 flex-wrap">
        <div class="events_image p-5 d-flex align-items-center justify-content-center text-start position-relative">
            <h1 class="display-1 fw-700">A BEAUTIFUL NEW CONCEPT OF BABYSITTING</h1>                                                                                                                                                                                                                                                                                                                                                                                                                            
        </div>
        <div class="events_info px-3 py-5 px-lg-5">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            <h3 class="fw-700 mb-5">What is Playdate?</h3>
            <p class="fw-700 mb-4">In collaboration with the best kindergartens in Barcelona: A wonderful new playdate with qualified, experienced, multilingual nannies provided by The Nanny Line. We have created a wonderful new event where you can feel safe leaving your children with professional, experienced and multilingual nannies to offer your child the chance to learn and play whilst you take a well-deserved break.</p>
                <p class=" mb-4">A wonderful new playdate with qualified, experienced, multilingual nannies provided by The Nanny Line. We have created a wonderful new playdate with the help of The Nanny Line where you can feel safe leaving your children with professional, experienced and multilingual nannies to offer your child the chance to learn and play whilst you take a well-deserved break.</p>
                <p class="mb-4">This is your opportunity to give your children a chance to speak and hear both English and Spanish with our fantastic nannies. You don’t need to worry about a thing! You can take the time to relax and have a rest and we will entertain them with games and activities to engage their attention.</p>
        </div>
    </div>
</div>
<div class="sections_padding secondry_bg">
    <div class="container">
        <h1 class="mb-4 pb-3 text-center"><span class="position-relative">What do we offer with Playdate?
        </span></h1>
        <p class="text-center">Get to know more about our brand new concept</p>
        <div class="row mt-5">
            <div class="col-lg-3 col-sm-6 mb-3 text-center">
                <div class="event_circle mb-4 mx-auto d-flex align-items-center justify-content-center">
                    <i class="fas fa-comment-dots"></i>
                </div>
                <h4 class="mb-4 fw-700">Learn English &amp; Spanish</h4>
                <p>During Playdate, your children will have the opportunity to learn English and Spanish!</p>
            </div>
            <div class="col-lg-3 col-sm-6 mb-3 text-center">
                <div class="event_circle mb-4 mx-auto d-flex align-items-center justify-content-center">
                    <i class="fas fa-user-clock"></i>
                </div>
                <h4 class="mb-4 fw-700">4 hours of babysitting</h4>
                <p>The price includes a total of 4 hours professional babysitting with games and toys!</p>
            </div>
            <div class="col-lg-3 col-sm-6 mb-3 text-center">
                <div class="event_circle mb-4 mx-auto d-flex align-items-center justify-content-center">
                    <i class="fas fa-heart"></i>
                </div>
                <h4 class="mb-4 fw-700">Profession &amp; Love</h4>
                <p>Our nannies professionals and experienced for entertain your loved ones!</p>
            </div>
            <div class="col-lg-3 col-sm-6 mb-3 text-center">
                <div class="event_circle mb-4 mx-auto d-flex align-items-center justify-content-center">
                    <i class="fas fa-keyboard"></i>
                </div>
                <h4 class="mb-4 fw-700">Enjoy your ME-TIME</h4>
                <p>Every parent deserves some free time alone. Enjoy yourself during we take care of your beloved ones.!</p>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid sections_padding">
    <div id="carouselExampleFade" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={banner} class="d-block w-100" alt="slider"/>
          </div>
          <div class="carousel-item">
            <img src={banner} class="d-block w-100" alt="slider"/>
          </div>
          <div class="carousel-item">
            <img src={banner} class="d-block w-100" alt="slider"/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
</div>
    </>
  )
}

export default Events