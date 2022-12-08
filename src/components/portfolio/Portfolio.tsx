import React, {useState} from 'react'
import { Title } from '../'
import { data } from './data'
import Filter from './filter/Filter'
import './portfolio.css'
import Project from './project/Project'

export interface PortfolioProps{
    portfolio: {
        id: number;
        image: string;
        title: string;
        desc: string;
    }[]
}

const Portfolio = () => {
    const [all, setAll] = useState<PortfolioProps['portfolio']>(data);
    const [filtered, setFiltered] = useState<PortfolioProps['portfolio']>(data);
    const [active, setActive] = useState<string>('all')
    
  return (
   <div className="portfolio">
        <Title 
            subHeading="We're in action" 
            title='Our Amazing Portfolio' 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
        <Filter 
            active={active}
            setActive={setActive}
            all={all}
            setFiltered={setFiltered}
        />
        <div className="portfolio__projects">
            <Project filtered={filtered}/>
        </div>
   </div>
  )
}

export default Portfolio