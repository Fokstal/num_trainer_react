import React from "react";
import { heartLayout } from "@service/constants";

const LifeBar = ({ currentLife }) => {
    const lifeList = [];

    for (let i = 0; i < currentLife; i++) {
        lifeList.push(heartLayout);
    }

    return (
        <div className='life-bar py-4'>
            {lifeList}
        </div>
    )
}

export default LifeBar