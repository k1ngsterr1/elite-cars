import Popup from "reactjs-popup";
import { Slide } from "react-awesome-reveal";
import "./styles/popup.css";

interface PopupProps {
  closeMenu: any;
  open: boolean;
}

const ThanksPopup: React.FC<PopupProps> = ({ open, closeMenu }) => {
  return (
    <>
      <Popup
        open={open}
        modal
        nested
        className="popup-container"
        position="center center"
        overlayStyle={{ background: "rgba(0,0,0,0.7)" }}
      >
        <Slide direction="up" className="modal-animation">
          <div className="modal-window">
            <div className="modal-window-content">
              <span className="modal-text orange">
                Thank you for your request!
              </span>
              <span className="paragraph-text">We will call you soon</span>
              <button className="modal-btn" onClick={closeMenu}>
                Close
              </button>
            </div>
          </div>
        </Slide>
      </Popup>
    </>
  );
};

export default ThanksPopup;
