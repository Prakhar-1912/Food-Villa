import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../utils/cardSlice';

const MenuItem = (props) => {
  const [count, setcount] = useState(0)
  const dispatch=useDispatch();

  const handleAddItem = (item) =>{
       dispatch(addItem(item));
       setcount(count + 1)
  }

  const handleRemoveItem = (item) =>{
       dispatch(removeItem(item));
       setcount(count - 1)
  }
  
  return (
    <>
        <div className='flex justify-between  my-5 mx-96 p-30 gap-3 border-b-2'>
          <div>
            <div className='font-bold text-xl m-2'>{props.item?.card?.info?.name}</div>
            <div className='m-2 font-semibold'>{"₹"}{!(props.item?.card?.info?.price) ? props.item?.card?.info?.defaultPrice / 100 : props.item?.card?.info?.price / 100}</div>
            <div className='m-2'>{props.item?.card?.info?.description}</div>
          </div>
          <div>
            <img className='w-28 h-24 rounded-lg cursor-pointer object-cover' src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + props.item?.card?.info?.imageId} />
            <div className='flex justify-between m-5'>
               <div className='bg-green-100 cursor-pointer p-1 rounded-md w-5 h-7' onClick={()=>handleRemoveItem(props.item?.card?.info.id)}>-</div>
               <div className="p-1">{count}</div>
               <div className='bg-red-100 cursor-pointer p-1 w-5 h-7 rounded-md'  onClick={()=>handleAddItem(props.item?.card?.info)}>+</div>
            </div>
          </div>  
        </div>
    </>
  )
}

export default MenuItem