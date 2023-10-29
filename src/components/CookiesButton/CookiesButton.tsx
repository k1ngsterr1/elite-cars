import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./styles/cookies.css";

const COOKIE_NAME = "cookie_accept";

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const isCookieSet = Cookies.get(COOKIE_NAME);
    if (!isCookieSet) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set(COOKIE_NAME, "accepted", { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <p className="cookie-text">
        We use cookies to enhance your experience. By continuing to visit this
        site you agree to our use of cookies.
      </p>
      <button className="accept-button" onClick={acceptCookies}>
        Accept
      </button>
    </div>
  );
};

export default CookieBanner;
