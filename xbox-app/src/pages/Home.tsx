import Xbox from '../assets/images/xbox.png';
import Controle from '../assets/images/controle-xbox.png';

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
    </main>
  );
}

export default Home;
