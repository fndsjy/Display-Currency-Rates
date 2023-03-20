import { useTable } from "./Table.hook";
import "./table.style.css";

const Table = () => {
    const {
        CAD, EUR, IDR, JPY, CHF, GBP
    } = useTable();

    return (
        <div>
            <table className="table table-sm table-borderless table-hover">
                <thead>
                    <tr>
                    <th scope="col">Currency</th>
                    <th scope="col">We Buy</th>
                    <th scope="col">Exchange Rate</th>
                    <th scope="col">We Sell</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CAD</td>
                        <td>{Number.parseFloat(Number(CAD) + ((.05) * Number(CAD))).toFixed(4)}</td>
                        <td>{CAD.toFixed(6)}</td>
                        <td>{Number.parseFloat(Number(CAD) - ((.05) * Number(CAD))).toFixed(4)}</td>
                    </tr>
                    <tr>
                        <td>EUR</td>
                        <td>{Number.parseFloat(Number(EUR) + ((.05) * Number(EUR))).toFixed(4)}</td>
                        <td>{EUR.toFixed(6)}</td>
                        <td>{Number.parseFloat(Number(EUR) - ((.05) * Number(EUR))).toFixed(4)}</td>
                    </tr>
                    <tr>
                        <td>IDR</td>
                        <td>{Number.parseFloat(Number(IDR) + ((.05) * Number(IDR))).toFixed(4)}</td>
                        <td>{IDR.toFixed(6)}</td>
                        <td>{Number.parseFloat(Number(IDR) - ((.05) * Number(IDR))).toFixed(4)}</td>
                    </tr>
                    <tr>
                        <td>JPY</td>
                        <td>{Number.parseFloat(Number(JPY) + ((.05) * Number(JPY))).toFixed(4)}</td>
                        <td>{JPY.toFixed(6)}</td>
                        <td>{Number.parseFloat(Number(JPY) - ((.05) * Number(JPY))).toFixed(4)}</td>
                    </tr>
                    <tr>
                        <td>CHF</td>
                        <td>{Number.parseFloat(Number(CHF) + ((.05) * Number(CHF))).toFixed(4)}</td>
                        <td>{CHF.toFixed(6)}</td>
                        <td>{Number.parseFloat(Number(CHF) - ((.05) * Number(CHF))).toFixed(4)}</td>
                    </tr>
                    <tr>
                        <td>GBP</td>
                        <td>{Number.parseFloat(Number(GBP) + ((.05) * Number(GBP))).toFixed(4)}</td>
                        <td>{GBP.toFixed(6)}</td>
                        <td>{Number.parseFloat(Number(GBP) - ((.05) * Number(GBP))).toFixed(4)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;