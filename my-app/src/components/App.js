import React from "react";
import Card from "./Card";

function App() {
    return (
        <div className="w-100 d-flex flex-column  justify-content-center gap-5">
            <h1 className="header">This is My First React Exercice</h1>
            <div className="d-flex flex-row gap-4 justify-content-center">
                <Card 
                    employees = {
                    {
                        name: "Ahmed Karim",
                        job: "Web Designer",
                        img: "https://picsum.photos/179",
                        contact: {
                               phone: "+212 456 789043",
                               email: "ahmedkarim@gitHub.com",
                               website: "ahmed.Org"
                         }
                    }
                    }
                />
                <Card 
                    employees = {
                    {
                        name: "Soma Rihanaia",
                        job: "Data Engineer",
                        img: "https://picsum.photos/180",
                        contact: {
                               phone: "+212 356 580043",
                               email: "somarihania234@gmail.com",
                               website: "soma.com"
                         }
                    }
                    }
                />
                <Card 
                    employees = {
                    {
                        name: "Abraham Dinker",
                        job: "Mobile Developer",
                        img: "https://picsum.photos/181",
                        contact: {
                               phone: "+212 234 897645",
                               email: "abrahamdink@outlook.com",
                               website: "abraham.com"
                         }
                    }
                    }
                />
            </div>
            
        </div>
    );
}
export default App;