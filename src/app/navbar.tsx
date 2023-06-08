import Image from 'next/image';

const Images = {
  Enki: '/Enki.webp',
  Darce: "/D'arce.webp",
  Rag: '/Rag.webp',
  Cahara: '/Cahara.webp'
};

type PlayerImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const PlayerImage = ({ src, alt, className }: PlayerImageProps) => (
  <div className="w-1/4">
    <Image
      src={src}
      width={50}
      height={100}
      alt={alt}
      className={`h-auto w-auto ${className}`}
    />
  </div>
);

const NavBar = () => (
  <div className="shadow-lg rounded-lg p-4 w-1/4">
    <div className="h-20 relative">
      <div className="w-full h-full flex items-center">
        <PlayerImage src={Images.Enki} alt="Enki" className="rounded-l-lg" />
        <PlayerImage src={Images.Darce} alt="D'arce" />
        <PlayerImage src={Images.Cahara} alt="Cahara" />
        <PlayerImage src={Images.Rag} alt="Ragnvaldr" className="rounded-r-lg" />
      </div>
    </div>
  </div>
);

export default NavBar;