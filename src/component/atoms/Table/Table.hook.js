import { useEffect, useState } from "react";

export const useTable = () => {
    const [dataCurrency, setDataCurrency] = useState({});

    useEffect(() => {
        fetch(
            `https://api.currencyfreaks.com/latest?apikey=e95f4fc0d0c7401798f2cfeff08de4f7`
        )
        .then((response) => {
            return response.json();
        })
        .then((dataCurrency) => {
            setDataCurrency(dataCurrency.rates);
            console.log(dataCurrency.rates);
        });
    }, []);

    const CAD = Number.parseFloat(dataCurrency && dataCurrency.CAD);
    const EUR = Number.parseFloat(dataCurrency && dataCurrency.EUR);
    const IDR = Number.parseFloat(dataCurrency && dataCurrency.IDR);
    const JPY = Number.parseFloat(dataCurrency && dataCurrency.JPY);
    const CHF = Number.parseFloat(dataCurrency && dataCurrency.CHF);
    const GBP = Number.parseFloat(dataCurrency && dataCurrency.GBP);

    return {
        CAD,
        EUR,
        IDR,
        JPY,
        CHF,
        GBP
    };
}