import React, { useEffect, useRef, useState } from 'react';

interface CarouselProps {
    images: string[];
}

const Carousel = ({images}: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const extendedImages = [...images, ...images];
  
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

      return (
        <div className="w-full overflow-hidden relative">
          <div
            className={`flex transition-transform ${
              isTransitioning ? "duration-1000" : ""
            } ease-in-out`}
            style={{
              transform: `translateX(-${(currentIndex * 100) / 3}%)`,
            }}
          >
            {extendedImages.map((image, index) => (
              <div key={index} className="min-w-[33.33%]">
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


