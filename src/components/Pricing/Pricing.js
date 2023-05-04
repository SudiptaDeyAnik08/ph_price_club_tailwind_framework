import React from "react";

import { CheckBadgeIcon } from '@heroicons/react/24/solid'


const Pricing = ({option})=>{
    return(
        <div className="bg-indigo-300 mt-4 rounded-md">
                <div>
                    <h3>
                        <span className="text-6xl font-bold text-white">{option.pricing}</span>
                        <span className="text-3xl text-gray-200">/month</span>
                        </h3>
                    <p className="text-3xl mt-4 mb-4"> {option.name}</p>
                </div>
                <div className="flex mb-4 ml-4">
                <CheckBadgeIcon className="h-6 w-6 text-green-500" />
                <p className="text-1xl font-bold ml-2">AweSome Feature</p>
                </div>
        </div>
    )
}

export default Pricing;