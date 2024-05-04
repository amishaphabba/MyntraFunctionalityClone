import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header = () => {

    const bag = useSelector((store)=> store.bag)
    // console.log(bag.length)

    return (
        <header className="p-3 bg-white text-black HeaderCss">
                <div className="innerheader ">
                   <Link to="/"> 
                   <img className="logo" src="MyntraLogo.jpg"alt="" />
                   </Link>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ulLinks" >
                        <li><a href="#" className="nav-link px-2">MEN</a></li>
                        <li><Link to="/women" className="nav-link px-2">WOMEN</Link></li>
                        <li><a href="#" className="nav-link px-2">KIDS</a></li>
                        <li><a href="#" className="nav-link px-2">HOME&LIVING</a></li>
                        <li><a href="#" className="nav-link px-2">BEAUTY</a></li>
                        <li><a href="#" className="nav-link px-2">STUDIO <sup style={{color:"#e6162a"}}>NEW</sup> </a></li>
                    </ul>

                    <form className="col-12 col-lg-4 mb-3 mb-lg-0 ">
                        <span style={{cursor:"pointer"}} onClick={()=>{}} ><CiSearch /></span>
                        <input type="search" className="form-control form-control-dark" placeholder= "Search for products brands and more" aria-label="Search" />
                    </form>

                    <div className="text-end navigation">
                        <Link  className=" navigation-link me-2 text-dark">
                        <span> <MdOutlinePersonOutline /> </span>
                        Profile</Link>
                        <Link className=" navigation-link me-2 text-dark"> 
                        <span><IoMdHeartEmpty /> </span> 
                        Wishlist</Link>
                        <Link to="/bag" className=" navigation-link me-2 text-dark position-relative">
                        <span> <IoBagHandleOutline /> </span>
                        <span id="bagBadge" className="position-absolute start-100 translate-middle badge rounded-circle bg-danger bagBadge">
                       {bag.length}</span>
                        Bag</Link> 
                    </div>
                </div>
        </header>
    )

}

export default Header