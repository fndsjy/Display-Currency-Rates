import React from "react";
import Table from "../../atoms/Table/Table.component";
import SourceAPI from "../../atoms/SourceAPI/SourceAPI";
import "./currencyTable.style.css";

const CurrencyTable = () => {
    return (
        <div className="container-fluid">
            <Table />
            <SourceAPI />
        </div>
    );
}

export default CurrencyTable;