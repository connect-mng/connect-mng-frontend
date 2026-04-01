import React from "react";

type SmallCircleValues = {
    textVal : string;
    color : string;
}

export function SmallCircle({textVal, color} : SmallCircleValues) {
    return (
        <div style={{ backgroundColor: color }}>
          {textVal}
        </div>
    );
}