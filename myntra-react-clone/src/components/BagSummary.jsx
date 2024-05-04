
const BagSummary = ({finalBagItems}) =>{

//    Data can be fetched directly from store or Can be passed as prop from bag
//    const bag =  useSelector((Store) => Store.bag)
//    const items = useSelector((store) => store.items)
//    const finalBagItems = items.filter((item) => bag.indexOf(item.id) >= 0)

   let totalMrp = 0;
   let discount = 0;
   let finalAmount = 0;
   finalBagItems.forEach(element => {
    totalMrp += element.original_price
    finalAmount += element.original_price - Math.ceil(element.original_price * (
        element.discount_percentage/100))
    discount += Math.ceil(element.original_price * (
        element.discount_percentage/100))
   });

   return  <div className="summaryContainer">
        <p className="summaryHeading">Price Details ({finalBagItems.length})</p>
        <div>
            <span>Total MRP</span> 
            <span className="summaryAmount">₹{totalMrp}</span>
        </div>
        <div>
            <span>Discount on MRP</span> 
            <span className="summaryAmount">-₹{discount}</span>
        </div>
        <div>
            <span>Convenience Fee</span> 
            <span className="summaryAmount">₹{finalBagItems.length>0 ? 99 : 0}</span>
        </div>
        <hr />
        <div style={{fontWeight: "bold"}}>
            <span>Total Amount</span> 
            <span className="summaryAmount">₹{finalAmount+99}</span>
        </div>
        <button>PLACE ORDER</button>

    </div>
}

export default BagSummary