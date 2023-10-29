import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";

const Policy = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="screen">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
      {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
      <div className="content mt64">
        <h1 className="heading-s">
          <span className="orange"> Our Policy</span>
        </h1>
        <p className="paragraph text-center mt32">
          Welcome to the "Elite Arrival" page of Elite Car Services. At Elite
          Car Services, we're committed to protecting and respecting the privacy
          of our valued clients and visitors. This Privacy & Policy page
          outlines how we manage, store, and use the personal information you
          share with us.
        </p>
        <h3 className="heading-third mt64">
          <span className="orange">Information We Collect</span>
        </h3>
        <p className="paragraph text-center mt16">
          When you interact with the "Elite Arrival" section or make use of our
          services, we may collect:
        </p>
        <p className="paragraph text-center mt16">
          <strong>
            Personal identification information (Name, contact number, email
            address, etc.)
          </strong>
          <br />
          <br />
          <strong>
            Booking details (Destination, pickup location, dates, etc.)
          </strong>
          <br />
          <br />
          <strong>
            Payment details (For processing transactions only; we do not store
            credit card details)
          </strong>
          <br />
          <br />
          <strong>Feedback and reviews related to our service.</strong>
        </p>
        <h4 className="heading-third mt64">Sharing of Your Information</h4>
        <p className="paragraph text-center mt16">
          Your trust is paramount to us. We do not sell, trade, or rent your
          personal identification information to third parties. We may share
          aggregated demographic information, not linked to any personal
          identification information, with our business partners and trusted
          affiliates for operational purposes.
        </p>
        <h5 className="heading-third mt64">Third-party Websites:</h5>
        <p className="paragraph text-center mt16">
          Our website may contain links to external sites. Please note that we
          do not control and are not responsible for the content or privacy
          practices of such sites. We encourage our users to read the privacy
          statements of any other sites that collect personal information.
        </p>
        <h6 className="heading-third mt64">Updates to This Policy:</h6>
        <p className="paragraph text-center mt16">
          Elite Car Services reserves the right to update this privacy policy at
          any time. When we do, we will revise the updated date at the bottom of
          this page. We encourage users to frequently check this page for any
          changes to stay informed about how we are helping to protect the
          personal information we collect.
        </p>
      </div>
      <div className="content-pc column align-center justify-center mt128">
        {" "}
        <h1 className="heading-s">
          <span className="orange"> Our Policy</span>
        </h1>
        <p className="paragraph text-center w60 mt32">
          Welcome to the "Elite Arrival" page of Elite Car Services. At Elite
          Car Services, we're committed to protecting and respecting the privacy
          of our valued clients and visitors. This Privacy & Policy page
          outlines how we manage, store, and use the personal information you
          share with us.
        </p>
        <h3 className="heading-third mt64">
          <span className="orange">Information We Collect</span>
        </h3>
        <p className="paragraph text-center w60 mt16">
          When you interact with the "Elite Arrival" section or make use of our
          services, we may collect:
        </p>
        <p className="paragraph text-center mt16">
          <strong>
            Personal identification information (Name, contact number, email
            address, etc.)
          </strong>
          <br />
          <br />
          <strong>
            Booking details (Destination, pickup location, dates, etc.)
          </strong>
          <br />
          <br />
          <strong>
            Payment details (For processing transactions only; we do not store
            credit card details)
          </strong>
          <br />
          <br />
          <strong>Feedback and reviews related to our service.</strong>
        </p>
        <h4 className="heading-third mt64">Sharing of Your Information</h4>
        <p className="paragraph text-center w60 mt16">
          Your trust is paramount to us. We do not sell, trade, or rent your
          personal identification information to third parties. We may share
          aggregated demographic information, not linked to any personal
          identification information, with our business partners and trusted
          affiliates for operational purposes.
        </p>
        <h5 className="heading-third mt64">Third-party Websites:</h5>
        <p className="paragraph text-center w60 mt16">
          Our website may contain links to external sites. Please note that we
          do not control and are not responsible for the content or privacy
          practices of such sites. We encourage our users to read the privacy
          statements of any other sites that collect personal information.
        </p>
        <h6 className="heading-third mt64">Updates to This Policy:</h6>
        <p className="paragraph text-center w60 mt16">
          Elite Car Services reserves the right to update this privacy policy at
          any time. When we do, we will revise the updated date at the bottom of
          this page. We encourage users to frequently check this page for any
          changes to stay informed about how we are helping to protect the
          personal information we collect.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Policy;
