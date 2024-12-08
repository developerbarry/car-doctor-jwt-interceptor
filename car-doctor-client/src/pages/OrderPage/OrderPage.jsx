import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import OrderTableRow from "./OrderTableRow";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useSecureAxios from "../../useAxiosSecure/useSecureAxios";


const OrderPage = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const secure = useSecureAxios();
    

    useEffect(() => {
        // fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
        //     credentials: 'include'
        // })
        //     .then(res => res.json())
        //     .then(data => setOrders(data))

        
        secure(`/bookings?email=${user?.email}`)
            .then(res => {
                setOrders(res.data)
            })
            .catch(error => {
                const err = error.message;
                console.log(err)
            })

    }, [user?.email, secure])



    const handleDeleteOrder = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success("Successfully Deleted")
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining)
                }
            })
    }

    const handleOrderConfirm = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: "Approved" })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Approved')
                    const remaining = orders.filter(order => order._id !== id);
                    const updated = orders.find(order => order._id === id);
                    updated.status = "Approved";
                    const confirmBooking = [updated, ...remaining];
                    setOrders(confirmBooking)
                }
            })
    }




    return (
        <section>
            <div className="container mx-auto px-4 md:px-12 lg:px-24 py-4">
                <div className="overflow-x-auto font-inter">
                    <table className="min-w-full bg-white">
                        <thead className="whitespace-nowrap">
                            <tr>
                                <th className="p-4 text-left text-sm font-semibold text-black">
                                    Services
                                </th>
                                <th className="p-4 text-left text-sm font-semibold text-black">
                                    Progress
                                </th>
                                <th className="p-4 text-left text-sm font-semibold text-black">
                                    Deadline
                                </th>
                                <th className="p-4 text-left text-sm font-semibold text-black">
                                    Amount
                                </th>
                                <th className="p-4 text-left text-sm font-semibold text-black">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody className="whitespace-nowrap">
                            {
                                orders?.map(order => <OrderTableRow
                                    key={order._id}
                                    handleDeleteOrder={handleDeleteOrder}
                                    order={order}
                                    handleOrderConfirm={handleOrderConfirm}
                                />)
                            }

                        </tbody>
                    </table>

                    <ToastContainer />

                    <div className="md:flex m-4">
                        <p className="text-sm text-gray-500 flex-1">Showind 1 to 5 of 100 entries</p>
                        <div className="flex items-center max-md:mt-4">
                            <p className="text-sm text-gray-500">Display</p>

                            <select className="text-sm text-gray-500 border border-gray-400 rounded px-1 py-2 mx-4 outline-none">
                                <option>5</option>
                                <option>10</option>
                                <option>20</option>
                                <option>50</option>
                                <option>100</option>
                            </select>

                            <div className="border flex rounded divide-x-2 border-gray-400 divide-gray-400">
                                <button type="button" className="px-4 py-2 hover:bg-blue-50 text-sm">Previous</button>
                                <button type="button" className="px-4 py-2 hover:bg-blue-50 text-sm">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderPage;