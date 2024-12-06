
const AboutUs = () => {
    return (
        <div className="container mx-auto px-4 md:px-12 lg:px-24 py-4">
            <div className="flex flex-col flex-col-reverse lg:flex-row">
                <div className="w-full lg:w-2/4 relative">
                    <img src="https://i.ibb.co.com/jwNBtG2/person.jpg" className="lg:w-[85%] lg:h-96 w-[80%] h-[250px] md:w-[90%] md:h-[400px] rounded-lg" alt="" />
                    <img src="https://i.ibb.co.com/Nr1Fh1L/parts.jpg" className="absolute top-[50%] right-0 lg:right-8 w-56 md:w-72 h-60 border border-[6px] rounded-md border-white" alt="" />
                </div>
                <div className="w-full lg:w-2/4 font-inter px-3 py-2 mb-8 lg:mb-0">
                    <span className="font-bold text-base text-[#FF3811] inline-block mb-3">About Us</span>
                    <div className="space-y-10">
                        <h2 className="font-bold text-3xl md:text-5xl lg:w-96">We are qualified & of experience in this field</h2>
                        <p className="font-normal text-[#737373] capitalize text-sm md:text-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. <br /> <br />

                            The majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
                        </p>
                        <button className="px-5 py-3 cursor-pointer bg-[#FF3811] hover:bg-[#a7240b] rounded-md transition text-white">Get More Info</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;