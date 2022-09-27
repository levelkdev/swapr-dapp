/*
 * This file is autogenerated, do NOT edit
 */
export type FathomRegisteredEventName =
  | 'test3'
  | 'ethereum/ecoRouter/0x/volumeUSD'
  | 'polygon/ecoRouter/0x/volumeUSD'
  | 'ethereum/ecoRouter/curve/volumeUSD'
  | 'ethereum/ecoRouter/cow/volumeUSD'
  | 'gnosis/ecoRouter/curve/volumeUSD'
  | 'gnosis/ecoRouter/cow/volumeUSD'
  | 'arbitrum/ecoRouter/curve/volumeUSD'
  | 'arbitrum/ecoRouter/uniswap/volumeUSD'
  | 'polygon/ecoRouter/uniswap/volumeUSD'
  | 'ethereum/ecoRouter/uniswap/volumeUSD'
  | 'optimism/ecoRouter/uniswap/volumeUSD'
  | 'ethereum/ecoRouter/swapr/volumeUSD'
  | 'rinkeby/ecoRouter/swapr/volumeUSD'
  | 'arbitrum-rinkeby/ecoRouter/swapr/volumeUSD'
  | 'arbitrum/ecoRouter/swapr/volumeUSD'
  | 'gnosis/ecoRouter/swapr/volumeUSD'
  | 'arbitrum-goerli/ecoRouter/swapr/volumeUSD'
  | 'goerli/ecoRouter/swapr/volumeUSD'
  | 'rinkeby/ecoRouter/uniswap/volumeUSD'
  | 'ethereum/ecoRouter/sushiswap/volumeUSD'
  | 'arbitrum/ecoRouter/sushiswap/volumeUSD'
  | 'rinkeby/ecoRouter/sushiswap/volumeUSD'
  | 'polygon/ecoRouter/quickswap/volumeUSD'
  | 'polygon/ecoRouter/sushiswap/volumeUSD'
  | 'gnosis/ecoRouter/baoswap/volumeUSD'
  | 'gnosis/ecoRouter/levinswap/volumeUSD'
  | 'gnosis/ecoRouter/honeyswap/volumeUSD'
  | 'polygon/ecoRouter/dfyn/volumeUSD'
  | 'testing-a'
  | 'ethereum-1/ecoRouter/0x/volumeUSD'
  | 'polygon-137/ecoRouter/0x/volumeUSD'
  | 'ethereum-1/ecoRouter/curve/volumeUSD'
  | 'gnosis-100/ecoRouter/curve/volumeUSD'
  | 'ethereum-1/ecoRouter/cow/volumeUSD'
  | 'arbitrum-42161/ecoRouter/curve/volumeUSD'
  | 'gnosis-100/ecoRouter/cow/volumeUSD'
  | 'arbitrum-42161/ecoRouter/uniswap/volumeUSD'
  | 'ethereum-1/ecoRouter/uniswap/volumeUSD'
  | 'polygon-137/ecoRouter/uniswap/volumeUSD'
  | 'ethereum-1/ecoRouter/swapr/volumeUSD'
  | 'arbitrum-42161/ecoRouter/swapr/volumeUSD'
  | 'rinkeby-4/ecoRouter/swapr/volumeUSD'
  | 'optimism-10/ecoRouter/uniswap/volumeUSD'
  | 'arbitrum-rinkeby-421611/ecoRouter/swapr/volumeUSD'
  | 'goerli-5/ecoRouter/swapr/volumeUSD'
  | 'arbitrum-goerli-421613/ecoRouter/swapr/volumeUSD'
  | 'gnosis-100/ecoRouter/swapr/volumeUSD'
  | 'rinkeby-4/ecoRouter/sushiswap/volumeUSD'
  | 'polygon-137/ecoRouter/sushiswap/volumeUSD'
  | 'arbitrum-42161/ecoRouter/sushiswap/volumeUSD'
  | 'rinkeby-4/ecoRouter/uniswap/volumeUSD'
  | 'ethereum-1/ecoRouter/sushiswap/volumeUSD'
  | 'gnosis-100/ecoRouter/baoswap/volumeUSD'
  | 'polygon-137/ecoRouter/quickswap/volumeUSD'
  | 'gnosis-100/ecoRouter/honeyswap/volumeUSD'
  | 'polygon-137/ecoRouter/dfyn/volumeUSD'
  | 'gnosis-100/ecoRouter/levinswap/volumeUSD'
export type FathomRegisteredNetworkName =
  | 'ethereum'
  | 'rinkeby'
  | 'goerli'
  | 'optimism'
  | 'gnosis'
  | 'polygon'
  | 'arbitrum'
  | 'arbitrum-rinkeby'
  | 'arbitrum-goerli'

export interface FathomSiteEvent {
  id: string
  object: 'event'
  name: FathomRegisteredEventName
  currency: string | null
  created_at: string
}

