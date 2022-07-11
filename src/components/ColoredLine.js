import React from 'react';
import "./ColoredLine.css";

const ColoredLine = ({ color }) => (
    <hr
        className="coloredline"
        style={{
            color: color,
            backgroundColor: color
        }}
    />
);

export default ColoredLine;