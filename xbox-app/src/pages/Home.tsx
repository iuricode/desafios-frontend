import Xbox from '../assets/images/xbox.png';
import Controle from '../assets/images/controle-xbox.png';
import F6 from '../assets/images/1.png';
import Forza from '../assets/images/2.png'
import Fifa from '../assets/images/3.png'
import Mine from '../assets/images/4.png'
import Carousel from '../components/Carousel';
import Faq from '../components/Faq';
import Logo from '../assets/images/logo-xbox.png'

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
      <section className="sm:my-20 my-10 lg:h-[70vh] xl:h-screen">
        <div className="font-bold flex items-center flex-col mb-10">
          <h1 className="ms:text-6xl text-4xl text-white ms:pb-4">Xbox series X</h1>
          <p className="uppercase text-brand ms:text-2xl">pedido antecipado</p>
        </div>
        <figure className="relative h-[50vh] md:h-[60vh] xl:h-full w-full flex justify-center">
          <img
            src={Xbox}
            alt="xbox-seriesX"
            className="absolute object-cover z-0 lg:h-full h-[85%] lg:w-full w-full"
          />
          <div className="absolute lg:h-full h-[87%] lg:w-full w-full z-10 bg-gradient-to-b from-transparent to-dark10"></div>
        </figure>
      </section>
      
      <section className="my-32 lg:mt-80 flex sm:flex-row flex-col items-center px-10 justify-between ">
        <div className="sm:w-[49%] w-full text-center sm:text-left text-white sm:mb-0 mb-10">
          <h1 className="lg:text-6xl text-5xl text-brand font-bold leading-snug lg:mb-10">
            Desempenho <span className="text-white">aperfeiçoado</span>
          </h1>
          <p className="lg:text-2xl text-xl text-dark30">
            O controle sem fio Xbox traz um design elegante, conforto refinado e
            compartilhamento instantâneo para um favorito comum
          </p>
        </div>
        <div className="lg:w-[45%] sm:w-1/3 w-full">
          <img src={Controle} alt="controele-branco"></img>
        </div>
      </section>

      <section
        className="lg:h-screen ms:max-h-[50vh] overflow-hidden my-32"
      >
        <Carousel images={[F6, Fifa, Forza, Mine]}/>
      </section>

      <section className=' my-32 px-10'>
        <Faq value={faqQuestions}/>
      </section>

      <footer className='px-10 h-20' >
        <div className='flex flex-row justify-between items-center'>
          <img src={Logo} alt="logo-xbox" className='lg:h-8 h-6'/>
          <div className='w-[30%] text-dark20 flex lg:flex-row flex-col justify-between lg:text-sm text-xs'>
            <p>Microsoft 2022</p>
            <p>Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;
