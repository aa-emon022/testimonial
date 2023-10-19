import React from 'react'

async function FeaturedProjectdata() {
    const data= await fetch(process.env.BrandList + "api/FeaturedProject")
    if (!data.ok){
        throw new error ("Hero list calling fail")}
  return data.json()
}

export default FeaturedProjectdata