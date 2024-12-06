import { IoStar } from "react-icons/io5";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {

    const { img, title, price } = product;
    return (
        <div className="w-full border p-5 rounded-lg">
            <div className="w-full mb-5 bg-[#F3F3F3] py-10 rounded-lg">
                <img src={img} className="h-32 w-[40%] mx-auto" alt="" />
            </div>
            <div className="text-center">
                <div className="flex gap-1 justify-center mb-2">
                    <IoStar color="#FF912C" size={18} />
                    <IoStar color="#FF912C" size={18} />
                    <IoStar color="#FF912C" size={18} />
                    <IoStar color="#FF912C" size={18} />
                    <IoStar color="#FF912C" size={18} />
                </div>
                <h2 className="text-2xl font-bold mb-1">{title}</h2>
                <span className="text-[#FF3811] font-semibold">Price : ${price}</span>
            </div>
        </div>
    );
};

ProductCard.propTypes ={
    product: PropTypes.object
}

export default ProductCard;