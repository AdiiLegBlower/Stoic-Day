
export async function fetchQuotes() {
  try{
  let response = await fetch('http://localhost:3000/quote')
  let data = response.json()

  return data
  }catch(error){
  console.log("Unable to fetch quotes")
}
  
}

export async function fetchImages(name) {
  try {
    let url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`
    let response = await fetch(url)
    let data = await response.json()
    return data
  }catch {
    console.log("unable to fetch image")
  }
}
