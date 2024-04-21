import RestaurantCard from "./RestaurantCard";
import RestaurantList from "../utils/mockData";
import {useState} from "react";


const Body = () => {
    //Normal JS Variable
    // let ListOfRestaurants = [
    // {
    //     "info": {
    //     "id": "10576",
    //     "name": "Pizza Hut",
    //     "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    //     "locality": "Koramangala",
    //     "areaName": "Koramangala",
    //     "costForTwo": "₹350 for two",
    //     "cuisines": [
    //         "Pizzas"
    //     ],
    //     "avgRating": 4.1,
    //     "parentId": "721",
    //     "avgRatingString": "4.1",
    //     "totalRatingsString": "10K+",
    //     "sla": {
    //         "deliveryTime": 40,
    //         "lastMileTravel": 0.6,
    //         "serviceability": "SERVICEABLE",
    //         "slaString": "40-45 mins",
    //         "lastMileTravelString": "0.6 km",
    //         "iconType": "ICON_TYPE_EMPTY"
    //     },
    //     "availability": {
    //         "nextCloseTime": "2024-04-20 04:00:00",
    //         "opened": true
    //     },
    //     "badges": {
            
    //     },
    //     "isOpen": true,
    //     "type": "F",
    //     "badgesV2": {
    //         "entityBadges": {
    //         "imageBased": {
                
    //         },
    //         "textBased": {
                
    //         },
    //         "textExtendedBadges": {
                
    //         }
    //         }
    //     },
    //     "aggregatedDiscountInfoV3": {
    //         "header": "50% OFF",
    //         "subHeader": "UPTO ₹100"
    //     },
    //     "differentiatedUi": {
    //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //         "differentiatedUiMediaDetails": {
    //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //         "lottie": {
                
    //         },
    //         "video": {
                
    //         }
    //         }
    //     },
    //     "reviewsSummary": {
            
    //     },
    //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     "restaurantOfferPresentationInfo": {
            
    //     }
    //     },
    //     "analytics": {
    //     },
    //     "cta": {
    //     "link": "https://www.swiggy.com/restaurants/pizza-hut-koramangala-bangalore-10576",
    //     "type": "WEBLINK"
    //     }
    // },
    // {
    //     "info": {
    //     "id": "390057",
    //     "name": "NH1 Bowls - Highway To North",
    //     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/11/e9dd2067-6b5b-4408-b146-11d648346455_390057.jpg",
    //     "locality": "6th Block",
    //     "areaName": "Koramangala",
    //     "costForTwo": "₹250 for two",
    //     "cuisines": [
    //         "North Indian",
    //         "Punjabi",
    //         "Home Food"
    //     ],
    //     "avgRating": 4.6,
    //     "parentId": "22452",
    //     "avgRatingString": "4.6",
    //     "totalRatingsString": "500+",
    //     "sla": {
    //         "deliveryTime": 35,
    //         "lastMileTravel": 0.6,
    //         "serviceability": "SERVICEABLE",
    //         "slaString": "30-40 mins",
    //         "lastMileTravelString": "0.6 km",
    //         "iconType": "ICON_TYPE_EMPTY"
    //     },
    //     "availability": {
    //         "nextCloseTime": "2024-04-20 02:00:00",
    //         "opened": true
    //     },
    //     "badges": {
    //         "textExtendedBadges": [
    //         {
    //             "iconId": "guiltfree/GF_Logo_android_3x",
    //             "shortDescription": "options available",
    //             "fontColor": "#7E808C"
    //         }
    //         ]
    //     },
    //     "isOpen": true,
    //     "type": "F",
    //     "badgesV2": {
    //         "entityBadges": {
    //         "imageBased": {
                
    //         },
    //         "textBased": {
                
    //         },
    //         "textExtendedBadges": {
    //             "badgeObject": [
    //             {
    //                 "attributes": {
    //                 "description": "",
    //                 "fontColor": "#7E808C",
    //                 "iconId": "guiltfree/GF_Logo_android_3x",
    //                 "shortDescription": "options available"
    //                 }
    //             }
    //             ]
    //         }
    //         }
    //     },
    //     "aggregatedDiscountInfoV3": {
    //         "header": "50% OFF",
    //         "subHeader": "UPTO ₹100"
    //     },
    //     "differentiatedUi": {
    //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //         "differentiatedUiMediaDetails": {
    //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //         "lottie": {
                
    //         },
    //         "video": {
                
    //         }
    //         }
    //     },
    //     "reviewsSummary": {
            
    //     },
    //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     "restaurantOfferPresentationInfo": {
            
    //     }
    //     },
    //     "analytics": {
        
    //     },
    //     "cta": {
    //     "link": "https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-6th-block-koramangala-bangalore-390057",
    //     "type": "WEBLINK"
    //     }
    // },
    // {
    //     "info": {
    //     "id": "750225",
    //     "name": "Daily Kitchen - Homely Meals",
    //     "cloudinaryImageId": "f3712f78feb56ca2f11ba6dcacd54521",
    //     "locality": "6TH BLOCK",
    //     "areaName": "Koramangala",
    //     "costForTwo": "₹400 for two",
    //     "cuisines": [
    //         "Home Food",
    //         "Indian",
    //         "North Indian",
    //         "Thalis"
    //     ],
    //     "avgRating": 4.2,
    //     "parentId": "444382",
    //     "avgRatingString": "4.2",
    //     "totalRatingsString": "100+",
    //     "sla": {
    //         "deliveryTime": 35,
    //         "lastMileTravel": 0.6,
    //         "serviceability": "SERVICEABLE",
    //         "slaString": "30-40 mins",
    //         "lastMileTravelString": "0.6 km",
    //         "iconType": "ICON_TYPE_EMPTY"
    //     },
    //     "availability": {
    //         "nextCloseTime": "2024-04-20 02:00:00",
    //         "opened": true
    //     },
    //     "badges": {
    //         "textExtendedBadges": [
    //         {
    //             "iconId": "guiltfree/GF_Logo_android_3x",
    //             "shortDescription": "options available",
    //             "fontColor": "#7E808C"
    //         }
    //         ]
    //     },
    //     "isOpen": true,
    //     "type": "F",
    //     "badgesV2": {
    //         "entityBadges": {
    //         "imageBased": {
                
    //         },
    //         "textBased": {
                
    //         },
    //         "textExtendedBadges": {
    //             "badgeObject": [
    //             {
    //                 "attributes": {
    //                 "description": "",
    //                 "fontColor": "#7E808C",
    //                 "iconId": "guiltfree/GF_Logo_android_3x",
    //                 "shortDescription": "options available"
    //                 }
    //             }
    //             ]
    //         }
    //         }
    //     },
    //     "aggregatedDiscountInfoV3": {
    //         "header": "50% OFF",
    //         "subHeader": "UPTO ₹100"
    //     },
    //     "differentiatedUi": {
    //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //         "differentiatedUiMediaDetails": {
    //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //         "lottie": {
                
    //         },
    //         "video": {
                
    //         }
    //         }
    //     },
    //     "reviewsSummary": {
            
    //     },
    //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     "restaurantOfferPresentationInfo": {
            
    //     }
    //     },
    //     "analytics": {
        
    //     },
    //     "cta": {
    //     "link": "https://www.swiggy.com/restaurants/daily-kitchen-homely-meals-6th-block-koramangala-bangalore-750225",
    //     "type": "WEBLINK"
    //     }
    // },
    // {
    //     "info": {
    //     "id": "622030",
    //     "name": "MOJO Pizza - 2X Toppings",
    //     "cloudinaryImageId": "59b64f9bb67234987652437f21d379c2",
    //     "locality": "Patel Narayana Reddy Layout",
    //     "areaName": "Koramangala",
    //     "costForTwo": "₹250 for two",
    //     "cuisines": [
    //         "Pizzas",
    //         "Italian",
    //         "Fast Food",
    //         "Desserts"
    //     ],
    //     "avgRating": 4.5,
    //     "parentId": "11329",
    //     "avgRatingString": "4.5",
    //     "totalRatingsString": "500+",
    //     "sla": {
    //         "deliveryTime": 37,
    //         "lastMileTravel": 0.6,
    //         "serviceability": "SERVICEABLE",
    //         "slaString": "32-42 mins",
    //         "lastMileTravelString": "0.6 km",
    //         "iconType": "ICON_TYPE_EMPTY"
    //     },
    //     "availability": {
    //         "nextCloseTime": "2024-04-20 02:00:00",
    //         "opened": true
    //     },
    //     "badges": {
    //         "textExtendedBadges": [
    //         {
    //             "iconId": "guiltfree/GF_Logo_android_3x",
    //             "shortDescription": "options available",
    //             "fontColor": "#7E808C"
    //         }
    //         ]
    //     },
    //     "isOpen": true,
    //     "type": "F",
    //     "badgesV2": {
    //         "entityBadges": {
    //         "imageBased": {
                
    //         },
    //         "textBased": {
                
    //         },
    //         "textExtendedBadges": {
    //             "badgeObject": [
    //             {
    //                 "attributes": {
    //                 "description": "",
    //                 "fontColor": "#7E808C",
    //                 "iconId": "guiltfree/GF_Logo_android_3x",
    //                 "shortDescription": "options available"
    //                 }
    //             }
    //             ]
    //         }
    //         }
    //     },
    //     "aggregatedDiscountInfoV3": {
    //         "header": "50% OFF",
    //         "subHeader": "UPTO ₹100"
    //     },
    //     "differentiatedUi": {
    //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //         "differentiatedUiMediaDetails": {
    //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //         "lottie": {
                
    //         },
    //         "video": {
                
    //         }
    //         }
    //     },
    //     "reviewsSummary": {
            
    //     },
    //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     "restaurantOfferPresentationInfo": {
            
    //     }
    //     },
    //     "analytics": {
        
    //     },
    //     "cta": {
    //     "link": "https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-patel-narayana-reddy-layout-koramangala-bangalore-622030",
    //     "type": "WEBLINK"
    //     }
    // },
    // {
    //     "info": {
    //     "id": "93741",
    //     "name": "Subway",
    //     "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
    //     "locality": "The Nexus Mall",
    //     "areaName": "Koramangala",
    //     "costForTwo": "₹350 for two",
    //     "cuisines": [
    //         "Salads",
    //         "Snacks",
    //         "Desserts",
    //         "Beverages"
    //     ],
    //     "avgRating": 4,
    //     "parentId": "2",
    //     "avgRatingString": "4.0",
    //     "totalRatingsString": "5K+",
    //     "sla": {
    //         "deliveryTime": 43,
    //         "lastMileTravel": 1.6,
    //         "serviceability": "SERVICEABLE",
    //         "slaString": "40-45 mins",
    //         "lastMileTravelString": "1.6 km",
    //         "iconType": "ICON_TYPE_EMPTY"
    //     },
    //     "availability": {
    //         "nextCloseTime": "2024-04-20 05:45:00",
    //         "opened": true
    //     },
    //     "badges": {
    //         "imageBadges": [
    //         {
    //             "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
    //             "description": "Delivery!"
    //         }
    //         ]
    //     },
    //     "isOpen": true,
    //     "type": "F",
    //     "badgesV2": {
    //         "entityBadges": {
    //         "imageBased": {
    //             "badgeObject": [
    //             {
    //                 "attributes": {
    //                 "description": "Delivery!",
    //                 "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
    //                 }
    //             }
    //             ]
    //         },
    //         "textBased": {
                
    //         },
    //         "textExtendedBadges": {
                
    //         }
    //         }
    //     },
    //     "aggregatedDiscountInfoV3": {
    //         "header": "₹150 OFF",
    //         "subHeader": "ABOVE ₹299",
    //         "discountTag": "FLAT DEAL"
    //     },
    //     "differentiatedUi": {
    //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //         "differentiatedUiMediaDetails": {
    //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //         "lottie": {
                
    //         },
    //         "video": {
                
    //         }
    //         }
    //     },
    //     "reviewsSummary": {
            
    //     },
    //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     "restaurantOfferPresentationInfo": {
            
    //     }
    //     },
    //     "analytics": {
        
    //     },
    //     "cta": {
    //     "link": "https://www.swiggy.com/restaurants/subway-the-nexus-mall-koramangala-bangalore-93741",
    //     "type": "WEBLINK"
    //     }
    // }];

    //Local State Variable - super powerful variable
    let [ListOfRestaurants, setListOfRestaurant] = useState(RestaurantList); 
    return (
        <div className="body">
            <div className="search">
                <input className="inp" type="text" placeholder="Get your favourite food at the earliest !"></input>
                <button className="btn"> Search </button>
            </div>
            <div className="filter">
                {/* Top Rated Restaurants */}
                <button 
                    className="filter-btn" 
                    onClick={ () => {
                        //filter logic
                        const filteredList = ListOfRestaurants.filter(
                            (res) => res.info.avgRating >= 4.6
                        )
                        setListOfRestaurant(filteredList);
                    }}
                >Top Rated Restaurants</button>
                {/*button see all restaurants*/}
                <button 
                    className="filter-btn"
                    onClick={()=>{
                        setListOfRestaurant(RestaurantList);   
                    }}
                >See All Restaurants
                </button>
            </div>
            <div className="res-container">
                {/* these are known as passing props to a component */}
                {/* <RestaurantCard resData = {RestaurantList[0]}/>   - early this was like this */}
                {/* Each object must be uniquely identified so passing a unique key is mandatory */}
                {ListOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)}
            </div>
        </div>
    ) 
};

export default Body;