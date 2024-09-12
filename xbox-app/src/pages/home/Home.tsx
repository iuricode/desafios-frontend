import Xbox from '../../assets/images/xbox.png';
import Controle from '../../assets/images/controle-xbox.png';
import F6 from '../../assets/images/1.png';
import Forza from '../../assets/images/2.png'
import Fifa from '../../assets/images/3.png'
import Mine from '../../assets/images/4.png'
import './Home.css';
import Carousel from '../../components/Carousel';
import Faq from '../../components/Faq';
import Logo from '../../assets/images/logo-xbox.png'

export interface FaqQuestions {
  id: number,
  question: string,
  response: string
}

const faqQuestions: FaqQuestions[] =  [
  {
    id: 1,
    question: 'Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?',
    response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 2,
    question: 'O que está incluído no Xbox Series X?',
    response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }, {
    id: 3,
    question: 'Como sei se minha TV é compatível com 4K?',
    response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
]

function Home() { 

  return (
    <main>
      <section className="my-20">
        <div className="font-bold flex items-center flex-col mb-10">
          <h1 className="text-6xl text-white pb-4">Xbox series X</h1>
          <p className="uppercase text-brand text-2xl">pedido antecipado</p>
        </div>
        <figure className="relative h-screen">
          <img
            src={Xbox}
            alt="xbox-seriesX"
            className="absolute object-cover z-0 h-full w-full"
          />
          <div className="absolute w-full z-10 h-full bg-gradient-to-b from-transparent to-dark10"></div>
        </figure>
      </section>
      
      <section className="my-32 flex flex-row px-10 justify-between">
        <div className="w-[49%] text-white">
          <h1 className="text-6xl text-brand font-bold leading-snug">
            Desempenho <span className="text-white">aperfeiçoado</span>
          </h1>
          <p className="text-2xl text-dark30">
            O controle sem fio Xbox traz um design elegante, conforto refinado e
            compartilhamento instantâneo para um favorito comum
          </p>
        </div>
        <div className="w-[45%]">
          <img src={Controle} alt="controele-branco"></img>
        </div>
      </section>

      <section
        className="h-screen overflow-hidden my-32"
      >
        <Carousel images={[F6, Fifa, Forza, Mine]}/>
      </section>

      <section className=' my-32 px-10'>
        <Faq value={faqQuestions}/>
      </section>

      <footer className='px-10 h-20' >
        <div className='flex flex-row justify-between items-center'>
          <img src={Logo} alt="logo-xbox" className='h-4/5'/>
          <div className='w-[30%] text-dark20 flex flex-row justify-between text-sm'>
            <p>Microsoft 2022</p>
            <p>Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;
