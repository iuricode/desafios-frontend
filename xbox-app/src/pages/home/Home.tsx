import Xbox from '../../assets/images/xbox.png';
import Controle from '../../assets/images/controle-xbox.png';
import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import F6 from '../../assets/images/1.png';
import './Home.css';

interface Carousel {
  type: string;
  autoplay: boolean;
  rewind: boolean;
  rewindByDrag: boolean;
  pagination: boolean;
  arrows: boolean;
  interval: number;
  speed: number;
  perPage: number;
  perMove: number;
  focus: number | 'center' | undefined;
  slideFocus: boolean;
  updateOnMove: boolean;
  clones: number;
  gap: string;
  mediaQuery?: 'max' | 'min' | undefined;
  breakpoints: {
    [key: number]: {
      gap: string;
    };
  };
}

function Home() {
  const carouselFunc = (): void => {
    const splideOptionBanner: Carousel = {
      type: 'loop',
      autoplay: false,
      rewind: true,
      rewindByDrag: true,
      pagination: false,
      arrows: false,
      interval: 5000,
      speed: 1000,
      perPage: 1,
      perMove: 1,
      focus: 'center',
      slideFocus: true,
      updateOnMove: true,
      clones: 4,
      gap: '35px',
      mediaQuery: 'max',
      breakpoints: {
        768: {
          gap: '12px',
        },
      },
    };

    const splideBanner = document.getElementsByClassName('js-carousel-01');

    // Verificar se há pelo menos um elemento
    if (splideBanner.length === 0) {
      return;
    } else {
      for (let i = 0; i < splideBanner.length; i++) {
        const element = splideBanner[i] as HTMLElement;
        new Splide(element, splideOptionBanner).mount({});
      }
    }
  };

  useEffect(() => {
    carouselFunc();
  }, []);

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
        id="image-carousel"
        className="js-carousel-01 splide topics-carousel h-screen w-screen"
        aria-label="slider"
      >
        <div className="topics-carousel-track splide__track">
          <div className="splide__list">
            <div className="topics-carousel-slide splide__slide">
              <a className="topics-carousel-thumbnail" href="#">
                <img src="https://picsum.photos/400/250" alt="" />
              </a>
            </div>
            <div className="topics-carousel-slide splide__slide">
              <a className="topics-carousel-thumbnail" href="#">
                <img src="https://picsum.photos/400/250" alt="" />
              </a>
            </div>
            <div className="topics-carousel-slide splide__slide">
              <a className="topics-carousel-thumbnail" href="#">
                <img src="https://picsum.photos/400/250" alt="" />
              </a>
            </div>
            <div className="topics-carousel-slide splide__slide">
              <a className="topics-carousel-thumbnail" href="#">
                <img src="https://picsum.photos/400/250" alt="" />
              </a>
            </div>
            <div className="topics-carousel-slide splide__slide">
              <a className="topics-carousel-thumbnail" href="#">
                <img src="https://picsum.photos/400/250" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
