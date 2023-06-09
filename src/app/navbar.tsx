"use client"
import { useState, useEffect } from 'react';

const Images = {
  Enki: '/Enki.webp',
  Enki2: '/Enki-1.png',
  Darce: "/D'arce.webp",
  Darce2: "/D'arce-1.png",
  Rag: '/Rag.webp',
  Rag2: '/Rag-1.png',
  Cahara: '/Cahara.webp',
  Cahara2: '/Cahara-1.png',
};

type PlayerImageProps = {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => any;
  select?: boolean;
};

const PlayerImage = ({ src, alt, className, onClick, select }: PlayerImageProps) => {
  const maxImageHeight = 140;

  return (
    <div className="mt-20  w-1/4 flex flex-col items-center justify-center">
      {select ? (
        <div className="text-white mt-2 text-center mx-auto">{alt}</div>
      ) : (
        <></>
      )}

      <div
        className={`${className} min-h-60 relative`}
        style={{ paddingBottom: `${(100 / maxImageHeight) * 100}%` }}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-contain"
          onClick={onClick}
        />
      </div>
    </div>
  );
};


type SelectedState = {
  Enki: boolean;
  Darce: boolean;
  Cahara: boolean;
  Rag: boolean;
};

const NavBar = () => {
  const [selected, setSelected] = useState<SelectedState>({
    Enki: false,
    Darce: false,
    Cahara: false,
    Rag: false,
  });
  const [containerClass, setContainerClass] = useState<string>('w-1/4');

  useEffect(() => {
    const handleResize = () => {


      if (window.innerWidth < 750){
        setContainerClass('w-full');
      } else if (window.innerWidth < 1450) {
        setContainerClass('w-1/2');
      } else {
        setContainerClass('w-1/3');
      }     
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [containerClass]);
  const handleClick = (x: string) => {
    const updatedSelected: SelectedState = {} as SelectedState;
    Object.keys(selected).forEach((key) => {
      updatedSelected[key as keyof SelectedState] = false; // All to false
    });
    updatedSelected[x as keyof SelectedState] = true;

    setSelected(updatedSelected);
  };

  return (
    <div
    className={`shadow-lg p-4 ${containerClass} bg-[url('/Dungeon_background.webp')] bg-center`}
    >
      <div className="h-40 relative">
        <div className="w-full h-full flex items-center">
          <PlayerImage
            onClick={() => handleClick('Enki')}
            src={selected.Enki ? Images.Enki : Images.Enki2}
            alt="Enki"
            select={selected.Enki}
          />

          <PlayerImage
            onClick={() => handleClick('Darce')}
            src={selected.Darce ? Images.Darce : Images.Darce2}
            alt="D'arce"
            select={selected.Darce}
          />

          <PlayerImage
            onClick={() => handleClick('Cahara')}
            src={selected.Cahara ? Images.Cahara : Images.Cahara2}
            alt="Cahara"
            select={selected.Cahara}
          />

          <PlayerImage
            onClick={() => handleClick('Rag')}
            src={selected.Rag ? Images.Rag : Images.Rag2}
            alt="Ragnvaldr"
            select={selected.Rag}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;