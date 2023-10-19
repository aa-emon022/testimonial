import React from 'react'

export default async function siteMeta() {

    const SocialLinkData= await fetch(process.env.BrandList+ "api/SiteMeta/home")


return SocialLinkData.json()
 
}
