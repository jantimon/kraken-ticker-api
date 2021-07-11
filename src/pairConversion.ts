import { PublicTickerResponse, ObjectTickerResponse } from "./response-types";

export const convertToObjectNotation = <TKeys extends string>(
  responseResult: {
    [key in TKeys]: PublicTickerResponse;
  }
) => {
  const result = {} as { [key in TKeys]: ObjectTickerResponse };
  Object.entries<PublicTickerResponse>(responseResult).forEach(
    ([pair, pairResult]) => {
      result[pair as TKeys] = {
        ask: {
          price: pairResult.a[0],
          wholeLotVolume: pairResult.a[1],
          lotVolume: pairResult.a[2],
        },
        bid: {
          price: pairResult.b[0],
          wholeLotVolume: pairResult.b[1],
          lotVolume: pairResult.b[2],
        },
        lastClosedTrade: { price: pairResult.c[0], lotVolume: pairResult.c[1] },
        volume: { today: pairResult.v[0], last24h: pairResult.v[1] },
        volumeWeightedAvarage: {
          today: pairResult.p[0],
          last24h: pairResult.p[1],
        },
        tradeCount: { today: pairResult.t[0], last24h: pairResult.t[1] },
        low: { today: pairResult.l[0], last24h: pairResult.l[1] },
        heigh: { today: pairResult.h[0], last24h: pairResult.h[1] },
        openingPrice: pairResult.o,
      };
    }
  );
  return result;
};
