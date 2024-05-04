import ItemCard from "../components/ItemCard"
import { useSelector } from "react-redux"

const Home = () => {

    const items = useSelector((store) => store.items)

    return <div className="homeItemContainer">
        {items.map((item) => <ItemCard key={item.id} item={item}></ItemCard>)}
    </div>

}

export default Home