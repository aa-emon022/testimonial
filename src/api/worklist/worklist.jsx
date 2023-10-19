async function getData() {

    let WorkListBase = await fetch(process.env.BrandList + "api/WorkList");
    if (!WorkListBase.ok) {
      throw new error("Hero list calling fail");
    }
    return WorkListBase.json();
  }
  
  export default getData