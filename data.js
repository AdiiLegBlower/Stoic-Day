let imageCache = new Map()

export async function fetchQuotes() {
  try{
  let response = await fetch('https://stoic-quote-api.netlify.app/quotes.json')
  let data = await response.json()

  return data
  }catch(error){
  console.log("Unable to fetch quotes")
}
  
}

export async function fetchImages(name) {
  if (imageCache.has(name)) return imageCache.get(name)
    
  try {
    let url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`
    let response = await fetch(url)
    let data = await response.json()
    
    if(data.type == 'disambiguation') {
        const searchRes = await fetch(
            `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(name + " philosopher stoic")}&format=json&origin=*`
        )
        
        const searchData = await searchRes.json()
        const topTitle = searchData.query.search[0].title
        const betterRes = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topTitle)}`
        )
        let finalRes = await betterRes.json()
        imageCache.set(name, finalRes )
        return finalRes
    }
    imageCache.set(name, data)
    return data
  }catch {
    console.log("unable to fetch image")
  }
}

