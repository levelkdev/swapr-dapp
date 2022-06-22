import { useRouter } from 'hooks/useRouter'
import React, { useCallback, useState } from 'react'
import { ChevronDown } from 'react-feather'
import Skeleton from 'react-loading-skeleton'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Box, Flex, Text } from 'rebass'
import styled from 'styled-components'

import { ButtonPrimary, ButtonSecondary } from '../../../components/Button'
import { AutoColumn } from '../../../components/Column'
import DoubleCurrencyLogo from '../../../components/DoubleLogo'
import { SwapPoolTabs } from '../../../components/NavigationTabs'
import PairView from '../../../components/Pool/PairView'
import { RowBetween, RowFixed } from '../../../components/Row'
import { PairSearchModal } from '../../../components/SearchModal/PairSearchModal'
import { UndecoratedLink } from '../../../components/UndercoratedLink'
import { PairState, usePair } from '../../../data/Reserves'
import { useToken } from '../../../hooks/Tokens'
import { useLiquidityMiningFeatureFlag } from '../../../hooks/useLiquidityMiningFeatureFlag'
import { TYPE } from '../../../theme'
import { unwrappedToken } from '../../../utils/wrappedCurrency'
import { PageWrapper } from '../styleds'

const TitleRow = styled(RowBetween)`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
    flex-direction: column-reverse;
  `};
`

const PointableFlex = styled(Flex)`
  border: solid 1px ${props => props.theme.bg3};
  border-radius: 8px;
  height: 36px;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
`

const ResponsiveButtonPrimary = styled(ButtonPrimary)`
  width: fit-content;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
  `};
`

const ResponsiveButtonSecondary = styled(ButtonSecondary)`
  width: fit-content;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
  `};
`

const ButtonRow = styled(RowFixed)`
  gap: 12px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 8px;
  `};
`

type CurrencySearchParams = {
  currencyIdA: string
  currencyIdB: string
}

export default function Pair() {
  const { navigate, searchParams: search } = useRouter()
  const { currencyIdA, currencyIdB } = useParams<CurrencySearchParams>()

  const token0 = useToken(currencyIdA)
  const token1 = useToken(currencyIdB)
  const wrappedPair = usePair(token0 || undefined, token1 || undefined)

  const liquidityMiningEnabled = useLiquidityMiningFeatureFlag()
  const [openPairsModal, setOpenPairsModal] = useState(false)

  const handleAllClick = useCallback(() => {
    setOpenPairsModal(true)
  }, [])

  const handleModalClose = useCallback(() => {
    setOpenPairsModal(false)
  }, [])

  const handlePairSelect = useCallback(
    pair => {
      navigate(`/pools/${pair.token0.address}/${pair.token1.address}`)
    },
    [navigate]
  )

  if (token0 && (wrappedPair[0] === PairState.NOT_EXISTS || wrappedPair[0] === PairState.INVALID)) {
    return <Navigate to="/pools" replace />
  }

  return (
    <>
      <PageWrapper>
        <SwapPoolTabs active={'pool'} />

        <AutoColumn gap="lg" justify="center">
          <AutoColumn gap="lg" style={{ width: '100%' }}>
            <TitleRow style={{ marginTop: '1rem' }} padding={'0'}>
              <Flex alignItems="center">
                <Box mr="8px">
                  <UndecoratedLink to="/pools">
                    <TYPE.mediumHeader fontWeight="400" fontSize="26px" lineHeight="32px" color="text4">
                      Pairs
                    </TYPE.mediumHeader>
                  </UndecoratedLink>
                </Box>
                <Box mr="8px">
                  <TYPE.mediumHeader fontWeight="400" fontSize="26px" lineHeight="32px" color="text4">
                    /
                  </TYPE.mediumHeader>
                </Box>
                <PointableFlex onClick={handleAllClick}>
                  <Box mr="4px">
                    <DoubleCurrencyLogo
                      loading={!token0 || !token1}
                      currency0={token0 || undefined}
                      currency1={token1 || undefined}
                      size={20}
                    />
                  </Box>
                  <Box mr="4px">
                    <Text fontWeight="600" fontSize="16px" lineHeight="20px">
                      {!token0 || !token1 ? (
                        <Skeleton width="60px" />
                      ) : (
                        `${unwrappedToken(token0)?.symbol}/${unwrappedToken(token1)?.symbol}`
                      )}
                    </Text>
                  </Box>
                  <Box>
                    <ChevronDown size={12} />
                  </Box>
                </PointableFlex>
              </Flex>
              <ButtonRow>
                <ResponsiveButtonPrimary
                  id="join-pool-button"
                  as={Link}
                  padding="8px 14px"
                  to={{ pathname: '/pools/create', search: search.toString() }}
                >
                  <Text fontWeight={700} fontSize={12}>
                    CREATE PAIR
                  </Text>
                </ResponsiveButtonPrimary>
                {liquidityMiningEnabled && (
                  <ResponsiveButtonSecondary as={Link} padding="8px 14px" to="/liquidity-mining/create">
                    <Text fontWeight={700} fontSize={12} lineHeight="15px">
                      CREATE REWARDS
                    </Text>
                  </ResponsiveButtonSecondary>
                )}
              </ButtonRow>
            </TitleRow>
            <PairView loading={wrappedPair[1] === null} pair={wrappedPair[1]} />
          </AutoColumn>
        </AutoColumn>
      </PageWrapper>
      <PairSearchModal isOpen={openPairsModal} onDismiss={handleModalClose} onPairSelect={handlePairSelect} />
    </>
  )
}
