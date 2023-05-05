import React from "react";

import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const Feature = ({feature}) =>{
    return(
        <div className="flex mb-4 ml-4">
        <CheckBadgeIcon className="h-6 w-6 text-green-500" />
        <p className="text-1xl font-bold ml-2">{feature}</p>
        </div>
    )
}

export default Feature;