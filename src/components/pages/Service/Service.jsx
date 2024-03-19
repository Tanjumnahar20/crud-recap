import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services,setService] = useState([]);

  useEffect(()=>{
    fetch('services.json')
    .then(res=>res.json())
    .then(data=>setService(data))
  },[])

    return (
        <div className="mb-4 mt-4">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-orange-500">Our services</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {
                services.map(service=> <ServiceCard key={service._id}
                    service={service}
                > </ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Service;