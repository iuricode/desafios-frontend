import { useState } from 'react';
import Logo from '../assets/images/logo-xbox.png'
import { NavLink } from 'react-router-dom';

function Root() {

  const [selectedItem, setSelectedItem] = useState<number | null>(0);

  const menuItems = [
    {
      link: '/',
      nome: 'visão geral'
    }, {
      link: '/jogos',
      nome: 'jogos'
    }, {
      link: '/galeria',
      nome: 'galeria'

    }, {
      link: '/unbox',
      nome: 'unbox'
    },];

  return (
    <header className="text-dark40 uppercase font-semibold flex sm:flex-row items-center flex-col w-full py-5 px-5 lg:px-20">
        
      <nav className='sm:w-2/3 w-4/5 justify-around flex sm:flex-row sm:mb-0 mb-2 flex-col items-center'>
        <img src={Logo} alt="logo-xbox" className='lg:h-8 h-6 sm:mb-0 mb-5'/>
        <ul className='flex flex-row lg:w-8/12 sm:w-3/4 w-full justify-between items-center sm:mb-0 mb-5'>

        {
          menuItems.map((item, index) => (
            <li key={index} className={`transition-colors duration-300 lg:text-sm text-xs ${
              selectedItem === index ? ' px-3 py-1 bg-dark15 rounded-2xl' : ''
            }  `} onClick={(e)=> (setSelectedItem(index))}>
              <NavLink to={item.link}>{item.nome}</NavLink>
            </li>

          ))
        }
        </ul>
      </nav>
      <div className='flex items-center sm:w-1/2 w-4/5 justify-end'>

        <button className='bg-[#9BF00B] text-black px-6 py-2 text-lg lg:text-base w-full sm:w-auto'>ver disponibilidade</button>
      </div>
    </header>
  );
}

export default Root;
