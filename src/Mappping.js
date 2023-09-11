import React from 'react'

const Mappping = () => {
    // const items = ["Apple","Orange","Mango","Rashberry"]
    // const mapItems = items.map((value,index)=>(<h3 key={index}>{value}</h3>))

    const items = [{id:1, item:"Apple", price:200},
                   {id:2, item:"Orange", price:400},
                   {id:3, item:"Mango", price:200},
                   {id:4, item:"Rashberry", price:800}
                ];
    const mapItems = items.map((value)=>(<h3 key={value.id}>The price of {value.item} is {value.price} </h3>));


    return (
        <div>
            {mapItems}
        </div>
    )
}

export default Mappping