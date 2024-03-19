/* eslint-disable react/prop-types */


const ServiceCard = ({service}) => {
    const {title,img,price} = service;
    return (
        <div className="card w-[300px] h-[350px] bg-base-100 shadow-xl border border-orange-400">
        <figure className="px-4 pt-4">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className="text-[#FF3811]">Price:{price}</p>
          <div className="card-actions ">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;