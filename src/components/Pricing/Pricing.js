import React from "react";
import Feature from "../../Feature/Feature";




const Pricing = ({option})=>{

    const {feature} = option;

    return(
        <div className="bg-indigo-300 mt-4 rounded-md p-3 ">
                <div>
                    <h3>
                        <span className="text-6xl font-bold text-white">{option.pricing}</span>
                        <span className="text-3xl text-gray-200">/month</span>
                        </h3>
                    <p className="text-3xl mt-4 mb-4"> {option.name}</p>
                </div>
              {
                feature.map((res,idx) => <Feature key={idx} feature={res}></Feature>)
              }
              <button className="bg-green-500 w-full rounded-md py-2 text-2xl text-white font-bold">Buy Now</button>
        </div>
    )
}

export default Pricing;