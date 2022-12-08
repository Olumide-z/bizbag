import React, {useState} from 'react'
import './accordion.css';
import { data } from './data'
import { MdKeyboardArrowUp } from 'react-icons/md';

const Accordion = () => {
    const [clicked, setClicked] = useState<boolean | null | number>(false);

    const toggleAccordion = (index: number) => {

        setClicked(index)
    }

  return (
    <div className="accordion">
        { data.map((item, index) => (
            <div className={clicked === index ? "accordion__container border" : 'accordion__container'} key={item.id}>
                <div 
                    className={clicked === index ? "accordion__container-btnWrapper yellow" : "accordion__container-btnWrapper dark"}
                    onClick={() => toggleAccordion(index)}
                >
                    <p>{item.title}</p>
                    <MdKeyboardArrowUp className={clicked === index ? "accordion__icon rotate" : 'accordion__icon'}/>
                </div>

                <div className={clicked === index ? "accordion__container-content show" : 'accordion__container-content'}>
                    <p>{item.content}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Accordion