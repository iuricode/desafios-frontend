import Xbox from '../assets/images/xbox.png'

function Home() {
    return (
      <section className="pt-20">
        <div className='font-bold flex items-center flex-col mb-10'>
            <h1 className="text-6xl text-white pb-4">Xbox series X</h1>
            <p className="uppercase text-brand text-2xl">pedido antecipado</p>
        </div>
        <figure>
            <img src={Xbox} alt="xbox-seriesX"/>
        </figure>
      </section>
    );
  }
  
  export default Home;
  