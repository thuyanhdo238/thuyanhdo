import { contact } from '../data/contact';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ color: 'var(--color-neutral-100)' }}>
      <div className="section__inner section__inner--narrow">
        <div className="eyebrow" style={{ marginBottom: 'var(--space-4)' }}>Let&rsquo;s Connect</div>
        <h2 className="contact__heading heading-hover">Thank You</h2>

        <div className="contact__grid">
          <div>
            <span className="contact__label">Email</span><br />
            <a href={`mailto:${contact.email}`} className="contact__value">{contact.email}</a>
          </div>
          <div>
            <span className="contact__label">Phone</span><br />
            <span className="contact__value">{contact.phone}</span>
          </div>
          <div>
            <span className="contact__label">Portfolio</span><br />
            <a href={contact.portfolioLinkHref} target="_blank" rel="noreferrer" className="contact__value">
              {contact.portfolioLinkLabel}
            </a>
          </div>
          <div>
            <span className="contact__label">Google Scholar</span><br />
            <a href={contact.googleScholarHref} target="_blank" rel="noreferrer" className="contact__value">
              View Profile
            </a>
          </div>
          <div>
            <span className="contact__label">ORCID iD</span><br />
            <a href={contact.orcidHref} target="_blank" rel="noreferrer" className="contact__value">
              {contact.orcid}
            </a>
          </div>
        </div>

        <div className="contact__location">{contact.location}</div>

        <div className="contact__logo">
          <img src="/logo-mark-cropped.png" alt="Logo" />
        </div>
      </div>
    </section>
  );
}
