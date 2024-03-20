/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData();
    console.log(service);
    const {title,_id,price,img} = service;
     const {user} = useContext(AuthContext);

     const handleBooking = e =>{
         e.preventDefault();
         const form = e.target;
         const name = form.name.value;
         const email= user?.email;
         const date = form.date.value;
         const booking ={
            customerName :name,
            email,
            date,
            img,
            price:price,
            service: _id,
            title:title
         }
         console.log(booking);

         fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
         })
         .then(res=>res.json())
         .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('succesfully added')
            }
         })
         
     }



    return (
        <div>
  
    <h2 className="text-3xl text-orange-500 text-center font-semibold">Book service: {title}</h2>
      <form onSubmit={handleBooking} className="card-body ">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due </span>
          </label>
          <input type="text" defaultValue={price} className="input input-bordered" required />
          
        </div>
       </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary btn-block" type="submit" value="Confirm order" />
        </div>
      </form>
   
               
        </div>
    );
};

export default CheckOut;