import { useState, useEffect} from 'react'
import {Sidebar} from './components/Sidebar'
import type { IContryShort, ICountryFull } from './types'
import {BASE_URL} from './constans'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


function App() {
  const [countriesList, setCountriesList] = useState<IContryShort[]>([])
  const [selectedCountry, setSelectedCountry] = useState<ICountryFull | null>(null)

  useEffect(()=>{
    const getContries = async() => {
      try{
        const response = await fetch(`${BASE_URL}/all?fields=alpha3Code,name`)
        if (!response.ok) {
          throw new Error
        }
        const data:IContryShort[] = await response.json()
        console.log('data', data)
        setCountriesList(data)
      } catch(e){
        console.log(e)
      }
    }
    getContries()
  },[])

  const handleSelectCountry = (alpha3Code: string) => {
    console.log('Выбрана страна с кодом:', alpha3Code)
  }

  return (
     <Box sx={{ display: 'flex' }}>
      <Sidebar countries={countriesList} onSelectCountry={handleSelectCountry} />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h5">Выберите страну</Typography>
      </Box>
    </Box>
  )
}

export default App