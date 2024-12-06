import PropTypes from "prop-types";


const OrderTableRow = ({ order, handleDeleteOrder, handleOrderConfirm }) => {
    const { _id, img, serviceName, message, price, date, status } = order;


    return (
        <tr className="odd:bg-blue-50">
            <td className="p-4 text-sm">
                <div className="flex items-center cursor-pointer w-max">
                    <img src={img} className="w-24 h-24 rounded-md " />
                    <div className="ml-4">
                        <p className="text-sm text-black">{serviceName}</p>
                        <p className="text-xs text-gray-500">{message && message.length > 40 ? message.slice(0, 40) + "..." : message}</p>
                    </div>
                </div>
            </td>
            <td className="p-4 text-sm">
                <div className="bg-gray-300 rounded w-full h-1.5">
                    <div className="w-4/5 h-full rounded bg-orange-400"></div>
                </div>
            </td>
            <td className="p-4 text-sm">
                {date}
            </td>
            <td className="p-4 text-sm">
                ${price}
            </td>

            <td className="p-4">
                {
                    status === 'Approved' ? (
                        <button className="px-3 py-1.5 text-sm mr-4 text-[#29B170] border border-[#29B170] font-normal rounded-md">{status}</button>

                    ) :
                        (<button onClick={() => handleOrderConfirm(_id)} className="px-3 py-1.5 bg-[#FF3811] text-sm mr-4 text-white font-normal rounded-md">Pending</button>
                        )

                }
                <button onClick={() => handleDeleteOrder(_id)} className="mr-4" title="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                        <path
                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                            data-original="#000000" />
                        <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                            data-original="#000000" />
                    </svg>
                </button>
            </td>
        </tr>
    );
};

OrderTableRow.propTypes = {
    order: PropTypes.object,
    handleDeleteOrder: PropTypes.func,
    handleOrderConfirm: PropTypes.func
}

export default OrderTableRow;