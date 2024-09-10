import { useState } from 'react';
import Logo from '../assets/images/logo-xbox.png'
import { NavLink } from 'react-router-dom';

function Root() {

  const [selectedItem, setSelectedItem] = useState<number | null>(null);

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
    <header className=" text-white uppercase font-semibold flex flex-row w-full py-5">
        
      <nav className='px-2 w-1/2 justify-around flex flex-row'>
        <img src={Logo} alt="logo-xbox"/>
        <ul className='flex flex-row w-8/12 justify-between items-center'>

        {
          menuItems.map((item, index) => (
            <li key={index} className={`transition-colors duration-300 ${
              selectedItem === index ? ' px-2 bg-dark20 rounded-2xl' : ''
            }  `} onClick={(e)=> (setSelectedItem(index))}>
              <NavLink to={item.link}>{item.nome}</NavLink>
            </li>

          ))
        }
        </ul>
      </nav>
      <div className='flex items-center w-1/2 justify-end pr-20'>

        <button className='bg-[#9BF00B] text-black px-6 py-2'>ver disponibilidade</button>
      </div>
    </header>
  );
}

export default Root;
