import React from 'react'
import { InfoSection,Pricing} from '../../Components'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'


const Home = () => {
    return (
        <>
        <InfoSection {...homeObjFour}/>
        <InfoSection {...homeObjThree}/>
        <InfoSection {...homeObjOne}/>
        
          <InfoSection {...homeObjTwo } /> 
          
           
          

              
        </>
    )
}
export default Home;