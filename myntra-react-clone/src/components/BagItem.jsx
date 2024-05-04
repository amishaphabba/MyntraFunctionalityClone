import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { BagActions } from "../store/BagSlice";

const BagItem = ({item}) => {

    const dispatch = useDispatch()

    const handleRemoveFromBag = () => {
        dispatch(BagActions.removeFromBag(item.id))
    }

    return <div className="bagItem position-relative">
        <div className="bagCardImage">
            <img src={item.image} alt="" />
        </div>
        <div className="bagCardContent">
            <h4 className="brandName">{item.company}</h4>
            <p className="brandTitle" >{item.item_name}</p>
            <p>
                <span style={{ fontWeight: "bold" }}>Rs {item.current_price} </span>
                <span style={{ textDecoration: "line-through" }}>Rs {item.original_price}</span>
                <span style={{ color: "orange" }}>({item.discount_percentage}% Off )</span>
            </p>
            <div style={{marginTop: "10px"}}>
                <p> <span style={{ fontWeight: "bold" }} > 14 days</span> return available</p>
                <p>delivery by <span style={{ color: "green" }}>10 oct 2023</span></p>
            </div>
        </div>
        <div className="position-absolute top-0" style={{right: "1%", cursor: "pointer" }}
        onClick={handleRemoveFromBag}>
        <IoClose />
        </div>
    </div>

}

export default BagItem