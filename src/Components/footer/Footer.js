import classes from "./footer.module.css";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className={classes.footerContainer}>
        <div className={classes.logo}>
          <span className={classes.bold}>book</span>shelf
        </div>

        <div className={classes.lists}>
          <ul>
            <li>company</li>
            <li>about us</li>
            <li>careers</li>
            <li>terms</li>
            <li>privacy</li>
            <li>interest based ads</li>
            <li>ad preferences</li>
            <li>help</li>
          </ul>
          <ul>
            <li>work with us</li>
            <li>authors</li>
            <li>advertise</li>
            <li>authors & ads blog</li>
            <li>api</li>
          </ul>
        </div>
        <div className={classes.social}>
          <p>Connect</p>
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebook" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
