import Star from "../assests/star.png"

const RestaurantCard = ({name,cuisines,avgRating,cloudinaryImageId,lastMileTravelString,costForTwoString}) => {
  console.log(name);
  console.log(avgRating);
    return(
      <div className="w-[330px] m-5 shadow-2xl p-3 rounded-lg hover:scale-110 transition-transform">
        <img className="rounded-lg" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
        <h2 className="font-bold text-xl m-1">{name?.length < 20 ? name : name?.slice(0, 15) + "..."}</h2>
        <h3 className="m-1">{cuisines.join(",")}</h3>
        
        <div className="flex justify-between">
          <div className="flex align-middle w-10 h-5 bg-green-600" style={avgRating < 4
              ? { backgroundColor: "orangered" }
              : avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }}>    
              {avgRating}
              <img className="ml-[3px] w-[10px]" src={avgRating === "--" ? "" : Star} />
          </div>
          <h4> {lastMileTravelString}</h4> 
          <div> {costForTwoString}</div>
         </div>
      </div>
    );
    };

export default RestaurantCard;    