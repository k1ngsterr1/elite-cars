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
      <main className="content">
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
              clientReview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa"
            ></ReviewsTab>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsTab
              clientName="Client"
              clientReview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa"
            ></ReviewsTab>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsTab
              clientName="Client"
              clientReview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa"
            ></ReviewsTab>
          </SwiperSlide>
        </Swiper>
      </main>
    </section>
  );
};

export default ReviewsScreen;
