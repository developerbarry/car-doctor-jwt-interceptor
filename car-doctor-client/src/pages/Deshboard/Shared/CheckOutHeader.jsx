import PropTypes from "prop-types";

const CheckOutHeader = ({ service }) => {
    return (
        <div className="relative bg-gray-900 font-inter text-white h-52 rounded-lg overflow-hidden">
            <img
                src="https://i.ibb.co.com/C8Rpv8G/Rectangle-1539.png"
                alt="Background Image"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
            />

            <div className="relative z-10 p-8 md:p-14 flex flex-col items-start h-full justify-center">
                <h1 className="text-3xl font-bold">{service?.title}</h1>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
                <div className="bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-t-md w-fit mx-auto">
                    Home/Checkout
                </div>
            </div>
        </div>
    );
};

CheckOutHeader.propTypes = {
    service: PropTypes.object
}

export default CheckOutHeader;