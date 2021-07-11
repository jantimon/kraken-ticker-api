export interface PublicTickerResponse {
    /** ask array(<price>, <whole lot volume>, <lot volume>) */
    a: [string, string, string],
    /** bid array(<price>, <whole lot volume>, <lot volume>) */
    b: [string, string, string],
    /** last trade closed array(<price>, <lot volume>) */
    c: [string, string],
    /** volume array(<today>, <last 24 hours>) */
    v: [string, string],
    /** volume weighted average price array(<today>, <last 24 hours>) */
    p: [string, string],
    /** number of trades array(<today>, <last 24 hours>) */
    t: [string, string],
    /** low array(<today>, <last 24 hours>) */
    l: [string, string],
    /** high array(<today>, <last 24 hours>) */
    h: [string, string],
    /** today’s opening price */
    o: string,
}

export interface ObjectTickerResponse {
    /** from ticker.a */
    ask: { price: string, wholeLotVolume: string, lotVolume: string },
    /** from ticker.b */
    bid: { price: string, wholeLotVolume: string, lotVolume: string },
    /** from ticker.c */
    lastClosedTrade: { price: string, lotVolume: string },
    /** from ticker.v */
    volume: { today: string, last24h: string },
    /** from ticker.p */
    volumeWeightedAvarage: { today: string, last24h: string },
    /** from ticker.t */
    tradeCount: { today: string, last24h: string },
    /** from ticker.l */
    low: { today: string, last24h: string },
    /** from ticker.h */
    heigh: { today: string, last24h: string },
    /** from ticker.o */
    openingPrice: string
}