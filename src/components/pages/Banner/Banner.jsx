import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'


const Banner = () => {
    const slides = <>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
    </>
    return (
        <div className="carousel lg:w-full h-[550px] ">
        
        <div id="slide1" className="carousel-item relative lg:w-full">
          <img src={img1} className="lg:w-full rounded-xl " />
          <div className="absolute h-full rounded-xl   bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
    <div className=' text-white space-y-5 w-1/2 pl-10 mt-28'>
       <h2 className='text-6xl font-bold '>Affordable prices for car servicing</h2>
       <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
    <div>
    <button className="btn btn-active btn-primary mr-5">Discover more</button>
    <button className="btn btn-outline btn-error">Latest project</button>


    </div>
    </div>
          </div>
          {slides}
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />
         {slides}
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl" />
          {slides}
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-x" />
         {slides}
        </div>
      </div>
    );
};

export default Banner;