import Products from '@/components/Store/Store/Products'
import Hero from '@/components/Store/Hero'
import React from 'react'
import Layout from '@/components/Store/Store/Layout'
import Shadow1 from '@/components/Store/Store/Shadows/Shadow1'
import Shadow2 from '@/components/Store/Store/Shadows/Shadow2'

function Store() {
  return (
    <div className='w-full h-full relative overflow-hidden px-[10px] lg:px-[24px]'>
        <Hero/>
        <Layout/>
        
        <Shadow1/>
        <Shadow2/>
    </div>
  )
}

export default Store