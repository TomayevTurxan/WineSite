import "./index.scss";
import { FaFacebook, FaTwitter ,FaInstagram} from "react-icons/fa6";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-head">
          <svg
          className="footer-head-logo"
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="240"
            viewBox="0 0 150 240"
          >
            <path
              fill="#A61A30"
              d="M75 182.668c9.12 0 16.685 7.454 16.685 16.665C91.685 208.443 84.12 216 75 216c-9.223 0-16.685-7.556-16.685-16.667 0-9.211 7.462-16.665 16.685-16.665zm18.54-33.333c9.223 0 16.685 7.556 16.685 16.665 0 9.214-7.462 16.666-16.685 16.666-9.224 0-16.686-7.452-16.686-16.666 0-9.109 7.462-16.665 16.686-16.665zM71.91 166c0 9.214-7.462 16.666-16.685 16.666-9.12 0-16.686-7.452-16.686-16.666 0-9.109 7.566-16.665 16.686-16.665 9.223 0 16.685 7.556 16.685 16.665zm24.72-33.333c0-9.11 7.461-16.666 16.684-16.666 9.224 0 16.686 7.555 16.686 16.666 0 9.213-7.462 16.666-16.686 16.666-9.223 0-16.685-7.453-16.685-16.666zM75 149.333c-9.223 0-16.685-7.453-16.685-16.666C58.315 123.556 65.777 116 75 116c9.12 0 16.685 7.555 16.685 16.666 0 9.213-7.566 16.666-16.685 16.666zM36.685 116c9.12 0 16.686 7.555 16.686 16.666 0 9.213-7.566 16.666-16.686 16.666-9.223 0-16.685-7.453-16.685-16.666C20 123.556 27.462 116 36.685 116zM93.54 82.667c9.223 0 16.685 7.58 16.685 16.718 0 9.241-7.462 16.614-16.685 16.614-9.224 0-16.686-7.373-16.686-16.614 0-9.137 7.462-16.718 16.686-16.718zM55.225 116c-9.224 0-16.686-7.373-16.686-16.614 0-9.137 7.462-16.718 16.686-16.718 9.223 0 16.685 7.581 16.685 16.718 0 9.241-7.462 16.614-16.685 16.614zm36.46-50c0 9.11-7.462 16.666-16.685 16.666-9.12 0-16.685-7.557-16.685-16.666 0-9.212 7.565-16.665 16.685-16.665 9.223 0 16.685 7.453 16.685 16.665zm1.854-16.667c-9.12 0-16.685-7.557-16.685-16.666C76.854 23.453 84.419 16 93.539 16c9.224 0 16.686 7.453 16.686 16.666 0 9.109-7.462 16.666-16.686 16.666z"
            ></path>
          </svg>
          <div className="footer-head-links">
            <ul className="footer-links">
              <li>App</li>
              <li>About</li>
              <li>Contact</li>
              <li>Gifting</li>
              <li>Press</li>
              <li>Terms of Use</li>
              <li>Sitenap</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Sitemap</li>
              <li>Content Policy</li>
              <li>Terms of Use</li>
              <li>Merchants</li>
              <li>Gifting</li>
              <li>Wine News</li>
              <li>Content Policy</li>
            </ul>
          </div>
          <div className="footer-head-networks">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
            <span>Vivino 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
