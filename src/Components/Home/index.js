import React, { useEffect, useState } from 'react';
import { MdFlightTakeoff } from 'react-icons/md';

import './style.css';
import api from '../../Services/api';




const Home = () => {
    const [trips, setTrips] = useState([]);

    useEffect(()=>{
        async function loadApi(){
            const response = await api.get('trips');
            setTrips(response.data);
        }
        loadApi();
    }, []);


    return(
        <>
            <div className="box">
                {trips.map(trip => (
                    <li key={trip.id}>
                    <img src={trip.image} alt={trip.title} />
                    <strong>{trip.title}</strong>
                    <span style={{paddingTop: 10, paddingBottom: 10}}>Status: {trip.status ? 'Disponivel' : 'Indisponivel'}</span>
        
                        <button
                        type="button"
                        onClick={()=> {}}
                        >  
                            <div>
                                <MdFlightTakeoff size={16} color="#FFF" />
                            </div>
                            <span>SOLICITAR RESERVA</span> 
                        </button>
                    </li>
                ))}
            </div>
      </>
    );
}

export default Home;