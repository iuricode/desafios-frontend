import React, { useEffect, useRef, useState } from 'react';

interface CarouselProps {
    images: string[];
}

const Carousel = ({images}: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(window.innerWidth < 768);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const extendedImages = [...images, ...images];

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
  };
  
    // Trocar a imagem a cada 5 segundos
    useEffect(() => {
        timeoutRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 3000);
    
        return () => {
          if (timeoutRef.current) clearInterval(timeoutRef.current);
        };
    }, []);

    useEffect(() => {
        if (currentIndex === images.length) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(0); // Volta ao início sem transição visível
          }, 1000); // Tempo suficiente para o último slide ser exibido
        } else {
          setIsTransitioning(true);
        }
      }, [currentIndex, images.length]);
      
      useEffect(() => {
        // Adiciona o event listener para acompanhar o redimensionamento da janela
        window.addEventListener('resize', handleResize);

        // Remove o event listener quando o componente é desmontado
        return () => window.removeEventListener('resize', handleResize);
    }, [currentIndex]);

      return (
        <div className="w-full overflow-hidden relative">
          <div
            className={`flex transition-transform ${
              isTransitioning ? "duration-1000" : ""
            } ease-in-out`}
            style={{
              transform: `translateX(-${(currentIndex * 100) / (isSmallScreen ? 1 : 3)}%)`, // Altera com base no tamanho da tela
          }}
          >
            {extendedImages.map((image, index) => (
              <div key={index} className="md:min-w-[33.33%] min-w-full">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      );
  };
  
  export default Carousel;


