import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const features = [
    { icon: 'auto_stories', title: 'Escrita Intensa', desc: 'Versos que mergulham profundamente na alma humana.', delay: '0ms' },
    { icon: 'favorite', title: 'Emoções', desc: 'Um despertar para sentimentos muitas vezes esquecidos.', delay: '100ms' },
    { icon: 'psychology', title: 'Reflexões', desc: 'Pensamentos profundos sobre o ser e o existir.', delay: '200ms' },
    { icon: 'local_cafe', title: 'Leitura Leve', desc: 'O aconchego ideal para momentos de solitude.', delay: '300ms' },
  ];

  const testimonials = [
    { text: '"Uma leitura que abraça a alma. Me senti em cada verso."', author: 'Ana Oliveira', bgColor: 'bg-primary-fixed' },
    { text: '"A sensibilidade da Valdênisia é algo raro nos dias de hoje. Magnífico."', author: 'Carlos Mendes', bgColor: 'bg-tertiary-fixed', delay: '100ms' },
    { text: '"Impossível ler apenas um poema por dia. A gente devora a alma da autora."', author: 'Mariana Costa', bgColor: 'bg-secondary-fixed', delay: '200ms' },
  ];

  const supportContent = {
    title: 'Ajude o Projeto Amálgama a Ganhar Vida',
    desc: [
      'Dois livros. Um sonho prestes a sair do papel. Depois de muitos anos escrevendo, finalmente tive dois livros de poemas aprovados por editoras.',
      'Agora começo a etapa de impressão e lançamento dos exemplares e decidi criar esta campanha de apoio para ajudar esse sonho a ganhar vida.',
      'Toda contribuição, de qualquer valor, será recebida com enorme carinho e gratidão. Mais do que um apoio financeiro, é uma forma de participar diretamente do nascimento de uma obra independente.',
      'Quem contribuir fará parte desta trajetória, com agradecimentos nas redes sociais e no lançamento dos livros.',
      'Algumas obras também são escritas pelas mãos de quem acredita nelas.',
      'Obrigada por fazer parte deste momento.',
      'Com carinho,',
      'Nalini',
    ],
    extra: 'Faça parte desta jornada literária e permita que "Amálgama" chegue a mais pessoas que buscam emoção, reflexão e sensibilidade.',
    pix: 'valzinhaflor@gmail.com',
    img: 'qr-code.jpg',
  };

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-[30px]');
        }
      });
    }, observerOptions);

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-surface font-sans text-on-surface antialiased selection:bg-primary/20 selection:text-primary">
      
      {/* TopNavBar */}
      <header className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 max-w-container-max mx-auto bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 transition-all duration-500 ${isScrolled ? 'py-3 shadow-sm' : 'py-4'}`}>
        <div className="font-serif text-2xl font-medium text-primary">Amálgama</div>
        <nav className="hidden md:flex gap-8">
          <a className="text-sm text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#about-book">Sobre o Livro</a>
          <a className="text-sm text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#purchase">Comprar</a>
          <a className="text-sm text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#gallery">Galeria</a>
        </nav>
        <a className="bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-medium transition-all duration-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 active:scale-95" href="https://editoraventos.com.br/produto/amalgama-pedacos-de-mim/">Adquira o livro</a>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center will-change-transform" 
          style={{ 
            backgroundImage: "url('bg-aquarela.png')", /* Imagem de Fundo/Aquarela */
            transform: `scale(1.1) translateY(${scrollY * 0.15}px)`,
          }}
        />
        <div className="absolute inset-0 bg-white/40" />
        
        <div className="container mx-auto px-gutter relative z-10 grid md:grid-cols-2 gap-12 items-center max-w-container-max">
          <div ref={addToRefs} className="reveal-init opacity-0 translate-y-[30px] transition-all duration-1000 ease-out flex flex-col gap-6 text-center md:text-left">
            <span className="text-sm tracking-widest text-primary font-medium uppercase">Poesia & Sentimento</span>
            <h1 className="font-serif text-4xl md:text-6xl text-primary leading-tight font-light">AMÁLGAMA</h1>
            <p className="font-serif text-2xl italic text-on-surface-variant">Pedaços de Mim</p>
            <p className="text-lg text-on-surface-variant max-w-md mx-auto md:mx-0">"A poesia não é apenas escrita; ela é sentida em cada fragmento de alma que decidimos transbordar."</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
              <a className="bg-primary text-on-primary px-8 py-4 rounded-full text-sm font-medium transition-all duration-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 text-center" href="#purchase">Comprar Livro</a>
              <a className="border border-primary text-primary px-8 py-4 rounded-full text-sm font-medium transition-all duration-400 hover:-translate-y-0.5 hover:bg-primary/5 text-center" href="#about-author">Conheça a Autora</a>
            </div>
          </div>
          <div ref={addToRefs} className="reveal-init opacity-0 translate-y-[30px] transition-all duration-1000 ease-out flex justify-center" style={{ transitionDelay: '200ms' }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary-container/30 blur-3xl rounded-full transition-transform duration-1000 group-hover:scale-125" />
              <img alt="Capa do Livro Amálgama" className="relative z-10 w-full max-w-[320px] rounded shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-y-4" src="capa-livro.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Read */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-gutter max-w-container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <div 
                key={idx}
                ref={addToRefs} 
                className="reveal-init opacity-0 translate-y-[30px] transition-all duration-1000 glass-card p-10 rounded-xl text-center flex flex-col items-center gap-4 hover:bg-white/60"
                style={{ transitionDelay: feat.delay }}
              >
                <span className="material-symbols-outlined text-primary text-4xl transition-transform duration-500 hover:scale-110">{feat.icon}</span>
                <h3 className="font-serif text-xl font-medium text-primary">{feat.title}</h3>
                <p className="text-sm text-on-secondary-container">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Book */}
      <section className="py-24 bg-surface-container-low overflow-hidden" id="about-book">
        <div className="container mx-auto px-gutter max-w-container-max grid md:grid-cols-2 gap-16 items-center">
          <div ref={addToRefs} className="reveal-init opacity-0 translate-y-[30px] transition-all duration-1000 order-2 md:order-1">
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-3xl text-primary">Sobre a Obra</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed text-justify">
                "Amálgama – Pedaços de Mim" é uma jornada visceral através da poesia contemporânea. Valdênisia D. Nalini reúne fragmentos de experiências, dores e amores, transformando o ordinário em algo extraordinário através das palavras. 
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed text-justify">
                O livro explora a dualidade da existência, a força da vulnerabilidade e a beleza encontrada nos detalhes mais ínfimos da vida cotidiana.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {['Poesia', 'Sentir', 'Intenso'].map((tag, i) => (
                  <div key={i} className="p-6 border border-outline-variant/30 rounded-lg text-center hover:bg-primary/5 transition-colors duration-500 group">
                    <p className="font-serif text-xl text-primary group-hover:scale-105 transition-transform duration-500">{tag}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div ref={addToRefs} className="reveal-init opacity-0 translate-y-[30px] transition-all duration-1000 order-1 md:order-2 flex justify-center">
            <img alt="Livro Amálgama em 3D" className="w-full max-w-[400px] drop-shadow-2xl rounded transition-transform duration-700 rotate-3 hover:rotate-0" src="capa-livro.jpg" />
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-24 bg-surface relative" id="about-author">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
          <img alt="Floral Accent" className="w-full h-full object-contain" src="floral-accent.png" />
        </div>
        <div className="container mx-auto px-gutter grid md:grid-cols-2 gap-16 items-center max-w-4xl">
          <div ref={addToRefs} className="reveal-init opacity-0 translate-y-[30px] transition-all duration-1000">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-primary-container relative shadow-xl shadow-primary/10 p-3 bg-white">
              <img alt="Portrait of Valdênisia D. Nalini" className="w-full h-full object-cover rounded-full transition-transform duration-[1000ms] hover:scale-110" src="autora-livro.jpg" />
            </div>
          </div>
          <div ref={addToRefs} className="reveal-init opacity-0 translate-y-[30px] transition-all duration-1000" style={{ transitionDelay: '200ms' }}>
            <h2 className="font-serif text-3xl text-primary mb-6">A Autora</h2>
            <p className="text-lg text-on-surface-variant italic mb-8">
              "Escrevo para organizar os barulhos internos. Cada poema é um pedaço de mim que agora pertence ao mundo."
            </p>
            <p className="text-sm text-on-secondary-container mb-8 text-justify">
              Valdênisia D. Nalini é uma observadora do silêncio e das sutilezas. Com uma sensibilidade que transcende o papel, ela convida o leitor a mergulhar em suas próprias profundezas.
            </p>
            <div className="font-serif text-xl text-primary italic opacity-70">
              Valdênisia D. Nalini
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary-container/10">
        <div className="container mx-auto px-gutter max-w-container-max">
          <h2 className="font-serif text-3xl text-primary text-center mb-16">Leituras que Tocam</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div 
                key={idx}
                ref={addToRefs} 
                className="reveal-init opacity-0 translate-y-[30px] transition-all duration-1000 glass-card p-10 rounded-xl hover:-translate-y-2"
                style={{ transitionDelay: test.delay || '0ms' }}
              >
                <p className="italic text-lg text-on-surface-variant mb-6">{test.text}</p>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full ${test.bgColor}`} />
                  <span className="text-sm text-primary font-bold">{test.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-surface" id="gallery">
        <div className="container mx-auto px-gutter max-w-container-max">
          <h2 className="font-serif text-3xl text-primary text-center mb-16">Adquira seu exemplar</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              { src: "capa-livro.jpg", delay: '0ms' },
              { src: "livro-aberto.jpg", delay: '100ms' },
            ].map((img, i) => (
              <div 
                key={i}
                ref={addToRefs} 
                className="reveal-init opacity-0 translate-y-[30px] transition-all duration-1000 break-inside-avoid"
                style={{ transitionDelay: img.delay }}
              >
                <img src={img.src} alt="Universo Amálgama" className="w-full rounded-xl hover:scale-[1.02] transition-all duration-700 hover:shadow-xl border border-black/5" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apoia-se */}
      <section className="py-24 bg-primary-container/20" id="purchase">
        <div className="container mx-auto px-gutter max-w-4xl">
          <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] items-center text-center md:text-left">
            <div>
              <h2 ref={addToRefs} className="reveal-init opacity-0 translate-y-[30px] transition-all duration-1000 font-serif text-3xl text-primary mb-6">{supportContent.title}</h2>
              {supportContent.desc.map((para, i) => (
                <p
                  key={i}
                  ref={addToRefs}
                  className="reveal-init opacity-0 translate-y-[30px] transition-all duration-1000 text-lg text-on-surface-variant leading-relaxed mb-4"
                >
                  {para}
                </p>
              ))}
              <p ref={addToRefs} className="reveal-init opacity-0 translate-y-[30px] transition-all duration-1000 text-sm text-on-secondary-container leading-relaxed">
                {supportContent.extra} <strong className="font-semibold">Contribua com o Pix: {supportContent.pix}</strong>
              </p>
            </div>
            <div ref={addToRefs} className="reveal-init opacity-0 translate-y-[30px] transition-all duration-1000 rounded-3xl overflow-hidden border border-outline-variant/20 shadow-2xl">
              <img src={supportContent.img} alt="Livro aberto de Amálgama" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div ref={addToRefs} className="reveal-init opacity-0 translate-y-[30px] transition-all duration-1000 container mx-auto px-6 max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-primary mb-4">Receba Fragmentos</h2>
          <p className="text-sm text-on-secondary-container mb-8">Inscreva-se para receber novos poemas e atualizações literárias diretamente no seu e-mail.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4">
            <input className="flex-1 bg-surface-container-low border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-primary-container text-on-surface transition-shadow duration-300 outline-none" placeholder="Seu melhor e-mail" type="email" required />
            <button className="bg-primary text-on-primary px-10 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:bg-[#524348]" type="submit">Inscrever</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center py-16 px-6 w-full bg-surface border-t border-outline-variant/20">
        <div className="font-serif text-2xl text-primary">Amálgama</div>
        <p className="text-sm text-on-surface-variant italic mt-4 max-w-md text-center">
          "Entre o que sinto e o que escrevo, há um amálgama de tudo o que sou."
        </p>
        <div className="flex gap-8 mt-8">
          {['Instagram', 'Amazon', 'Shopee', 'Privacy Policy'].map((item, index) => (
            <a key={index} className="text-sm text-on-secondary-container hover:text-primary transition-all duration-400" href="#">{item}</a>
          ))}
        </div>
        <div className="mt-12 text-xs text-on-secondary-container opacity-60">
          © 2026 Valdenisia D. Nalini. All rights reserved. Site feito por Mayara Soares contato: mayarasoaresdev@gmail.com
        </div>
      </footer>
    </div>
  );
}