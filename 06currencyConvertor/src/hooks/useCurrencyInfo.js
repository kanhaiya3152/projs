import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        const json = await res.json();

        if (json && json[currency]) {
          setData(json[currency]);
        } else {
          setData({});
          console.warn(`No data found for currency: ${currency}`);
        }
      } catch (err) {
        console.error("Failed to fetch currency data:", err);
        setData({});
      }
    };

    fetchCurrency();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
