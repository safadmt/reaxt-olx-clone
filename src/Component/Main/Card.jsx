import { Component } from "react";
import { FaRupeeSign } from "react-icons/fa";
import productiamge from "../../Assets/pr-image/bullet.jpg";

class Card extends Component {
  render() {
    return  <div className="p-4 border border-gray-400 bg-white rounded-md ">
      <div className="">
        <div>
          <img src={productiamge} alt="cart_image" className="object-cover aspect-video" />
        </div>
        <div className="mt-2">
          <div className="flex  items-baseline md:font-bold">
            <FaRupeeSign size={12}/> 10,80,100
          </div>
          <div className="text-sm">1984 - 5500 km</div>
          <div className="text-gray-400 truncate">DIESER ENFIELD FOR SALE</div>
          <div className="text-xs font-thin truncate">PUNE MUMBAI HIGHWAY NAVI MUMBAI</div>
        </div>
      </div>
    </div>;
  }
}


export default Card;