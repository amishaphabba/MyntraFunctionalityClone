import { FaFacebookSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" Footercontainer">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Online Shopping</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#men" className="nav-link p-0 text-muted">Men</a></li>
              <li className="nav-item mb-2"><a href="#women" className="nav-link p-0 text-muted">Women</a></li>
              <li className="nav-item mb-2"><a href="#kids" className="nav-link p-0 text-muted">Kids</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home & Living</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Gift Cards</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Customer Policies</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact Us</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQ</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">T&C</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terms Of Use</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Track Orders</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Shipping</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Cancellation</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Returns</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Privacy Policy</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Grievance Officer </a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3 " >
            <h5>UseFul Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Blog</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Careers</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Site Map</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Whitehat</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Claertrip</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-4 mb-3 ">
            <h5>EXPERIENEC MYNTRA APP ON MOBILE</h5>
            <div className="footerImages">
              <a href=""><img src="images/footer/googlePlay.png" alt="" /></a>
              <a href=""> <img src="images/footer/appStore.jpg" alt="" /></a>
            </div>

            <div className="keepintouch">
            <h5 >Keep In Touch</h5>
            <div>
              <a className="text-body-secondary" href="#"><FaFacebookSquare /></a>
              <a className="text-body-secondary" href="#"><SiInstagram /></a>
              <a className="text-body-secondary" href="#"><FaTwitter /></a>
            </div>
          </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2022 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
          </ul> 
        </div>
      </footer>
    </div>
  )
}

export default Footer