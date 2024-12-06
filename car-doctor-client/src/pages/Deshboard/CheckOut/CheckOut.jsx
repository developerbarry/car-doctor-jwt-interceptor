import { useParams } from "react-router-dom";
import CheckOutHeader from "../Shared/CheckOutHeader";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CheckOut = () => {
    const { user } = useContext(AuthContext);

    const { id } = useParams();

    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://car-doctor-server-iota-silk.vercel.app/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])

    console.log(service)

    const handleConfirmOrder = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const service_id = service?._id;
        const serviceName = service?.title;
        const name = user?.displayName;
        const email = form.get('email');
        const date = form.get('date');
        const price = form.get('price');
        const message = form.get('message');

        const newOrder = {
            img: service?.img,
            service_id,
            serviceName,
            name,
            email,
            date,
            price,
            message
        }

        fetch('https://car-doctor-server-iota-silk.vercel.app/bookings', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Order Confirm Successfully!')
                }
            })
    }


    return (
        <section>
            <div className="container mx-auto px-4 md:px-12 lg:px-24 py-4">
                <div>
                    <CheckOutHeader service={service} />
                    <div className="min-h-screen font-inter flex items-center justify-center my-10 md:my-14">
                        <div className="w-full bg-[#F3F3F3] p-4 md:p-12 lg:p-24 rounded-lg shadow-md">
                            <form
                                onSubmit={handleConfirmOrder}
                                className="space-y-6">
                                <div className="flex gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        name="name"
                                        defaultValue={user?.displayName}
                                        className="w-full px-4 text-sm py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Your Email"
                                        name="email"
                                        defaultValue={user?.email}
                                        className="w-full px-4 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="flex gap-4">
                                    <input
                                        type="date"
                                        name="date"
                                        className="w-full px-4 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Service Price $"
                                        name="price"
                                        defaultValue={service?.price}
                                        className="w-full px-4 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <textarea
                                    placeholder="Your Message"
                                    name="message"
                                    className="w-full px-4 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    rows="10"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
                                >
                                    Order Confirm
                                </button>
                            </form>

                            <ToastContainer />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CheckOut;