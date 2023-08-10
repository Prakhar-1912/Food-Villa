import RestaurantCard from "./RestaurantCard";
import {restaurantList} from "../../constants";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/filterdata";
import useOnline from "../utils/useOnline"

const Body = () => {

  const [searchText,setSearchText] = useState("");
  const [allRestaurants,setAllRestaurants] = useState(null);
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);

  // for fetching swiggy api data
  useEffect( () => {
    getRestaurants();
  },[]);  

const isOnline=useOnline();

if(!isOnline){
  return <h1>oops!! pls chack your internet connection</h1>
}


  async function getRestaurants(){

      // new api
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7605545&lng=83.3731675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      
      
      const json = await data.json();
      console.log(json);
      // optional chaining
      
      // new API
      setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
  }

    return ( allRestaurants && allRestaurants.length < 1)  ? <Shimmer /> :  (
      <>
       <div className="flex align-middle justify-center p-5 my-3 mx-5">
      {/* search bar for scrolling through different restaurants  
       onchange functionality and uses useState hook for taking inputs */}

      <input type="text" className= "text-xl w-[20em] h-[2.3em] rounded-lg p-2 text-black bg-pink-50" placeholder="search" value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>

      {/* search button for filtering out restaurant of your choice uses hooks and filter  */}

      <button className="cursor-pointer w-16 h-[2.6em] mx-2 p-2 bg-purple-700 hover:bg-purple-500 text-white rounded-md" onClick={() => {
        const data = filterData(searchText,allRestaurants);
        setFilteredRestaurant(data);
      }}>search</button>
    </div>
      
    <div className="flex flex-wrap mx-20 my-5">
      {filteredRestaurant && filteredRestaurant.map((restaurant) => {
      return <Link key={restaurant.info.id} to={"/restaurant/" + restaurant?.info?.id }><RestaurantCard {...restaurant.info} /></Link>;
      })}

    </div>
    </>
    );
  }

 export default Body; 
