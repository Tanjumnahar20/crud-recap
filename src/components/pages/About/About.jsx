import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero lg:h-[520px] bg-base-100 rounded-lg mt-4 ">
            <div className="hero-content flex-col lg:flex-row ">
                <div className='lg:w-1/2 relative'>
                <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className=' lg:w-1/2 space-y-5'>
                    <h1 className="w-1/2 font-bold text-[#FF3811]">About us</h1>
                    <p className='text-4xl font-bold w-[370px]'>We are qualified & of experience in this field</p>
                    <p className='w-[350px] h-[120px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;