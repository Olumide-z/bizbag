import React, {useState, useRef, useEffect} from 'react'
import './countUp.css';

interface Props {
    end: number;
    start: number;
    timer: number;
    text: string
}
const CountUp: React.FC<Props> = ({ start = 0, end, timer = 50, text }) => {
    const [count, setCount] = useState<number | null>(null);
    const ref = useRef(start);

    const accumulator = end / 200;

    const updateCounter = () => {
        if(ref.current < end) {
            const result = Math.ceil(ref.current + accumulator)
            if(result > end) return setCount(end)
            setCount(result)
            ref.current = result;
        }
        setTimeout(updateCounter, 50)
    }

    useEffect(() => {
        let isMounted = true;
        if (isMounted){
            updateCounter();
        }
        return () => {isMounted = false}
    }, [end, start, timer])

    
  return (
    <div className="count">
        <h3>{count}</h3>
        <p>{text}</p>
    </div>
  )
}

export default CountUp