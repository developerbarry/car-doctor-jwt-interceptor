import data from '../../../../assets/icons/data.png';
import call from '../../../../assets/icons/call.png';
import location from '../../../../assets/icons/location.png'

const Contact = () => {
    return (
        <div className="container mx-auto px-4 md:px-12 lg:px-24 py-4">
            <div className="bg-[#151515] w-full h-full font-inter text-white rounded-lg">
                <div className='flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-between px-6 py-10 lg:px-20 lg:py-14'>
                    <div className='flex gap-5 items-center'>
                        <img src={data} className='w-8' alt="" />
                        <div className='flex flex-col gap-y-1'>
                            <span>We are open monday-friday</span>
                            <span className='font-bold text-lg md:text-xl'>7:00 am - 9:00 pm</span>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <img src={call} className='w-8' alt="" />
                        <div className='flex flex-col gap-y-1'>
                            <span>Have a question?</span>
                            <span className='font-bold text-lg md:text-xl'>+2546 251 2658</span>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <img src={location} className='w-8' alt="" />
                        <div className='flex flex-col gap-y-1'>
                            <span>Need a repair? our address</span>
                            <span className='font-bold text-lg md:text-xl'>Liza Street, New York</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;