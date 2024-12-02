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
 * @interface GasPriceResponseDTOResultFast
 */
export interface GasPriceResponseDTOResultFast {
  /**
   *
   * @type {number}
   * @memberof GasPriceResponseDTOResultFast
   */
  gasPrice: number
  /**
   *
   * @type {number}
   * @memberof GasPriceResponseDTOResultFast
   */
  estimatedSeconds: number
}

export function GasPriceResponseDTOResultFastFromJSON(json: any): GasPriceResponseDTOResultFast {
  return GasPriceResponseDTOResultFastFromJSONTyped(json, false)
}

export function GasPriceResponseDTOResultFastFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GasPriceResponseDTOResultFast {
  if (json === undefined || json === null) {
    return json
  }
  return {
    gasPrice: json['gasPrice'],
    estimatedSeconds: json['estimatedSeconds'],
  }
}

export function GasPriceResponseDTOResultFastToJSON(value?: GasPriceResponseDTOResultFast | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    gasPrice: value.gasPrice,
    estimatedSeconds: value.estimatedSeconds,
  }
}