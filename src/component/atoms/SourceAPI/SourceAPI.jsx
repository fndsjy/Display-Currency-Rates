import React from "react";
import "./sourceAPI.style.css";

const SourceAPI = () => {
    return(
        <div className="source-api">
            <p>Rates are based from 1 USD.</p>
            <p>This Application uses API from <a href={"https://currencyfreaks.com"} target="_blank" rel="noreferrer">https://currencyfreaks.com.</a></p>
        </div>
    );
}

export default SourceAPI;