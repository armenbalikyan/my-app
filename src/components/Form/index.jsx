import React, { useState } from "react";
import { Button } from "./Button";
import './style.css';
import { Text } from "./Text";

export const Form = () => {
    const [data,setData] = useState([
        {
            name:'Joe',
            lastname:'Smith',
            age: 46,
            country:'France'
        },
        {
            name:'Karen',
            lastname:'Smith',
            age: 18,
            country:'Spain'
        },
        {
            name:'Valod',
            lastname:'Karagulyan',
            age: 5,
            country:'Armenia'
        },
        {
            name:'John',
            lastname:'Aous',
            age: 78,
            country:'USA'
        },        {
            name:'Seroj',
            lastname:'Frangulyan',
            age: 99,
            country:'Hervashen'
        }
    ])
    let ne
    function filtringArr(arr){
        for(let i = 0;i < arr.length - 1;i++){

        }
       let filteredArr = arr.map((elem,index) =>{
           if(index != arr.length-2) {
            return elem * (arr[index + 1]);
           }
        });
    console.log(filteredArr);
    }
    filtringArr([3, 7, 12, 5, 20, 0])
    return (
        <div className="mainContainer">
            {data.map((item)=>(
                <ul>
                    <li>{item.name}</li>
                    <li>{item.lastname}</li>
                    <li>{item.age}</li>
                    <li>{item.country}</li>
                </ul>
            ))}
        </div>
    )

}