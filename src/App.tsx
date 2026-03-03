import { useState, useEffect} from 'react'
import {Sidebar} from './components/Sidebar'
import type { IContryShort } from './types'
import {BASE_URL} from './constans'
import Box from '@mui/material/Box';


function App() {
  const [countriesList, setCountriesList] = useState<IContryShort[]>([])

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

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar countries={countriesList} />
    </Box>
  )
}

export default App