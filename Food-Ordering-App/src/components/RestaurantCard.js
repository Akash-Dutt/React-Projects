import { CDN_URL } from "../utils/constants";

//RestaurantCard Component
const RestaurantCard = (props) => {
    const {resData} = props;
    const{cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    const{deliveryTime} = resData?.info?.sla;
    return(
        <div className="res-card">
            <img className="res-logo" 
                 src={CDN_URL + cloudinaryImageId}
                 alt="res-logo"
            />
            <h4>{name}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>★ {avgRating}</h5>
            <h5>{deliveryTime} MINS</h5>
            <h5>{costForTwo}</h5>
        </div>
    )
};

export default RestaurantCard;