import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';
import MenuItem from './MenuItem';
import Star from "../assests/star.png"


const RestaurantMenu = () => {

const {resId} = useParams(); 

const resInfo=useRestaurant(resId);

 if(resInfo === null) return <Shimmer />;

 const{name,cuisines,costForTwoMessage,cloudinaryImageId,avgRating,sla}=resInfo?.cards[0]?.card?.card?.info;
 const{itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
 
  return (
    
    <div  >
      <div className='flex  justify-center bg-gray-900'>
        <div>
          <img  className= " h-64 w-80 m-6 rounded-xl border-2 border-black shadow-slate-500"src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="res-img" />
        </div>  
        <div className='text-center'>
          <h2 className='font-bold my-6 text-3xl text-white'> {name}</h2>
          <p className='text-lg2 flex justify-start text-white'>{cuisines?.join(", ")}-{costForTwoMessage}</p>
      
          
          <div className="flex justify-start my-2 w-9 h-5 bg-green-600" style={avgRating < 4
              ? { backgroundColor: "orangered" }
              : avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }}>    
              {avgRating}
              <img className="ml-[3px] w-[10px]" src={avgRating === "--" ? "" : Star} />
          </div>
        </div>
      </div>

      <div className='m-2 p-2'>
            <ul>
              <div className="mx-96 font-semibold text-xl">Recommended ({itemCards?.length})</div>
              {/* {itemCards?.map((item) => { return <li key={item.card.info.id}>{item.card.info.name} - <button className='m-2 p-2 bg-green-200' onClick={()=>addItemTocart(item)}>Add Item</button></li> })} */}
              {itemCards?.map((item) => { return <MenuItem key={item.card.info.id} item={item} /> })}
            </ul> 
      </div>
    </div>

  )
}

export default RestaurantMenu