/// <reference lib="DOM" />
import { convertToObjectNotation } from "./pairConversion";

/**
 * Get current original kraken asset pairs result
 *
 * @code
 * ```
 * const bitcoin = getAssetPairTickerOriginal('XBTUSD');
 * const bitcoinEth = getAssetPairTickerOriginal('XBTUSD', 'XETHXXBT');
 * ```
 */
export const getAssetPairTickerOriginal = async (...pairs: string[]) => {
  const request = await fetch(
    "https://api.kraken.com/0/public/Ticker?pair=" + pairs.join(",")
  );
  const response = await request.text();
  return JSON.parse(response.replace(/\%$/, "")) as {
    error: string[];
    result: { [key: string]: import("../types").PublicTickerResponse };
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
export const getAssetPairTicker = async (...pairs: string[]) => {
  const response = await module.exports.getAssetPairTickerOriginal(pairs);
  return {
    error: response.error,
    result: convertToObjectNotation(response.result),
  };
};
