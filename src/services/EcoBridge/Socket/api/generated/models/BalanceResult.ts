/* tslint:disable */
/* eslint-disable */
/**
 * Movr Aggregator API
 * The Movr Aggregator API description
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime'
/**
 *
 * @export
 * @interface BalanceResult
 */
export interface BalanceResult {
  /**
   *
   * @type {number}
   * @memberof BalanceResult
   */
  chainId: number
  /**
   *
   * @type {string}
   * @memberof BalanceResult
   */
  address: string
  /**
   *
   * @type {string}
   * @memberof BalanceResult
   */
  name: string
  /**
   *
   * @type {string}
   * @memberof BalanceResult
   */
  symbol: string
  /**
   *
   * @type {number}
   * @memberof BalanceResult
   */
  decimals: number
  /**
   *
   * @type {number}
   * @memberof BalanceResult
   */
  price: number
  /**
   *
   * @type {number}
   * @memberof BalanceResult
   */
  amount: number
  /**
   *
   * @type {string}
   * @memberof BalanceResult
   */
  currency: string
}

export function BalanceResultFromJSON(json: any): BalanceResult {
  return BalanceResultFromJSONTyped(json, false)
}

export function BalanceResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): BalanceResult {
  if (json === undefined || json === null) {
    return json
  }
  return {
    chainId: json['chainId'],
    address: json['address'],
    name: json['name'],
    symbol: json['symbol'],
    decimals: json['decimals'],
    price: json['price'],
    amount: json['amount'],
    currency: json['currency'],
  }
}

export function BalanceResultToJSON(value?: BalanceResult | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    chainId: value.chainId,
    address: value.address,
    name: value.name,
    symbol: value.symbol,
    decimals: value.decimals,
    price: value.price,
    amount: value.amount,
    currency: value.currency,
  }
}
