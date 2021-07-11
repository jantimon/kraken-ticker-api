/// <reference lib="DOM" />
import { convertToObjectNotation } from "./pairConversion";
import { PublicTickerResponse } from "./response-types";

/**
 * Get current original kraken asset pairs result
 *
 * @code
 * ```
 * const bitcoin = getAssetPairTickerOriginal('XBTUSD');
 * const bitcoinEth = getAssetPairTickerOriginal('XBTUSD', 'XETHXXBT');
 * ```
 */
export const getAssetPairTickerOriginal = async <TKeys extends string>(
  ...pairs: TKeys[]
) => {
  const request = await fetch(
    "https://api.kraken.com/0/public/Ticker?pair=" + pairs.join(",")
  );
  const response = await request.text();
  return JSON.parse(response.replace(/\%$/, "")) as {
    error: string[];
    result: { [key in TKeys]: PublicTickerResponse };
  };
};

/**
 * Get current asset pairs result
 *
 * @code
 * ```
 * const bitcoin = getAssetPairTicker('XBTUSD');
 * const bitcoinEth = getAssetPairTicker('XBTUSD', 'XETHXXBT');
 * ```
 */
export const getAssetPairTicker = async <TKeys extends string>(
  ...pairs: TKeys[]
) => {
  const response = await getAssetPairTickerOriginal(...pairs);
  return {
    error: response.error,
    result: convertToObjectNotation(response.result),
  };
};
