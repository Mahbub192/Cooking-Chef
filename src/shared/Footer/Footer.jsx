import { Link } from "react-router-dom";
import chef from '../../assets/chef.png'

const Footer = () => {
  return (
    <div className=" mt-16 p-10 bg-base-200 text-base-content">
      <footer className="footer container mx-auto">
        <div>
          <div>
          <img className="w-36 " src={chef} alt="" />
          </div>
          <p>
            <span className="text-lg md:text-xl font-bole">Cooking Chef</span>
            <br />
            <span className=" md:text-lg">Develop By Mahbub Ali</span>
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Food</Link>
          <Link className="link link-hover">Latest Food</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Community</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Chef</Link>
          <Link className="link link-hover">About out chef</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
