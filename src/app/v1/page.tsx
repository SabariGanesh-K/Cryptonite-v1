'use client'
import PageCard from '@/PageCard/PageCard'
import MarketMetrics from '@/shared/charts/MarketMetrics'
import CompanyHoldingsData from '@/shared/modules/CompanyHoldings'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function  MarketMetricsPage() {
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

