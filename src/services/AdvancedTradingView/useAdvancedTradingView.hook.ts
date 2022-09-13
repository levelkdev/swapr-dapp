import { ChainId, Currency, Token, WETH, WXDAI } from '@swapr/sdk'

import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useActiveWeb3React } from '../../hooks'
import { useToken } from '../../hooks/Tokens'
import store, { AppState } from '../../state'
import { useSwapState } from '../../state/swap/hooks'
import { adapters } from './adapters/adapters.config'
import { AdvancedTradingViewAdapter } from './adapters/advancedTradingView.adapter'
import { sortsBeforeTokens } from './advancedTradingView.selectors'
import { AdapterAmountToFetch } from './advancedTradingView.types'

const WrappedNativeCurrencyAddress = {
  [ChainId.MAINNET]: WETH[ChainId.MAINNET].address,
  [ChainId.ARBITRUM_ONE]: WETH[ChainId.ARBITRUM_ONE].address,
  [ChainId.GNOSIS]: WXDAI[ChainId.GNOSIS].address,
}

const getTokenAddress = (chainId: ChainId, tokenAddress: string | undefined) =>
  tokenAddress === Currency.getNative(chainId).symbol
    ? WrappedNativeCurrencyAddress[chainId as ChainId.MAINNET | ChainId.ARBITRUM_ONE | ChainId.GNOSIS]
    : tokenAddress

export const useAdvancedTradingView = () => {
  const { chainId } = useActiveWeb3React()

  const navigate = useNavigate()

  const [pairTokens, setPairTokens] = useState<Token[]>([])

  const [activeCurrencyOption, setActiveCurrencyOption] = useState<Token>()

  const [advancedTradingViewAdapter, setAdvancedTradingViewAdapter] = useState<AdvancedTradingViewAdapter<AppState>>()

  const [symbol, setSymbol] = useState<string>()

  const previousTokens = useRef<{ inputTokenAddress?: string; outputTokenAddress?: string }>({
    inputTokenAddress: undefined,
    outputTokenAddress: undefined,
  })

  const [isLoadingTrades, setIsLoadingTrades] = useState(false)
  const [isLoadingActivity, setIsLoadingActivity] = useState(false)

  const dispatch = useDispatch()

  const {
    INPUT: { currencyId: inputCurrencyId },
    OUTPUT: { currencyId: outputCurrencyId },
  } = useSwapState()

  const [inputToken, outputToken] = [
    useToken(getTokenAddress(chainId as ChainId, inputCurrencyId)),
    useToken(getTokenAddress(chainId as ChainId, outputCurrencyId)),
  ]

  useEffect(() => {
    if (!advancedTradingViewAdapter && chainId) {
      const tradesHistoryAdapter = new AdvancedTradingViewAdapter<AppState>({
        adapters,
        chainId,
        store,
      })
      setAdvancedTradingViewAdapter(tradesHistoryAdapter)
    }

    if (advancedTradingViewAdapter) {
      if (advancedTradingViewAdapter.isInitialized && chainId) {
        advancedTradingViewAdapter.updateActiveChainId(chainId)
      } else {
        advancedTradingViewAdapter.init()
      }
    }
  }, [chainId, advancedTradingViewAdapter])

  useEffect(() => {
    if (inputToken && outputToken) {
      const sortedTokens = sortsBeforeTokens(inputToken, outputToken)

      setPairTokens(sortedTokens)

      setActiveCurrencyOption(sortedTokens[0])
    }
  }, [inputToken, outputToken])

  useEffect(() => {
    const fetchTrades = async () => {
      if (!advancedTradingViewAdapter || !inputToken || !outputToken) return

      advancedTradingViewAdapter.setPairTokens(inputToken, outputToken)

      if (
        // do not fetch data if user reversed pair
        previousTokens.current.inputTokenAddress !== outputToken.address.toLowerCase() ||
        previousTokens.current.outputTokenAddress !== inputToken.address.toLowerCase()
      ) {
        setSymbol(`${inputToken.symbol}${outputToken.symbol}`)
        setIsLoadingTrades(true)
        setIsLoadingActivity(true)

        try {
          await Promise.allSettled([
            advancedTradingViewAdapter.fetchPairTrades({
              inputToken,
              outputToken,
              amountToFetch: AdapterAmountToFetch.pairTrades,
              isFirstFetch: true,
            }),
            advancedTradingViewAdapter.fetchPairActivity({
              inputToken,
              outputToken,
              amountToFetch: AdapterAmountToFetch.pairActivity,
              isFirstFetch: true,
            }),
          ])
        } catch (e) {
          console.error(e)
        } finally {
          setIsLoadingTrades(false)
          setIsLoadingActivity(false)
        }
      }

      const fromTokenAddress = inputToken.address.toLowerCase()
      const toTokenAddress = outputToken.address.toLowerCase()

      previousTokens.current = {
        inputTokenAddress: fromTokenAddress,
        outputTokenAddress: toTokenAddress,
      }
    }

    fetchTrades()
  }, [dispatch, inputToken, outputToken, advancedTradingViewAdapter])

  const handleAddLiquidity = () => {
    if (inputToken && outputToken) {
      navigate({ pathname: `/pools/add/${inputToken.address}/${outputToken.address}` })
    }
  }

  const handleSwitchCurrency = (option: Token) => {
    if (activeCurrencyOption?.address !== option.address) {
      setActiveCurrencyOption(option)
    }
  }

  const fetchTrades = async () => {
    if (!advancedTradingViewAdapter || !inputToken || !outputToken) return

    setIsLoadingTrades(true)
    try {
      await advancedTradingViewAdapter.fetchPairTrades({
        inputToken,
        outputToken,
        amountToFetch: AdapterAmountToFetch.pairTrades,
        isFirstFetch: false,
      })
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoadingTrades(false)
    }
  }

  const fetchActivity = async () => {
    if (!advancedTradingViewAdapter || !inputToken || !outputToken) return

    setIsLoadingActivity(true)
    try {
      await advancedTradingViewAdapter.fetchPairActivity({
        inputToken,
        outputToken,
        amountToFetch: AdapterAmountToFetch.pairActivity,
        isFirstFetch: false,
      })
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoadingActivity(false)
    }
  }

  return {
    symbol,
    pairTokens,
    showTrades: Boolean(inputToken && outputToken),
    chainId,
    inputTokenSymbol: inputToken?.symbol ?? '',
    outputTokenSymbol: outputToken?.symbol ?? '',
    fetchTrades,
    fetchActivity,
    isLoadingTrades,
    isLoadingActivity,
    handleAddLiquidity,
    handleSwitchCurrency,
    activeCurrencyOption,
  }
}
