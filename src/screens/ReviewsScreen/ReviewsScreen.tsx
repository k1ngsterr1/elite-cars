import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./styles/reviews-styles.css";

interface ReviewsProps {
  clientName: string;
  clientReview: string;
  clientPhoto?: string;
}

const ReviewsTab: React.FC<ReviewsProps> = ({ clientName, clientReview }) => {
  return (
    <div className="review-tab">
      <div className="review-upper">
        <div className="review-name">
          <div className="circle">a</div>
          <span className="client-name">{clientName}</span>
        </div>
      </div>
      <div className="rating"></div>
      <p className="client-review">{clientReview}</p>
    </div>
  );
};

const ReviewsScreen = () => {
  return (
    <section className="screen">
      <div className="content">
        <h2 className="heading-s w60 text-center mt64">
          Reviews from <span className="orange">Our Clients</span>
        </h2>
        <Swiper
          className="reviews-swiper mt64"
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={true}
          centeredSlides={true}
          pagination={false}
          style={
            {
              "--swiper-navigation-color": "#FF5722",
            } as React.CSSProperties
          }
        >
          <SwiperSlide>
            <ReviewsTab
              clientName="Client"
              clientReview="Elite Arrival exceeded my expectations during my recent trip to Chicago. The driver was friendly and knowledgeable, providing great recommendations for places to visit in the city. The Ford Expedition was spacious and well-maintained. I will definitely be using Elite Arrival for my future trips to Chicago"
            ></ReviewsTab>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsTab
              clientName="Client"
              clientReview="I have a great experience! Thanks for the great customer service you provide your clients! Highly recommend this company!"
            ></ReviewsTab>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsTab
              clientName="Client"
              clientReview="Elite Arrival truly knows how to provide a first-class experience. The driver was courteous and professional, making sure I had everything I needed during my ride to downtown Chicago. The Ford Expedition was in pristine condition and offered a smooth and enjoyable ride"
            ></ReviewsTab>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsTab
              clientName="Client"
              clientReview="You exceeded my expectations during my recent trip to Chicago. The driver was friendly and knowledgeable, providing great recommendations for places to visit in the city. The Ford Expedition was spacious and well-maintained. I will definitely be using Elite Arrival for my future trips to Chicago"
            ></ReviewsTab>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="content-pc column">
        <h2 className="heading-s  text-center mt64">
          Reviews from <span className="orange">Our Clients</span>
        </h2>
        <Swiper
          className="reviews-swiper mt64"
          slidesPerView={3}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={true}
          centeredSlides={false}
          pagination={false}
          style={
            {
              "--swiper-navigation-color": "#FF5722",
            } as React.CSSProperties
          }
        >
          <SwiperSlide>
            <ReviewsTab
              clientName="Client"
              clientReview="Elite Arrival exceeded my expectations during my recent trip to Chicago. The driver was friendly and knowledgeable, providing great recommendations for places to visit in the city. The Ford Expedition was spacious and well-maintained. I will definitely be using Elite Arrival for my future trips to Chicago"
            ></ReviewsTab>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsTab
              clientName="Client"
              clientReview="I have a great experience! Thanks for the great customer service you provide your clients! Highly recommend this company!"
            ></ReviewsTab>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsTab
              clientName="Client"
              clientReview="Elite Arrival truly knows how to provide a first-class experience. The driver was courteous and professional, making sure I had everything I needed during my ride to downtown Chicago. The Ford Expedition was in pristine condition and offered a smooth and enjoyable ride"
            ></ReviewsTab>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsTab
              clientName="Client"
              clientReview="You exceeded my expectations during my recent trip to Chicago. The driver was friendly and knowledgeable, providing great recommendations for places to visit in the city. The Ford Expedition was spacious and well-maintained. I will definitely be using Elite Arrival for my future trips to Chicago"
            ></ReviewsTab>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsScreen;
