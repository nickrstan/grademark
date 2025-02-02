import { TradeDirection } from "./strategy";

/**
 * Represents a value at a particular time.
 */
export interface ITimestampedValue {
  /**
   * Timestamp of the value.
   */
  time: number | string;

  /**
   * The value at the time.
   */
  value: number;
}

/**
 * Interface that defines a trade.
 */
export interface ITrade {
  /**
   * The direction of the trade.
   * Long or short.
   */
  direction: TradeDirection;

  /***
   * Timestamp when the position was entered.
   */
  entryTime: number | string;

  /**
   * Price when the position was entered.
   */
  entryPrice: number;

  /**
   * Timestamp when the position was exited.
   */
  exitTime: number | string;

  /**
   * Price when the position was exited.
   */
  exitPrice: number;

  /**
   * Net profit or loss.
   */
  profit: number;

  /**
   * Profit expressed as a percentage.
   */
  profitPct: number;

  /**
   * Profit expressed as growth.
   */
  growth: number;

  /**
   * Optional risk computed from stop loss.
   */
  riskPct?: number;

  /**
   * Optional profit expressed as a mutiple of initial risk.
   */
  rmultiple?: number;

  /**
   * The series of risk% recorded over the holding period of the trade (if recording of this is enabled).
   */
  riskSeries?: ITimestampedValue[];

  /**
   * Number of bars the position was held for.
   */
  holdingPeriod: number;

  /**
   * The reason why we entered, defaults to 'entry-rule'
   */
  entryReason?: string;

  /**
   * The reason the position was exited.
   */
  exitReason: string;

  /**
   * Price where stop loss exit is triggered.
   */
  stopPrice?: number;

  /**
   * The series of stop prices recorded over the holding period of the trade (if recording of this is enabled).
   */
  stopPriceSeries?: ITimestampedValue[];

  /**
   * Price where profit target exit is triggered.
   */
  profitTarget?: number;

  /**
   * Highest price recorded while in an entry
   */
  maxPriceRecorded: number;
}
