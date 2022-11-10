import { Trade, UniswapV2Trade } from '@swapr/sdk'

import { Settings } from 'react-feather'
import styled from 'styled-components'

import { AutoColumn } from '../../../components/Column'
import QuestionHelper from '../../../components/QuestionHelper'
import { AutoRow, RowBetween, RowFixed } from '../../../components/Row'
import { useToggleSettingsMenu } from '../../../state/application/hooks'
import { useUserSlippageTolerance } from '../../../state/user/hooks'
import { TYPE } from '../../../theme'
import { computeTradePriceBreakdown } from '../../../utils/prices'
import FormattedPriceImpact from './FormattedPriceImpact'

const StyledMenuIcon = styled(Settings)`
  height: 12px;
  width: 12px;
  margin-left: 3px;
  cursor: pointer;
`
const Spacer = styled.div`
  width: 16px;
  min-width: 16px;
`

function TradeSummary({ trade, allowedSlippage }: { trade: Trade; allowedSlippage: number }) {
  const { priceImpactWithoutFee } = computeTradePriceBreakdown(trade as UniswapV2Trade)
  const toggleSettings = useToggleSettingsMenu()
  // Formatting logic: allowedSlippage = 900 shows as 9%, 950 shows as 9.50%
  const formattedSlippage =
    (allowedSlippage / 100) % 1 !== 0 ? (allowedSlippage / 100).toFixed(2) : (allowedSlippage / 100).toFixed(0)

  return (
    <>
      <AutoColumn gap="8px">
        <RowBetween>
          <RowBetween>
            <TYPE.Body fontSize="12px" lineHeight="15px" fontWeight="500">
              Max slippage
            </TYPE.Body>
            <RowFixed>
              <TYPE.Body fontSize="12px" lineHeight="15px" fontWeight="500">
                {formattedSlippage}%
              </TYPE.Body>
              <StyledMenuIcon onClick={toggleSettings} id="open-settings-from-swap-dialog-button"></StyledMenuIcon>
            </RowFixed>
          </RowBetween>
          <Spacer />
          <RowBetween>
            <AutoRow>
              <TYPE.Body fontSize="12px" lineHeight="15px" fontWeight="500">
                Price impact
              </TYPE.Body>
              <QuestionHelper text="The difference between the market price and estimated price due to trade size." />
            </AutoRow>
            <RowFixed>
              <FormattedPriceImpact priceImpact={priceImpactWithoutFee} />
            </RowFixed>
          </RowBetween>
        </RowBetween>
      </AutoColumn>
    </>
  )
}

export interface AdvancedSwapDetailsProps {
  trade?: Trade
}

export function AdvancedSwapDetails({ trade }: AdvancedSwapDetailsProps) {
  const allowedSlippage = useUserSlippageTolerance()

  return trade ? <TradeSummary trade={trade} allowedSlippage={allowedSlippage} /> : null
}