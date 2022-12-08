import React, {useEffect} from 'react'
import { PortfolioProps } from '../Portfolio';
import './filter.css'

interface Props{
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  all: PortfolioProps['portfolio'];
  setFiltered: React.Dispatch<React.SetStateAction<PortfolioProps['portfolio']>>
}

const Filter: React.FC<Props> = ({ active, setActive, all, setFiltered }) => {

  useEffect(() => {
    if(active === 'all'){
      setFiltered(all)
      return;
    }

    const filter = all.filter((item) => (
      item.desc.includes(active)
    ));
    setFiltered(filter)

  }, [active])

  return (
    <div className="filter">
        <button className={active === 'all' ? 'active' : ''} onClick={() => setActive('all')}>ALL</button>
        <button className={active === 'Branding' ? 'active' : ''} onClick={() => setActive('Branding')}>BRANDING</button>
        <button className={active === 'Illustration' ? 'active' : ''} onClick={() => setActive('Illustration')}>ILLUSTRATION</button>
        <button className={active === 'Web Design' ? 'active' : ''} onClick={() => setActive('Web Design')}>WEB DESIGN</button>
    </div>
  )
}

export default Filter