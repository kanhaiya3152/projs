import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const {userid} = useParams()
    return (  
        <>
        <div className="bg-red-500 text-2xl text-white">Hii Router : {userid} </div>
        </>
    );
}

export default User;