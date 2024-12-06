import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <div className="w-full border p-5 rounded-lg">
            <div className="w-full mb-8">
                <img src={img} className="rounded-lg w-full h-52" alt="" />
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-3.5">{title}</h2>
                <div className="flex justify-between">
                    <span className="text-[#FF3811] font-semibold">Price : ${price}</span>
                    <Link to={`/checkout/${_id}`}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" className="cursor-pointer" width="24px" fill="#FF3811"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg></Link>
                </div>
            </div>
        </div>
    );
};

ServicesCard.propTypes = {
    service: PropTypes.object
}

export default ServicesCard;