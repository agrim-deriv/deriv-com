import React from 'react'
import Symbol from '../components/helper/_symbol'
import { stocks_european_indices } from '../static/content/_market-symbols'
import useRegion from 'components/hooks/use-region'

const stocks_european_indices_eu_endpoint = stocks_european_indices.filter((cfds) => {
    return cfds?.eu === true
})
const EuropeanIndices = () => {
    const { is_eu, is_row } = useRegion()
    return (
        <>
            {is_row && (
                <>
                    {stocks_european_indices.map((symbol, index) => (
                        <Symbol key={symbol.text && index} src={symbol.src} text={symbol.text} />
                    ))}
                </>
            )}
            {is_eu && (
                <>
                    {stocks_european_indices_eu_endpoint.map((symbol, index) => (
                        <Symbol key={symbol.text && index} src={symbol.src} text={symbol.text} />
                    ))}
                </>
            )}
        </>
    )
}

export default EuropeanIndices
