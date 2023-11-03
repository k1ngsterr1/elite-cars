import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Popup from "reactjs-popup";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./styles/reviews-styles.css";
import { Slide } from "react-awesome-reveal";

{
  /* <a href="https://ibb.co/Tt6dZ3x"><img src="https://i.ibb.co/9W6SJ5k/review.png" alt="review" border="0"></a> */
}
{
  /* <a href="https://imgbb.com/"><img src="https://i.ibb.co/ZmwJ99j/review-2.png" alt="review-2" border="0"></a> */
}
{
  /* <a href="https://imgbb.com/"><img src="https://i.ibb.co/bJ0qsBY/review-3.png" alt="review-3" border="0"></a> */
}

interface ReviewsProps {
  clientName: string;
  clientReview: string;
  clientPhoto?: string;
  onClickFunction: any;
}

const ReviewsTab: React.FC<ReviewsProps> = ({
  clientName,
  clientReview,
  onClickFunction,
}) => {
  return (
    <div className="review-tab">
      <div className="review-upper">
        <div className="review-name">
          <span className="client-name">{clientName}</span>
        </div>
        <button className="screenshot" onClick={onClickFunction}>
          Screenshot
        </button>
      </div>
      <div className="rating"></div>
      <p className="client-review">{clientReview}</p>
    </div>
  );
};

const ReviewsScreen = () => {
  const [currentScreenshot, setCurrentScreenshot] = useState<string | null>(
    null
  );
  const [screenshotOpen, setScreenshotOpen] = useState(false);

  const handleOpenScreenshot = (screenshotUrl: any) => {
    setCurrentScreenshot(screenshotUrl);
    setScreenshotOpen(true);
  };

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
              onClickFunction={() =>
                handleOpenScreenshot("https://i.ibb.co/9W6SJ5k/review.png")
              }
              clientName="Client"
              clientReview="I have a great experience! Thanks for the great customer service you provide your clients! Highly recommend this company!"
            ></ReviewsTab>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsTab
              onClickFunction={() =>
                handleOpenScreenshot("https://i.ibb.co/bJ0qsBY/review-3.png")
              }
              clientName="Client"
              clientReview="You exceeded my expectations during my recent trip to Chicago. The driver was friendly and knowledgeable, providing great recommendations for places to visit in the city. The Ford Expedition was spacious and well-maintained. I will definitely be using Elite Arrival for my future trips to Chicago"
            ></ReviewsTab>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsTab
              onClickFunction={() =>
                handleOpenScreenshot("https://i.ibb.co/ZmwJ99j/review-2.png")
              }
              clientName="Client"
              clientReview="Elite Arrival truly knows how to provide a first-class experience. The driver was courteous and professional, making sure I had everything I needed during my ride to downtown Chicago. The Ford Expedition was in pristine condition and offered a smooth and enjoyable ride"
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
              onClickFunction={() =>
                handleOpenScreenshot("https://i.ibb.co/9W6SJ5k/review.png")
              }
              clientName="Client"
              clientReview="I have a great experience! Thanks for the great customer service you provide your clients! Highly recommend this company!"
            ></ReviewsTab>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsTab
              onClickFunction={() =>
                handleOpenScreenshot("https://i.ibb.co/bJ0qsBY/review-3.png")
              }
              clientName="Client"
              clientReview="You exceeded my expectations during my recent trip to Chicago. The driver was friendly and knowledgeable, providing great recommendations for places to visit in the city. The Ford Expedition was spacious and well-maintained. I will definitely be using Elite Arrival for my future trips to Chicago"
            ></ReviewsTab>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsTab
              onClickFunction={() =>
                handleOpenScreenshot("https://i.ibb.co/ZmwJ99j/review-2.png")
              }
              clientName="Client"
              clientReview="Elite Arrival truly knows how to provide a first-class experience. The driver was courteous and professional, making sure I had everything I needed during my ride to downtown Chicago. The Ford Expedition was in pristine condition and offered a smooth and enjoyable ride"
            ></ReviewsTab>
          </SwiperSlide>
        </Swiper>
      </div>
      <Popup
        open={screenshotOpen}
        onClose={() => setScreenshotOpen(false)}
        contentStyle={{ padding: "0", border: "none" }}
        overlayStyle={{ background: "rgba(0,0,0,0.7)" }}
      >
        <Slide direction="up">
          {currentScreenshot && (
            <img src={currentScreenshot} alt="Screenshot" />
          )}
        </Slide>
      </Popup>
    </section>
  );
};

export default ReviewsScreen;
