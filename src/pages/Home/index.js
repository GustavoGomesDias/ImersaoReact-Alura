import React from 'react';
import Menu from '../../components/Menu'; // Menu tá em components
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Não enta nessa playlist!"
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}

      />
      <Carousel
        category={dadosIniciais.categorias[1]}

      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}

      />

      <Footer />

    </div>
  );
}

export default Home;
