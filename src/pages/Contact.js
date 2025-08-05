import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function ContactPage() {
  function handleSubmit(e) {
    e.preventDefault();
    e.target.submit();
  }

  return (
    <section className='contact-section-dark' id='contact'>
      <h2 className='contact-title-dark'>Get in Touch</h2>
      <p className='contact-subtext-dark'>
        Interested in working together or just want to say hi? Drop me a message
        below.
      </p>
      <form
        className='contact-form-dark'
        name='contact'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        onSubmit={handleSubmit}
      >
        <input type='hidden' name='form-name' value='contact' />
        <p hidden>
          <label>
            Don't fill this out if you're human:
            <input name='bot-field' />
          </label>
        </p>
        <input type='text' name='name' placeholder='Your Name' required />
        <input type='email' name='email' placeholder='Your Email' required />
        <textarea name='message' rows='6' placeholder='Your Message' required />
        <button type='submit'>Send Message</button>
      </form>
      <div className='contact-icons-dark'>
        <a href='mailto:srikanth.krishna1398@gmail.com' aria-label='Email'>
          <FaEnvelope />
        </a>
        <a
          href='https://github.com/Srikanth-Krishna'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
        >
          <FaGithub />
        </a>
        <a
          href='https://linkedin.com/in/srikanth-krishna-a58905191'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://www.instagram.com/srikanth.krishnaa/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Instagram'
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
