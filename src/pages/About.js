import devImg from '../assets/developer-illustration.jpg';

export default function AboutPage() {
  return (
    <section className='about-section'>
      <div className='about-container'>
        <h2 className='about-section-title'>
          About <span> Me</span>
        </h2>
        <div className='about-content'>
          <div className='about-text'>
            <p>
              I'm a <strong>Frontend Developer</strong> with a passion for
              creating elegant, responsive, and user-centric web applications. I
              enjoy transforming complex problems into intuitive user
              interfaces.
            </p>
            <p>
              I specialize in <strong>HTML</strong>, <strong>CSS</strong>,{' '}
              <strong>JavaScript</strong>, and modern frameworks like
              <strong> React</strong>. I thrive in collaborative teams, always
              eager to learn and implement new technologies that enhance user
              experience.
            </p>
            <p>
              Beyond the screen, I am also a dedicated{' '}
              <strong>Tattoo Artist</strong>, bringing visual ideas to life
              through ink. This artistic background deeply influences my
              approach to web design, where precision, aesthetic balance, and
              creativity are equally important.
            </p>
            <p>
              In my free time, I am an avid <strong>Gamer</strong>, always
              inspired by immersive storytelling and intuitive UX found in
              games. This interest not only fuels my creativity but also
              sharpens my attention to interactive design and user engagement.
            </p>
            <p>
              Whether I'm developing websites, designing tattoos, or exploring
              game worlds, I'm always driven by the desire to blend form and
              function in meaningful ways.
            </p>
          </div>
          <div className='about-image'>
            <img src={devImg} alt='Frontend Developer Illustration' />
          </div>
        </div>
      </div>
    </section>
  );
}
