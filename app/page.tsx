import Img from '@/assets/banner3.jpg'
import NextImage from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>
        Welcome to NextJS world
      </h1>
      <div>

        <NextImage
          alt='Hero Image'
          src={Img}
          style={{
            width: '100%',
            height: 'auto',
          }}
          priority
        />
      </div>
    </div>
  );
}
