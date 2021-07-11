import fetch from "node-fetch";
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
 * ```
 */
export const getAssetPairTicker = async (pair: string) =>
  (await getAssetPairsTicker(pair))[pair];

/**
 * Get multiple asset pairs result in a signgle request
 *
 * @code
 * ```
 * const bitcoinEth = getAssetPairsTicker('XBTUSD', 'XETHXXBT');
 * console.log(bitcoinEth.XBTUSD);
 * ```
 */
export const getAssetPairsTicker = async <TKeys extends string>(
  ...pairs: TKeys[]
) => {
  const response = await getAssetPairTickerOriginal(...pairs);
  if (response.error && response.error.length) {
    return Promise.reject(response.error);
  }
  return convertToObjectNotation(response.result);
};
