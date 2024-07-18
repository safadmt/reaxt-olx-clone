import { Component } from "react";
import { FaRupeeSign } from "react-icons/fa";
import image from '../../Assets/pr-image/bullet.jpg'
class Card extends Component {
  render() {
    const {product} = this.props
    return  <div className="p-4 border border-gray-400 bg-white rounded-md ">
      <div className="">
        <div>
          <img src={product?.imageid} alt="cart_image" className="object-cover aspect-video" />
        </div>
        <div className="mt-2">
          <div className="flex  items-baseline md:font-bold text-bold">
            <FaRupeeSign size={12}/> {product?.price}
          </div>
          <div className="text-sm">{product?.year_of_registration} -{product?.kilometor_run} km</div>
          <div className="text-gray-600 truncate">{product?.small_description}</div>
          <div className="text-xs font-thin truncate">{product?.place}</div>
        </div>
      </div>
    </div>;
  }
}


export default Card;