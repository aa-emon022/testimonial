async function getData() {

    let HeroListBase = await fetch(process.env.BrandList + "api/HeroList");
    if (!HeroListBase.ok) {
      throw new error("Hero list calling fail");
    }
    return HeroListBase.json();
  }
  
  export default getData