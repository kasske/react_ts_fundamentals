type HeaderProps =  {
  image: {
    src: string;
    alt: string;
  };
  children: React.ReactNode;
}

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}
