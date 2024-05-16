/* eslint-disable react/prop-types */
import {useState,useEffect } from "react";


const DetailsComponent = ({ startOpen }) => {
    const [open, toggleOpen] = useState(startOpen);
    const [isMounted, setMount] = useState(false);
  
    useEffect(() => {
      setMount(true);
    }, []);
  
    return (
      <details onToggle={() => isMounted && toggleOpen(!open)} open={open}>
        <summary>Summary</summary>
        <p>Hidden content hidden content hidden content</p>
      </details>
    );
  };

  export default DetailsComponent;