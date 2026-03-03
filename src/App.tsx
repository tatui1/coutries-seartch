import { useState, useEffect} from 'react'
import {Sidebar} from './components/Sidebar'
import type { IContryShort, ICountryFull } from './types'
import {BASE_URL} from './constans'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { CountryInfo } from './components/CountryInfo'
import CircularProgress from '@mui/material/CircularProgress'


function App() {
  const [countriesList, setCountriesList] = useState<IContryShort[]>([])
  const [selectedCountry, setSelectedCountry] = useState<ICountryFull | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const getContries = async() => {
      try{
        const response = await fetch(`${BASE_URL}/all?fields=alpha3Code,name`)
        if (!response.ok) {
          throw new Error
        }
        const data:IContryShort[] = await response.json()
        const sortedData = data.sort((a, b) => a.name.localeCompare(b.name))
        setCountriesList(sortedData)
        console.log('data', data)
        setCountriesList(data)
      } catch(e){
        console.log(e)
      }
    }
    getContries()
  },[])

    const handleSelectCountry = async (alpha3Code: string) => {
    setLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/alpha/${alpha3Code}?fields=name,capital,population,borders,flag`)
      if (!response.ok) {
        throw new Error
      }
      const data: ICountryFull = await response.json()
      setSelectedCountry(data)
    } catch (e){
      console.log(e)
    } finally {
      setLoading(false)
  }
}

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar countries={countriesList} onSelectCountry={handleSelectCountry} />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {!selectedCountry ? (
          <Typography variant="h5">Выберите страну</Typography>
        ) : loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        ) : (
          <CountryInfo country={selectedCountry} />
        )}
      </Box>
    </Box>
  )
}

export default App