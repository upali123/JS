import React, { useEffect, useState, memo } from "react";

const Table = ({ calculateTable }) => {
    const [table, setTable] = useState([]);

    console.log("Table Component Rendered");

    useEffect(() => {
        setTable(calculateTable(2));
    }, [calculateTable]); // Only updates when `calculateTable` changes

    return (
        <ul>
            {table.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

// Wrap component with React.memo to prevent unnecessary re-renders
export default memo(Table);
