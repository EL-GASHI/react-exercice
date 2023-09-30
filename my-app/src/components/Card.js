import React from "react";

function Card(porps) {
    let email = porps.employees.contact.email;
    let phone = porps.employees.contact.phone;
    let website = porps.employees.contact.website;
    return(
        <div className="bg-white p-3 rounded-4 d-flex flex-column gap-2 sizing">
            
            <img className="rounded-circle align-self-center" src={porps.employees.img} alt={porps.employees.name}></img>
            <h1 className="fs-4 align-self-center">{porps.employees.name}</h1>
            <h3 className="fs-5 text-primary  align-self-center">{porps.employees.job}</h3>
            <ul className="fs-6 list-group font-weight-light">
                <li className="list-group-item">{phone !== "" ? `Phone : ${phone}`: "Opps No Phone Her"}</li>
                <li className="list-group-item">{email !== "" ? `Email : ${email}`: "Opps No Email Her"}</li>
                <li id="email" className="list-group-item">{website !== "" ? `Website : ${website}`: "Opps No Website Her"}</li>
            </ul>

        </div>
    );


}

export default Card;