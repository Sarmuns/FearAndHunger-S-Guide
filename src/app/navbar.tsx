"use client"
import Image from 'next/image';
import { useState } from 'react';

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
  Click?: any;
  select?: any;
};

const PlayerImage = ({ src, alt, className, onClick, select }: PlayerImageProps) => (
  <div
    className="w-1/4 flex flex-col items-center justify-center"
  >
    {select? (

      <div
      className= 'text-white mt-2 text-center mx-auto'>{alt}
    </div>
      ) : (<></>)}

    <Image
      src={src}
      width={100}
      height={100}
      alt={alt}
      className={`h-auto w-auto mx-auto ${className}`}
      onClick={onClick}
    />

  </div>
);

type SelectedState = {
  Enki: boolean;
  Darce: boolean;
  Cahara: boolean;
  Rag: boolean;
};




const NavBar = () => {
  const [Selected, setSelected] = useState<SelectedState>({
    Enki: false,
    Darce: false,
    Cahara: false,
    Rag: false,
  });

  const HandleClick = (x: string) => {

    const updatedSelected: SelectedState = {} as SelectedState;
    Object.keys(Selected).forEach((key) => {
      updatedSelected[key as keyof SelectedState] = false; //all to false
    });
    updatedSelected[x as keyof SelectedState] = true;

    setSelected(updatedSelected);
  };

  return (

    <div className="shadow-lg rounded-lg p-4 w-1/4 bg-[url('/Dungeon_background.webp')] bg-center">
      <div className="h-40 relative">
        <div className="w-full h-full flex items-center">

          <PlayerImage
            onClick={() => HandleClick('Enki')}
            src={Selected.Enki ? Images.Enki : Images.Enki2}
            alt="Enki"
            className="rounded-l-lg"
            select={Selected.Enki}
          />


          <PlayerImage
            onClick={() => HandleClick('Darce')}
            src={Selected.Darce ? Images.Darce : Images.Darce2}
            alt="D'arce"
            select={Selected.Darce}
          />


          <PlayerImage
            onClick={() => HandleClick('Cahara')}
            src={Selected.Cahara ? Images.Cahara : Images.Cahara2}
            alt="Cahara"
            select={Selected.Cahara}
          />


          <PlayerImage
            onClick={() => HandleClick('Rag')}
            src={Selected.Rag ? Images.Rag : Images.Rag2}
            alt="Ragnvaldr"
            className="rounded-r-lg"
            select={Selected.Rag}
          />

        </div>
      </div>
    </div>

  )


}

export default NavBar;