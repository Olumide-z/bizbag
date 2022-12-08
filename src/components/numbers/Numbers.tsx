import React from 'react'
import { CountUp } from '../'
import './numbers.css'

interface Props {
  bg? : boolean
}

const Numbers: React.FC<Props> = ({ bg }) => {
  return (
   <div className={ bg ? 'numbers bg' : 'numbers noBdg'} >
        <CountUp end={1105} start={500} timer={1500} text='Years Of Experience'/>
        <CountUp end={680} start={300} timer={1500} text='Awards & Recognition'/>
        <CountUp end={2500} start={1000} timer={1500} text='Completed Projects'/>
        <CountUp end={1440} start={600} timer={1500} text='Satisfied Clients'/>
   </div>
  )
}

export default Numbers