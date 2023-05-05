import React from "react";
import Pricing from "../Pricing/Pricing";

const PriceOption = () =>{

    
  const pricingOption = [
    {id:1,name:"Free", pricing:0, feature:[
        'Every Thing in Free',
        'Extra Feature',
        'Feature X',
        'Feture 1',
        'Feature Alpa'
    ]},

    {id:2,name:"Gold", pricing:10.99,  feature:[
        'Every Thing in Gold',
        'Extra Feature',
        'Feature X',
        'Feture 1',
        'Feature Alpa'
    ]},
    {id:3,name:"Platinum", pricing:19.99,
    feature:[
        'Every Thing in Platinum',
        'Extra Feature',
        'Feature X',
        'Feture 1',
        'Feature Alpa'
    ]},
  ]


    return(
        <div className="m-6">
            <h1 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>Best Deal Of The Town</h1>
            <div className="grid md:grid-cols-3 gap-3">
            {
                pricingOption.map( option => <Pricing key={option.id} option={option}></Pricing>)
            }
            </div>
        </div>
    )
}

export default PriceOption;