import BagSummary from "./BagSummary"
import BagItem from "./BagItem"
import { useSelector } from "react-redux"
import EmptyBag from "./EmptyBag"

const Bag = () => {

    const bag = useSelector((store) => store.bag)
    const items = useSelector((store) => store.items)
    const finalBagItems = items.filter(item => bag.indexOf(item.id) >= 0)
    // console.log("finalBagItems", finalBagItems)

    return <>
        {bag.length > 0 ?
            <div className="bagPage">
                <div className="bagItemContainer">
                    {finalBagItems.map((item) => <BagItem key={item.id} item={item}></BagItem>)}
                </div>
                <BagSummary finalBagItems={finalBagItems}></BagSummary>
            </div>
            : 
            <EmptyBag></EmptyBag>
            
        }</>
}

export default Bag