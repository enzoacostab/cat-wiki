export async function fetchBreed(breedId: string) {
  const data = await fetch(`https://api.thecatapi.com/v1/images/search?limit=9&breed_ids=${breedId}`, {
    headers: {
      'x-api-key': process.env.API_KEY ?? ''
    }
  })
  const cats = await data.json()
  console.log(cats);
  
  const breed = cats[0].breeds[0]
  const properties = ['adaptability', 'affection_level', 'child_friendly', 'grooming', 'intelligence', 'health_issues', 'social_needs', 'stranger_friendly']
  return { cats, breed, properties }
}

export async function fetchMostSearchedBreeds() {
  const data = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&breed_ids=${mostSearchedBreeds.map(e => e[1]).join(',')}`, {
    headers: {
      'x-api-key': process.env.API_KEY ?? ''
    }
  })
  let cats = await data.json()
  cats = cats.filter((cat: any, i: number) => 
    cats.findIndex((e: any) => e.breeds[0].name === cat.breeds[0].name) === i)
  
  return { cats }
}

export const breeds = [
  [ 'Abyssinian', 'abys' ],
  [ 'Aegean', 'aege' ],
  [ 'American Bobtail', 'abob' ],
  [ 'American Curl', 'acur' ],
  [ 'American Shorthair', 'asho' ],
  [ 'American Wirehair', 'awir' ],
  [ 'Arabian Mau', 'amau' ],
  [ 'Australian Mist', 'amis' ],
  [ 'Balinese', 'bali' ],
  [ 'Bambino', 'bamb' ],
  [ 'Bengal', 'beng' ],
  [ 'Birman', 'birm' ],
  [ 'Bombay', 'bomb' ],
  [ 'British Longhair', 'bslo' ],
  [ 'British Shorthair', 'bsho' ],
  [ 'Burmese', 'bure' ],
  [ 'Burmilla', 'buri' ],
  [ 'California Spangled', 'cspa' ],
  [ 'Chantilly-Tiffany', 'ctif' ],
  [ 'Chartreux', 'char' ],
  [ 'Chausie', 'chau' ],
  [ 'Cheetoh', 'chee' ],
  [ 'Colorpoint Shorthair', 'csho' ],
  [ 'Cornish Rex', 'crex' ],
  [ 'Cymric', 'cymr' ],
  [ 'Cyprus', 'cypr' ],
  [ 'Devon Rex', 'drex' ],
  [ 'Donskoy', 'dons' ],
  [ 'Dragon Li', 'lihu' ],
  [ 'Egyptian Mau', 'emau' ],
  [ 'European Burmese', 'ebur' ],
  [ 'Exotic Shorthair', 'esho' ],
  [ 'Havana Brown', 'hbro' ],
  [ 'Himalayan', 'hima' ],
  [ 'Japanese Bobtail', 'jbob' ],
  [ 'Javanese', 'java' ],
  [ 'Khao Manee', 'khao' ],
  [ 'Korat', 'kora' ],
  [ 'Kurilian', 'kuri' ],
  [ 'LaPerm', 'lape' ],
  [ 'Maine Coon', 'mcoo' ],
  [ 'Malayan', 'mala' ],
  [ 'Manx', 'manx' ],
  [ 'Munchkin', 'munc' ],
  [ 'Nebelung', 'nebe' ],
  [ 'Norwegian Forest Cat', 'norw' ],
  [ 'Ocicat', 'ocic' ],
  [ 'Oriental', 'orie' ],
  [ 'Persian', 'pers' ],
  [ 'Pixie-bob', 'pixi' ],
  [ 'Ragamuffin', 'raga' ],
  [ 'Ragdoll', 'ragd' ],
  [ 'Russian Blue', 'rblu' ],
  [ 'Savannah', 'sava' ],
  [ 'Scottish Fold', 'sfol' ],
  [ 'Selkirk Rex', 'srex' ],
  [ 'Siamese', 'siam' ],
  [ 'Siberian', 'sibe' ],
  [ 'Singapura', 'sing' ],
  [ 'Snowshoe', 'snow' ],
  [ 'Somali', 'soma' ],
  [ 'Sphynx', 'sphy' ],
  [ 'Tonkinese', 'tonk' ],
  [ 'Toyger', 'toyg' ],
  [ 'Turkish Angora', 'tang' ],
  [ 'Turkish Van', 'tvan' ],
  [ 'York Chocolate', 'ycho' ]
]

const mostSearchedBreeds = [
  [ 'American Bobtail', 'abob' ],
  [ 'Birman', 'birm' ],
  [ 'Manx', 'manx' ],
  [ 'Persian', 'pers' ],
  [ 'Ragdoll', 'ragd' ],
  [ 'Russian Blue', 'rblu' ],
  [ 'Siberian', 'sibe' ],
  [ 'Somali', 'soma' ],
  [ 'Siamese', 'siam' ],
  [ 'Maine Coon', 'mcoo' ],
]
