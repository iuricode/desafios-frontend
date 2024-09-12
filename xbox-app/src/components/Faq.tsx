import React, { useState } from 'react';
import { FaqQuestions } from '../pages/Home';
import arrowDown from '../assets/arrow.svg'

interface FaqProps {
    value?: FaqQuestions[];
}

const Faq = ({value}: FaqProps) => {
    const [openQuestions, setOpenQuestions] = useState<{ [key: string]: boolean }>({});

    const toggleQuestion = (id: number) => {
        setOpenQuestions(prevState => ({
            ...prevState,
            [id]: !prevState[id], // Alterna o estado da pergunta com o id específico
        }));
    };
  
    return (
        <div className="w-full overflow-hidden relative">
            <h1 className='lg:text-6xl text-5xl text-brand font-bold'>Perguntas <span className='text-white'>frequentes</span></h1>
            
            <div className='mt-10'>
                {
                    value?.map(i => (
                        <div key={i.id} className='p-2 w-full border-b border-dark15'>

                            <div className='flex flex-row w-full justify-between'>
                                <p className='text-white lg:text-3xl text-2xl'>{i.question}</p>
                                <img className={`cursor-pointer transition ${openQuestions[i.id] ? 'rotate-180' : ''}`} style={{fill: openQuestions[i.id] ? '#9BF00B' : ''}} src={arrowDown} alt='close' onClick={()=>toggleQuestion(i.id)}/>
                            </div>
                            <div className={`my-5 transition ${openQuestions[i.id] ? 'h-auto' : 'h-0'}`}>
                                <p className={`text-dark30 transition ${openQuestions[i.id] ? 'flex' : 'hidden'}`}>{i.response}</p>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
  };
  
  export default Faq;


