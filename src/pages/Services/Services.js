import React from 'react'
import { InfoSection,Pricing} from '../../Components'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'


const Home = () => {
    return (
        <>
        <InfoSection {...homeObjThree}/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjFour}/>
          <InfoSection {...homeObjTwo } /> 
          
           
          
           <Pricing />
              
        </>
    )
}
export default Home;