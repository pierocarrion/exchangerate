import { useEffect, useMemo, useState } from "react";
import { Stack, StackDivider, useColorModeValue } from '@chakra-ui/react';

import ExchangeNav from "../pages/Exchange/ExchangeNav/ExchangeNav";
import ExchangeResult from "../pages/Exchange/ExchangeResult/ExchangeResult";

import { getCurrencies } from "../services/Exchange";

export default function Exchange() {

    const [currencies, setCurrencies] = useState([])

    //Result 
    const [currencyResult, setCurrencyResult] = useState('')

    //Form
    const [currencyBase, setCurrencyBase] = useState('')    //TODO: Add Different Currency bases
    const [currencyTo, setCurrencyTo] = useState('')

    const currenciesDisplay = useMemo(() => {
        const flattenCurrencies = []

        Object.keys(currencies).forEach(key => {
            const right = currencies[key] ?? {};
            flattenCurrencies.push({ key, ...right })
        });

        return flattenCurrencies.sort((prev, current) => {
            if (prev.name > current.name) {
                return 1;
            }
            if (prev.name < current.name) {
                return -1;
            }
            return 0
        })
    }, [currencies]) ?? []

    useEffect(() => {
        getCurrencies().then(({ data }) => setCurrencies(data))

        return () => {
            setCurrencies([])
        };
    }, []);

    const onClick = (event) => {
        event.preventDefault();
        setCurrencyResult(currencies[currencyTo])
    }

    return (
        <>
            <Stack divider={
                <StackDivider
                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                    width={'100%'}
                    ml={'100px'}
                />
            }>
                <ExchangeNav currenciesTo={currenciesDisplay} onClick={onClick} setCurrencyBase={setCurrencyBase} setCurrencyTo={setCurrencyTo} />
                <ExchangeResult currencyResult={currencyResult} />
            </Stack>
        </>
    )
}