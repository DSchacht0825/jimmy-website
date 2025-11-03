import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Netlify form handling
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString()
    })
      .then(() => alert('Thank you for your message! We will be in touch soon.'))
      .catch((error) => alert('Error submitting form. Please call us directly.'));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span className={mobileMenuOpen ? 'open' : ''}></span>
        <span className={mobileMenuOpen ? 'open' : ''}></span>
        <span className={mobileMenuOpen ? 'open' : ''}></span>
      </button>

      {/* Left-side Navigation */}
      <nav className={`side-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="nav-content">
          <img
            src={`${process.env.PUBLIC_URL}/maggy.jpg`}
            alt="Jimmy Maggy"
            className="nav-portrait"
          />
          <ul className="nav-links">
            <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
            <li><a href="#services" onClick={closeMobileMenu}>Services</a></li>
            <li><a href="#testimonials" onClick={closeMobileMenu}>Testimonials</a></li>
            <li><a href="#faq" onClick={closeMobileMenu}>FAQ</a></li>
            <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
          </ul>
          <div className="contact-info">
            <p className="phone">815-603-9854</p>
            <p className="location">Cincinnati, OH</p>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
      )}

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section
          id="home"
          className="hero"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/image2.jpg)`
          }}
        >
          <div className="hero-overlay"></div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="about"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/image1.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            position: 'relative'
          }}
        >
          <div className="about-overlay"></div>
          <div className="section-content" style={{ position: 'relative', zIndex: 2 }}>
            <h3>ABOUT JIMMY</h3>
            <div className="about-text">
              <p>
                James Maggy is a Cincinnati based artist and piano technician currently
                servicing Cincinnati, Northern Kentucky, and surrounding areas. A graduate
                of Berklee College of Music in Boston Massachusetts, James auditioned in
                2012 and was accepted into the piano department- where he was principled
                in piano technology, acoustics, and majored in composition in 2016.
              </p>
              <p>
                Since then, James has maintained several pianos that were transported and
                serviced daily for regional touring. Formerly based out of Los Angeles,
                much of his work has been on studio-pianos, though he is often working on
                pianos in a client's home.
              </p>
              <p>
                Whether it's a full restoration of a family heirloom or just a charming
                old piano someone is curious about playing again, James's attention for
                adjustments and repairs are tailored to a piano's needs and client's budget.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="services"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/image1.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            position: 'relative'
          }}
        >
          <div className="services-overlay"></div>
          <div className="section-content" style={{ position: 'relative', zIndex: 2 }}>
            <h3>SERVICES</h3>
            <div className="services-grid">
              <div className="service-item">
                <h4>Piano Tuning</h4>
                <p>Professional tuning services to restore perfect pitch and harmony</p>
                <p className="price">$100-$200</p>
              </div>
              <div className="service-item">
                <h4>Repair & Restoration</h4>
                <p>Comprehensive restoration of antique and concert grand pianos</p>
              </div>
              <div className="service-item">
                <h4>Key Repair</h4>
                <p>Fixing stuck and sticky keys, key replacement and regulation</p>
              </div>
              <div className="service-item">
                <h4>Action & Pedal Repair</h4>
                <p>Expert repair of piano action mechanisms and pedal systems</p>
              </div>
              <div className="service-item">
                <h4>String Replacement</h4>
                <p>Professional string replacement and tensioning</p>
              </div>
              <div className="service-item">
                <h4>Voicing & Regulation</h4>
                <p>Fine-tuning tone quality and touch response</p>
              </div>
            </div>
            <div className="service-note">
              <p><strong>Service Area:</strong> Cincinnati, Northern Kentucky, Southern Indiana,
              Dayton, Mason, Fairfield, and surrounding communities</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="testimonials"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/image1.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            position: 'relative'
          }}
        >
          <div className="testimonials-overlay"></div>
          <div className="section-content" style={{ position: 'relative', zIndex: 2 }}>
            <h3>THUMBTACK REVIEWS</h3>
            <div className="testimonials-grid">
              <div className="testimonial-item testimonial-large">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  James was such a pleasure to work with. He showed up, did his thing in a timely manner
                  and was also very personable. You can tell he enjoys what he does. Very reasonably priced
                  and will definitely reach out to him again for piano tuning. My Yamaha is sounding better
                  than ever. Thanks again, James!
                </p>
                <p className="testimonial-author">— Rana K.</p>
                <p className="testimonial-location">March 11, 2025</p>
              </div>

              <div className="testimonial-item">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  James did an excellent job tuning our "new to us" piano. He responded quickly and our
                  piano sounds wonderful!
                </p>
                <p className="testimonial-author">— Kristen L.</p>
                <p className="testimonial-location">July 24, 2025</p>
              </div>

              <div className="testimonial-item">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  He answered me instantly and came to tune my piano the next day! My piano sounds so
                  much better now! Definitely gonna have him come back :)
                </p>
                <p className="testimonial-author">— Bella K.</p>
                <p className="testimonial-location">May 7, 2025</p>
              </div>

              <div className="testimonial-item testimonial-accent">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  We were really happy with Jim. He tuned are piano beautifully, and I now have a new "guy".
                  Hit me up if you want a referral.
                </p>
                <p className="testimonial-author">— Trish G.</p>
                <p className="testimonial-location">February 5, 2025</p>
              </div>

              <div className="testimonial-item">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  Solid piano tuning and solid dude
                </p>
                <p className="testimonial-author">— Judah e.</p>
                <p className="testimonial-location">February 3, 2025</p>
              </div>

              <div className="testimonial-item">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  James fixed the sticky key efficiently and effectively. Thanks to his professionalism
                </p>
                <p className="testimonial-author">— Richard L.</p>
                <p className="testimonial-location">August 12, 2025</p>
              </div>

              <div className="testimonial-item">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  Very nice person. Concentrated, patient, polite, and professional.
                </p>
                <p className="testimonial-author">— Baohe C.</p>
                <p className="testimonial-location">July 16, 2025</p>
              </div>

              <div className="testimonial-item">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  Did a wonderful job and explained the process as he worked. I'd highly recommend James.
                </p>
                <p className="testimonial-author">— Anthony L.</p>
                <p className="testimonial-location">July 8, 2025</p>
              </div>

              <div className="testimonial-item">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  James was awesome! My old piano sounds new again.
                </p>
                <p className="testimonial-author">— Kerry N.</p>
                <p className="testimonial-location">May 31, 2025</p>
              </div>

              <div className="testimonial-item">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  Jimmy got my new antique piano sounding exactly the way I wanted it to. Wouldn't recommend
                  anybody else.
                </p>
                <p className="testimonial-author">— James M.</p>
                <p className="testimonial-location">January 30, 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="faq"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/image1.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            position: 'relative'
          }}
        >
          <div className="faq-overlay"></div>
          <div className="section-content" style={{ position: 'relative', zIndex: 2 }}>
            <h3>FREQUENTLY ASKED QUESTIONS</h3>
            <div className="faq-list">
              <div className="faq-item">
                <h4>How often should my piano be tuned?</h4>
                <p>
                  Most pianos should be tuned at least once or twice a year to maintain
                  optimal performance. Pianos in concert settings or heavy use may require
                  more frequent tuning. If your piano hasn't been tuned in over 5 years,
                  it will typically require two tunings to properly hold pitch.
                </p>
              </div>
              <div className="faq-item">
                <h4>How much does piano tuning cost?</h4>
                <p>
                  Piano tuning ranges from $100-$200, depending on your location and the
                  condition of your piano. Minor sticky key adjustments during a regular
                  tuning are included in the tuning rate ($150-$200). More extensive repairs
                  requiring parts replacement may cost $100-$200 for 1-2 hours of labor.
                </p>
              </div>
              <div className="faq-item">
                <h4>Can you repair stuck or sticky keys?</h4>
                <p>
                  Yes! Sticky key repairs are a specialty. Minor adjustments can often be
                  made during a regular tuning appointment. For more extensive repairs
                  requiring parts replacement, additional time and cost may be involved.
                </p>
              </div>
              <div className="faq-item">
                <h4>Do you work on antique pianos?</h4>
                <p>
                  Absolutely. Jimmy specializes in restoring antique and estate pianos,
                  often salvaging instruments that others have deemed unplayable. Every
                  effort is made to work within your budget to preserve these treasured
                  instruments.
                </p>
              </div>
              <div className="faq-item">
                <h4>What areas do you service?</h4>
                <p>
                  Primary service area includes Cincinnati, Northern Kentucky, Southern
                  Indiana, and surrounding communities including Dayton, Mason, and Fairfield.
                  Contact us to confirm service availability in your specific location.
                </p>
              </div>
              <div className="faq-item">
                <h4>Why does my piano need multiple tunings if it hasn't been tuned in years?</h4>
                <p>
                  Pianos that have been in fluctuating temperatures or haven't been tuned
                  in 5+ years typically require two tunings. The first brings the piano
                  closer to pitch, and the second (done after the piano has settled) ensures
                  it holds that pitch properly over time.
                </p>
              </div>
              <div className="faq-item">
                <h4>What is your background and training?</h4>
                <p>
                  Jimmy studied at Berklee College of Music in Boston, bringing both musical
                  expertise and technical precision to every piano service. This unique
                  combination ensures not just technical accuracy, but a musician's ear
                  for tonal quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="contact"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/image1.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            position: 'relative'
          }}
        >
          <div className="contact-overlay"></div>
          <div className="section-content" style={{ position: 'relative', zIndex: 2 }}>
            <h3>GET IN TOUCH</h3>
            <div className="contact-container">
              <div className="contact-details">
                <div className="detail-item">
                  <h4>PHONE</h4>
                  <p><a href="tel:8156039854">815-603-9854</a></p>
                </div>
                <div className="detail-item">
                  <h4>SERVICE AREA</h4>
                  <p>Cincinnati, OH<br/>
                  Northern Kentucky<br/>
                  Southern Indiana</p>
                </div>
              </div>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="contact-form"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="NAME"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="EMAIL"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="PHONE"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="MESSAGE"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Maggy Piano Services. Cincinnati, Ohio.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
