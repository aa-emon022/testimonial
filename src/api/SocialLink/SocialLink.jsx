import React from 'react'
async function SocialLink() {
const SocialLinkData= await fetch(process.env.BrandList+ "api/TeamList")


return SocialLinkData.json()
}

export default SocialLink