import React from "react";
import './divSection.css';

interface divSecTypes {
    image?: string;
    children: React.ReactNode;
}

export const DivSection = ({ image, children }: divSecTypes) => {
    return (
        <div className="divSection">
            <div className="divSection__image">
                <img className="divSection__img" src={image} />
            </div>
            <div className="divSection__div">
                {children}
            </div>
        </div>
    )
}