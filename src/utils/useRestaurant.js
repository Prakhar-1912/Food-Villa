import { useState,useEffect  } from "react";

const useRestaurant = (resId) => {
//state variable to change the restaurant detail when the resID changes 
const [resInfo,setResInfo]= useState(null);


//api call for fetching data
useEffect(()=>{RestaurantMenuData()},[]);

async function RestaurantMenuData(){
    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.807420918267805&lng=83.3550699055195&restaurantId=" + resId);
    const json = await data.json();
    setResInfo(json.data);
}

//return the result 
return resInfo;

}

export default useRestaurant;