export interface FathomSiteInformation {
  siteId: string
  events: FathomSiteEvent[]
  timestamp: string
}

/**
 * Site information and events
 */
export const siteEvents: FathomSiteInformation = {
  siteId: 'UKSJTHLZ',
  events: [
    {
      id: '0J1T3NQ1',
      object: 'event',
      name: 'test3',
      currency: null,
      created_at: '2022-09-13 14:30:56',
    },
    {
      id: 'AIR5NWYE',
      object: 'event',
      name: 'ethereum/ecoRouter/0x/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:01:57',
    },
    {
      id: 'MC3SRP60',
      object: 'event',
      name: 'polygon/ecoRouter/0x/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:01:58',
    },
    {
      id: 'PXPQR9T9',
      object: 'event',
      name: 'ethereum/ecoRouter/curve/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:01:58',
    },
    {
      id: '0M0NGDDW',
      object: 'event',
      name: 'ethereum/ecoRouter/cow/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:01:59',
    },
    {
      id: 'BXBUZTZL',
      object: 'event',
      name: 'gnosis/ecoRouter/curve/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:01:59',
    },
    {
      id: 'GGOEIDJ7',
      object: 'event',
      name: 'gnosis/ecoRouter/cow/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:01:59',
    },
    {
      id: 'V2SC2O4Z',
      object: 'event',
      name: 'arbitrum/ecoRouter/curve/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:01:59',
    },
    {
      id: '7UQR6YX1',
      object: 'event',
      name: 'arbitrum/ecoRouter/uniswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:00',
    },
    {
      id: 'D41V4M74',
      object: 'event',
      name: 'polygon/ecoRouter/uniswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:00',
    },
    {
      id: 'FVWFZYYK',
      object: 'event',
      name: 'ethereum/ecoRouter/uniswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:00',
    },
    {
      id: 'BVYGVYUL',
      object: 'event',
      name: 'optimism/ecoRouter/uniswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:01',
    },
    {
      id: 'D45FUHMM',
      object: 'event',
      name: 'ethereum/ecoRouter/swapr/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:01',
    },
    {
      id: 'XBWFVANV',
      object: 'event',
      name: 'rinkeby/ecoRouter/swapr/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:01',
    },
    {
      id: 'APG4SBOB',
      object: 'event',
      name: 'arbitrum-rinkeby/ecoRouter/swapr/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:02',
    },
    {
      id: 'ETIMJ46Z',
      object: 'event',
      name: 'arbitrum/ecoRouter/swapr/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:02',
    },
    {
      id: 'G3PAXUZ7',
      object: 'event',
      name: 'gnosis/ecoRouter/swapr/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:02',
    },
    {
      id: 'JWWZNNZK',
      object: 'event',
      name: 'arbitrum-goerli/ecoRouter/swapr/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:02',
    },
    {
      id: 'L35N5XKY',
      object: 'event',
      name: 'goerli/ecoRouter/swapr/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:02',
    },
    {
      id: '48HCUX0D',
      object: 'event',
      name: 'rinkeby/ecoRouter/uniswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:03',
    },
    {
      id: 'JOFFWGKB',
      object: 'event',
      name: 'ethereum/ecoRouter/sushiswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:03',
    },
    {
      id: 'KSHLFCO3',
      object: 'event',
      name: 'arbitrum/ecoRouter/sushiswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:03',
    },
    {
      id: 'TVV23FHB',
      object: 'event',
      name: 'rinkeby/ecoRouter/sushiswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:03',
    },
    {
      id: '2MDMT2PM',
      object: 'event',
      name: 'polygon/ecoRouter/quickswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:04',
    },
    {
      id: '5NBAZ28X',
      object: 'event',
      name: 'polygon/ecoRouter/sushiswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:04',
    },
    {
      id: 'B0QT9EU4',
      object: 'event',
      name: 'gnosis/ecoRouter/baoswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:04',
    },
    {
      id: 'II5APL1M',
      object: 'event',
      name: 'gnosis/ecoRouter/levinswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:04',
    },
    {
      id: 'XFYWEXNX',
      object: 'event',
      name: 'gnosis/ecoRouter/honeyswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:04',
    },
    {
      id: 'PCQRKEBE',
      object: 'event',
      name: 'polygon/ecoRouter/dfyn/volumeUSD',
      currency: null,
      created_at: '2022-09-15 09:02:05',
    },
    {
      id: 'XLYXX1EB',
      object: 'event',
      name: 'testing-a',
      currency: null,
      created_at: '2022-09-15 10:31:26',
    },
    {
      id: 'KVRBAQC9',
      object: 'event',
      name: 'ethereum-1/ecoRouter/0x/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:38',
    },
    {
      id: 'TVEUMJ00',
      object: 'event',
      name: 'polygon-137/ecoRouter/0x/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:39',
    },
    {
      id: 'W3IFVW1S',
      object: 'event',
      name: 'ethereum-1/ecoRouter/curve/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:39',
    },
    {
      id: '1IQG9TKJ',
      object: 'event',
      name: 'gnosis-100/ecoRouter/curve/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:40',
    },
    {
      id: '8CLPLWYM',
      object: 'event',
      name: 'ethereum-1/ecoRouter/cow/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:40',
    },
    {
      id: 'BROYCRPG',
      object: 'event',
      name: 'arbitrum-42161/ecoRouter/curve/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:40',
    },
    {
      id: 'PHIBN4UO',
      object: 'event',
      name: 'gnosis-100/ecoRouter/cow/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:40',
    },
    {
      id: '1LXBN7HE',
      object: 'event',
      name: 'arbitrum-42161/ecoRouter/uniswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:41',
    },
    {
      id: '26FNHTTP',
      object: 'event',
      name: 'ethereum-1/ecoRouter/uniswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:41',
    },
    {
      id: '5XPDPDQI',
      object: 'event',
      name: 'polygon-137/ecoRouter/uniswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:42',
    },
    {
      id: '6TOPUD4K',
      object: 'event',
      name: 'ethereum-1/ecoRouter/swapr/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:42',
    },
    {
      id: 'XCTWFOMS',
      object: 'event',
      name: 'arbitrum-42161/ecoRouter/swapr/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:42',
    },
    {
      id: 'XNX2EEDZ',
      object: 'event',
      name: 'rinkeby-4/ecoRouter/swapr/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:42',
    },
    {
      id: 'YIHCLY5V',
      object: 'event',
      name: 'optimism-10/ecoRouter/uniswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:42',
    },
    {
      id: 'DOVJYKTT',
      object: 'event',
      name: 'arbitrum-rinkeby-421611/ecoRouter/swapr/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:43',
    },
    {
      id: 'JVJCQICA',
      object: 'event',
      name: 'goerli-5/ecoRouter/swapr/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:43',
    },
    {
      id: 'RTEWHDO7',
      object: 'event',
      name: 'arbitrum-goerli-421613/ecoRouter/swapr/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:43',
    },
    {
      id: 'SAAJDMLE',
      object: 'event',
      name: 'gnosis-100/ecoRouter/swapr/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:43',
    },
    {
      id: 'EZAY6QHV',
      object: 'event',
      name: 'rinkeby-4/ecoRouter/sushiswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:44',
    },
    {
      id: 'JRNNO6ZI',
      object: 'event',
      name: 'polygon-137/ecoRouter/sushiswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:44',
    },
    {
      id: 'KYRMCEWB',
      object: 'event',
      name: 'arbitrum-42161/ecoRouter/sushiswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:44',
    },
    {
      id: 'NAESBDWJ',
      object: 'event',
      name: 'rinkeby-4/ecoRouter/uniswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:44',
    },
    {
      id: 'RNZ1YK0X',
      object: 'event',
      name: 'ethereum-1/ecoRouter/sushiswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:44',
    },
    {
      id: 'BO3ERN2M',
      object: 'event',
      name: 'gnosis-100/ecoRouter/baoswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:45',
    },
    {
      id: 'CCKCRJ3P',
      object: 'event',
      name: 'polygon-137/ecoRouter/quickswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:45',
    },
    {
      id: 'GXKKCYYF',
      object: 'event',
      name: 'gnosis-100/ecoRouter/honeyswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:45',
    },
    {
      id: 'KRNDVLCB',
      object: 'event',
      name: 'polygon-137/ecoRouter/dfyn/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:45',
    },
    {
      id: 'W1XWQ3H6',
      object: 'event',
      name: 'gnosis-100/ecoRouter/levinswap/volumeUSD',
      currency: null,
      created_at: '2022-09-15 10:35:45',
    },
  ],
  timestamp: '2022-09-20T10:20:02.257Z',
}

/**
 * Get site event by name
 */
export function getEventId(event: FathomRegisteredEventName): string | undefined {
  return siteEvents.events.find(siteEvent => siteEvent.name === event)?.id
}

/**
 * Map of networkId to network name
 */
export const networkIdToNameMap: Record<number, string> = {
  '1': 'ethereum',
  '4': 'rinkeby',
  '5': 'goerli',
  '10': 'optimism',
  '100': 'gnosis',
  '137': 'polygon',
  '42161': 'arbitrum',
  '421611': 'arbitrum-rinkeby',
  '421613': 'arbitrum-goerli',
}

/**
 * Returns network name using chainId
 */
export function getNetworkNameByChainId(chainId: number): string {
  return networkIdToNameMap[chainId]
}

/**
 * Constructs EcoRouter volumeUSD event name
 */
export function getEcoRouterVolumeUSDEventName(networkName: string, networkId: number, platformName: string): string {
  return `${networkName.toLowerCase()}-${networkId}/ecoRouter/${platformName.toLowerCase()}/volumeUSD`
}
