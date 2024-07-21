'use client'
import PageCard from '@/PageCard/PageCard'
import MarketMetrics from '@/shared/charts/MarketMetrics'
import useDataLoader from '@/shared/hooks/useDataLoader'
import CompanyHoldingsData from '@/shared/modules/CompanyHoldings'
import { selectcoinHistoricData } from '@/store/slices/readDataSlice'
// import TrendingData from '@/shared/modules/TrendingData'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function  MarketMetricsPage() {
  // useDataLoader();


 

  const coinMarketData=useSelector(selectcoinHistoricData);
console.log("hehe",coinMarketData);
const router=useRouter()
  return (
    <>
      <PageCard>
      <title>CryptoNite | Yours Crypto partner</title>
      <MarketMetrics router={router}/>
      <CompanyHoldingsData/>
      </PageCard>
    </>
  )
}

