import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDelete = id =>{
        const proceed = confirm ('Are you sure you want to delete?')
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{console.log(data)
                // ui theke remove korar method
                if(data.deletedCount>0){
                    alert(' deleted succesfully')
                    const remaining = bookings.filter(booking=>booking._id!==id)
                    setBookings(remaining)
                }
            })
        }
    }

    const handleBookingConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status:'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
            if(data.modifiedCount>0){
                const remaining = bookings.filter(booking=>booking._id!==id);
                const updated = bookings.find(booking=>booking._id==id);
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining]
                setBookings(newBookings);
            }
            
        })
    }

    return (
        <div>
            <h2>booking:{bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Product img</th>
        
        <th>Service name</th>
        <th>Price</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
                    <tbody>
           {
                bookings.map(booking=><BookingRow 
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
                >
                    
                </BookingRow>)
            }
           </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;