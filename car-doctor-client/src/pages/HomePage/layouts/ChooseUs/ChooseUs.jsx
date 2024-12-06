import img1 from '../../../../assets/features/01.svg'
import img2 from '../../../../assets/features/02.svg'
import img3 from '../../../../assets/features/03.svg'
import img4 from '../../../../assets/features/04.svg'
import img5 from '../../../../assets/features/05.svg'
import img6 from '../../../../assets/features/06.svg'


const ChooseUs = () => {
    return (
        <div className="container mx-auto px-4 md:px-12 lg:px-24 py-4">
            <div className="text-gray-700 font-inter">
                <div className="text-center lg:px-48 mb-14">
                    <span className="font-bold text-base text-[#FF3811] inline-block mb-4">Core Features</span>
                    <h3 className="text-3xl md:text-[40px] font-bold mb-5">Why Choose Us</h3>
                    <p className="font-normal text-[#737373] capitalize text-sm md:text-base">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                </div>

                <div className="flex flex-wrap flex-col lg:flex-nowrap lg:flex-row text-center justify-center gap-2">
                    <div className="w-full lg:w-[17%] cursor-pointer px-2 py-8 rounded-lg border border-[#E8E8E8]">
                        <div className=" w-full flex justify-center">
                            <img src={img1} className="w-18 mb-3" />
                        </div>
                        <h2 className="font-bold text-[16px] text-[#444444]">Expert Team</h2>
                    </div>

                    <div className="w-full lg:w-[17%] cursor-pointer px-2 py-8 rounded-lg border border-3 border-[#000000] bg-[#FF3811]">
                        <div className=" w-full flex justify-center">
                            <img src={img2} className="w-18 mb-3" />
                        </div>
                        <h2 className="font-bold text-[17px] text-white">Timely Delivery</h2>
                    </div>
                    <div className="w-full lg:w-[17%] cursor-pointer px-2 py-8 rounded-lg border border-[#E8E8E8]">
                        <div className=" w-full flex justify-center">
                            <img src={img3} className="w-18 mb-3" />
                        </div>
                        <h2 className="font-bold text-[17px] text-[#444444]">24/7 Support</h2>
                    </div>
                    <div className="w-full lg:w-[17%] cursor-pointer px-2 py-8 rounded-lg border border-[#E8E8E8]">
                        <div className=" w-full flex justify-center">
                            <img src={img4} className="w-18 mb-3" />
                        </div>
                        <h2 className="font-bold text-[17px] text-[#444444]">Best Equipment</h2>
                    </div>
                    <div className="w-full lg:w-[17%] cursor-pointer px-2 py-8 rounded-lg border border-[#E8E8E8]">
                        <div className=" w-full flex justify-center">
                            <img src={img5} className="w-18 mb-3" />
                        </div>
                        <h2 className="font-bold text-[17px] text-[#444444]">100% Guranty</h2>
                    </div>
                    <div className="w-full lg:w-[17%] cursor-pointer px-2 py-8 rounded-lg border border-[#E8E8E8]">
                        <div className=" w-full flex justify-center">
                            <img src={img6} className="w-18 mb-3" />
                        </div>
                        <h2 className="font-bold text-[17px] text-[#444444]">Timely Delivery</h2>
                    </div>


                </div>
            </div>
        </div>

    );
};

export default ChooseUs;