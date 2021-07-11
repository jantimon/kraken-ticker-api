# Kraken Ticker API

Get the latest Kraken Coin prices using the [public kraken API](https://docs.kraken.com/rest/#operation/getTickerInformation).

## Installation

```
npm i kraken-ticker-api node-fetch
```

## Get Ticker Information

Get the latest ticker stats for an asset.  
The latest asset names can be retrieved from https://api.kraken.com/0/public/AssetPairs

```ts
import { getAssetPairTicker, getAssetPairsTicker } from "kraken-ticker-api";

console.log(await getAssetPairTicker('XBTUSD'));

// Fetch multiple assets with a single request
console.log(await getAssetPairsTicker('XBTUSD', 'XETHXXBT'));
```

## Ticker Response

```ts
interface ObjectTickerResponse {
    ask: { price: string, wholeLotVolume: string, lotVolume: string },
    bid: { price: string, wholeLotVolume: string, lotVolume: string },
    lastClosedTrade: { price: string, lotVolume: string },
    volume: { today: string, last24h: string },
    volumeWeightedAvarage: { today: string, last24h: string },
    tradeCount: { today: string, last24h: string },
    low: { today: string, last24h: string },
    heigh: { today: string, last24h: string },
    openingPrice: string
}
```


## Changelog

Take a look at the [CHANGELOG.md](https://github.com/jantimon/kraken-ticker-api/tree/master/CHANGELOG.md).

## Contribution

You're free to contribute to this project by submitting [issues](https://github.com/jantimon/kraken-ticker-api/issues) and/or [pull requests](https://github.com/jantimon/kraken-ticker-api/pulls).

Please keep in mind that every change and new feature should be covered by
tests.

## License

This project is licensed under [MIT](https://github.com/jantimon/kraken-ticker-api/blob/master/LICENSE).

