import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { BagActions } from "../store/BagSlice";

const ItemCard = ({ item }) => {
    
    const dispatch = useDispatch()
    const bag = useSelector((Store) => Store.bag)
    const elemFound = bag.indexOf(item.id) >=0;
    // console.log(bag)

    const handleAddToBag = () => {
        dispatch(BagActions.addToBag(item.id))
    }

    const handleRemoveFromBag = () =>{
        dispatch(BagActions.removeFromBag(item.id))
    }

    return (
        <div className="cardContainer">
            <div className="cardImage">
                <img src={item.image} alt="" />
                <span style={{ paddingLeft: "10px" }}>{item.rating.stars}⭐ | {item.rating.count}k</span>
            </div>
            <div className="cardContent">
                <h4 className="brandName">{item.company}</h4>
                <p className="brandTitle" >{item.item_name}</p>
                <p>Rs {item.current_price} <span style={{ textDecoration: "line-through" }}>Rs {item.original_price}</span> <span style={{ color: "orange" }}>({item.discount_percentage}% Off )</span> </p>
                {elemFound ? <button className="removeButton" onClick= {handleRemoveFromBag}><b>Remove From Bag</b>
                </button> : <button className="" onClick= {handleAddToBag}><b>Add To Bag</b>
                </button> }
            </div>
        </div>
    )
}

export default ItemCard;