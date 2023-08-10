const FoodItem = ({name,price,imageId,description}) => {
    return(
      <div className="w-[330px] m-5 shadow-lg bg-pink-50 ">  
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageId} />
        <h2 className="font-bold text-xl m-2 p-2">{name}</h2>
        <h3 className="m-2 p-2">Rupee-{price/100}</h3>
        {/* <h4 className="m-2 p-2">{description}</h4> */}
      </div>   
    );
    };

export default FoodItem;    