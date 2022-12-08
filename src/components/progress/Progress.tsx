import React from 'react'
import { Title } from '..';
import './progress.css';

const Progress = () => {
  return (
    <div className="progress">
        <div className="progressRightside">
            <Title 
                subHeading='Together we succeed!'
                title='Why You Will Choose Us?'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            />

            <div className="progressRightside__progress">
                <div className='progressRightside__progress-bar'>
                    <div className='info'>
                        <span>User Interface</span>
                        <span>90%</span>
                    </div>
                    <div className='bar'>
                        <span></span>
                    </div>
                </div>

                <div className='progressRightside__progress-bar'>
                    <div className='info'>
                        <span>Memory Usage</span>
                        <span>95%</span>
                    </div>
                    <div className='bar'>
                        <span className='memory'></span>
                    </div>
                </div>

                <div className='progressRightside__progress-bar'>
                    <div className='info'>
                        <span>App Development</span>
                        <span>75%</span>
                    </div>
                    <div className='bar'>
                        <span className='dev'></span>
                    </div>
                </div>
            </div>

        </div>

        <div className="progressLeftside">
            <img src="/assets/progress.png" alt="progress" />
        </div>
    </div>
  )
}

export default Progress