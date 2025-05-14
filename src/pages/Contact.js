import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function ContactPage() {
  function handleSubmit() {
    alert('Message Sent!');
  }

  return (
    <section className='contact-section-dark' id='contact'>
      <h2 className='contact-title-dark'>Get in Touch</h2>
      <p className='contact-subtext-dark'>
        Interested in working together or just want to say hi? Drop me a message
        below.
      </p>
      <form className='contact-form-dark'>
        <input type='text' name='name' placeholder='Your Name' required />
        <input type='email' name='email' placeholder='Your Email' required />
        <textarea name='message' rows='6' placeholder='Your Message' required />
        <button onSubmit={handleSubmit} type='submit'>
          Send Message
        </button>
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
