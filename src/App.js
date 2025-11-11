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
          <ul className="nav-links">
            <li><a href="#home" onClick={closeMobileMenu}>home</a></li>
            <li><a href="#about" onClick={closeMobileMenu}>about</a></li>
            <li><a href="#services" onClick={closeMobileMenu}>services</a></li>
            <li><a href="#testimonials" onClick={closeMobileMenu}>testimonials</a></li>
            <li><a href="#faq" onClick={closeMobileMenu}>faq</a></li>
            <li><a href="#contact" onClick={closeMobileMenu}>contact</a></li>
          </ul>
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
        <section id="about" className="about">
          <div className="section-content">
            <h3>about jimmy</h3>
            <div className="about-container">
              <img
                src={`${process.env.PUBLIC_URL}/image1.jpg`}
                alt="Piano"
                className="about-image"
              />
              <div className="about-text">
                <p>
                  james maggy is a cincinnati based artist and piano technician currently
                  servicing cincinnati, northern kentucky, and surrounding areas. a graduate
                  of berklee college of music in boston massachusetts, james auditioned in
                  2012 and was accepted into the piano department- where he was principled
                  in piano technology, acoustics, and majored in composition in 2016.
                </p>
                <p>
                  since then, james has maintained several pianos that were transported and
                  serviced daily for regional touring. formerly based out of los angeles,
                  much of his work has been on studio-pianos, though he is often working on
                  pianos in a client's home.
                </p>
                <p>
                  whether it's a full restoration of a family heirloom or just a charming
                  old piano someone is curious about playing again, james's attention for
                  adjustments and repairs are tailored to a piano's needs and client's budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services">
          <div className="section-content">
            <h3>services</h3>
            <div className="services-grid">
              <div className="service-item">
                <h4>piano tuning</h4>
                <p>
                  practiced in a method of tuning referred to as "equal temperament", meticulous
                  attention is given to "beat-rates" and relationships between notes on a piano.
                  this ensures that each string is not only in tune, but properly compromising to
                  create harmony with the rest of the notes on a piano.
                </p>
              </div>
              <div className="service-item">
                <h4>restoration</h4>
                <p>
                  the full restoration of a family heirloom or found treasure is an incredible project
                  to be part of, as many piano's have such rich histories and have endured so many changes.
                  some restoration projects require everything to be replaced besides the original plate
                  and cabinet, while other projects are focused on utilizing as much of the original as
                  possible. this can include rebuilding pieces of the originional actions and reinstalling
                  the pins and felts that make every work effectively.
                </p>
              </div>
              <div className="service-item">
                <h4>repair</h4>
                <p>
                  taking the time to have professional repairs done on your piano can make a world of
                  difference and transform your instrument quickly. whether you have a new piano with
                  minor issues or an old piano that's been out of commission for years, a few hours of
                  attention can make a huge difference.
                </p>
                <p>
                  sometimes client has a specific budget in mind. it's also not uncommon that a client
                  wants to preserve elements of the "old timey" sound of their piano for recording/etc.
                  in these cases, a piano's needs can be triaged to restore essential functions of a
                  piano, and returned to a place where it can be appreciated again.
                </p>
              </div>
              <div className="service-item">
                <h4>cleaning</h4>
                <p>
                  a thorough cleaning can often benefit the functioning of a piano, as well as improve
                  air quality in a home. often things unnoticed are dropped inside parts of a piano and
                  subtly influence performance. involving disassembly, a piano cleaning can reveal hidden
                  treasure and quite literally breathe new life into an instrument.
                </p>
              </div>
              <div className="service-item">
                <h4>string replacement</h4>
                <p>
                  strings often break after moving a piano, during temperature changes, or sometimes
                  spontaneously for seemingly no reason at all. the broken string can be left inside
                  the piano so it can be later measured for it's replacement. broken bass strings will
                  usually need to be ordered and custom-made. strings are carefully stretched and wound
                  when installed. if you are replacing a string on your piano it may need to be tuned a
                  second time in the year to help stretch the string to stay in tune.
                </p>
              </div>
              <div className="service-item">
                <h4>voicing & regulation</h4>
                <p>
                  voicing and regulation is the practiced technique of making adjustments to the action
                  and other mechanisms in the piano to optimize dynamics and the overall playability of
                  a piano. if a piano is having issues with sticking keys, sustained notes, or unwanted
                  clicks/noises, a voicing and regulation is almost always where the issue will be resolved.
                </p>
              </div>
              <div className="service-item">
                <h4>key & pedal repair</h4>
                <p>
                  keys sometimes swell in changing climates or become damaged over time requiring adjustments
                  to eliminate friction or noise and to match the feel of the rest of a piano. similar issues
                  can arise with the pedals on a piano. both keys and pedals are responsible for triggering a
                  series of chain reactions within a piano which makes adjustments to the alignment and
                  resistance of these parts extremely influential to a pianos sound and feel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials">
          <div className="section-content">
            <h3>thumbtack reviews</h3>
            <div className="testimonials-grid">
              <div className="testimonial-item testimonial-large">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  james was such a pleasure to work with. he showed up, did his thing in a timely manner
                  and was also very personable. you can tell he enjoys what he does. very reasonably priced
                  and will definitely reach out to him again for piano tuning. my yamaha is sounding better
                  than ever. thanks again, james!
                </p>
                <p className="testimonial-author">— rana k.</p>
                <p className="testimonial-location">march 11, 2025</p>
              </div>

              <div className="testimonial-item">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  james did an excellent job tuning our "new to us" piano. he responded quickly and our
                  piano sounds wonderful!
                </p>
                <p className="testimonial-author">— kristen l.</p>
                <p className="testimonial-location">july 24, 2025</p>
              </div>

              <div className="testimonial-item">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  he answered me instantly and came to tune my piano the next day! my piano sounds so
                  much better now! definitely gonna have him come back :)
                </p>
                <p className="testimonial-author">— bella k.</p>
                <p className="testimonial-location">may 7, 2025</p>
              </div>

              <div className="testimonial-item testimonial-accent">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  we were really happy with jim. he tuned are piano beautifully, and i now have a new "guy".
                  hit me up if you want a referral.
                </p>
                <p className="testimonial-author">— trish g.</p>
                <p className="testimonial-location">february 5, 2025</p>
              </div>

              <div className="testimonial-item">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  solid piano tuning and solid dude
                </p>
                <p className="testimonial-author">— judah e.</p>
                <p className="testimonial-location">february 3, 2025</p>
              </div>

              <div className="testimonial-item">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  james fixed the sticky key efficiently and effectively. thanks to his professionalism
                </p>
                <p className="testimonial-author">— richard l.</p>
                <p className="testimonial-location">august 12, 2025</p>
              </div>

              <div className="testimonial-item">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  very nice person. concentrated, patient, polite, and professional.
                </p>
                <p className="testimonial-author">— baohe c.</p>
                <p className="testimonial-location">july 16, 2025</p>
              </div>

              <div className="testimonial-item">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  did a wonderful job and explained the process as he worked. i'd highly recommend james.
                </p>
                <p className="testimonial-author">— anthony l.</p>
                <p className="testimonial-location">july 8, 2025</p>
              </div>

              <div className="testimonial-item">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  james was awesome! my old piano sounds new again.
                </p>
                <p className="testimonial-author">— kerry n.</p>
                <p className="testimonial-location">may 31, 2025</p>
              </div>

              <div className="testimonial-item">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  jimmy got my new antique piano sounding exactly the way i wanted it to. wouldn't recommend
                  anybody else.
                </p>
                <p className="testimonial-author">— james m.</p>
                <p className="testimonial-location">january 30, 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="faq">
          <div className="section-content">
            <h3>frequently asked questions</h3>
            <div className="faq-list">
              <div className="faq-item">
                <h4>how often should my piano be tuned?</h4>
                <p>
                  most pianos should be tuned at least once or twice a year to maintain
                  optimal performance. pianos in concert settings or heavy use may require
                  more frequent tuning. if your piano hasn't been tuned in over 5 years,
                  it will typically require two tunings to properly hold pitch.
                </p>
              </div>
              <div className="faq-item">
                <h4>what does a tuning cost?</h4>
                <p>
                  • between $100 & $200 depending on location and the condition of the piano.
                </p>
                <p>
                  • a piano thats been kept in fluctuating temperatures or hasn't been tuned
                  in 5+ years typically needs to be tuned twice (sometimes in one visit) to
                  hold a pitch.
                </p>
              </div>
              <div className="faq-item">
                <h4>how much does it cost to fix sticky keys?</h4>
                <p>
                  • a lot of the time sticky-key issues are something i can fix via making
                  adjustments while i'm tuning a piano. if that's the case, i cover minor
                  repairs in my tuning rate. ($150-$200)
                </p>
                <p>
                  • other times keys are sticking because pieces within the piano-action
                  need to be replaced. luckily, a majority of the replacement parts are
                  very inexpensive- they just take time to install. depending on the project
                  it could take one to 2 hours. ($100-$200)
                </p>
              </div>
              <div className="faq-item">
                <h4>do you work on antique pianos?</h4>
                <p>
                  absolutely. i especially enjoy bringing older pianos back to life. a full-on
                  restoration can become pretty elaborate. sometimes a client has a specific
                  budget in mind. it's also not uncommon that a client wants to preserve elements
                  of the "old timey" sound of their piano for recording/etc. in these cases i can
                  triage a piano's needs and restore essential functions of a piano, bringing it
                  back to a place where it can be appreciated again.
                </p>
              </div>
              <div className="faq-item">
                <h4>what areas do you service?</h4>
                <p>
                  primary service area includes cincinnati, northern kentucky, eastern indiana,
                  and surrounding communities including dayton, mason, and fairfield. contact to
                  confirm service availability in your specific location.
                </p>
              </div>
              <div className="faq-item">
                <h4>why does my piano need multiple tunings if it hasn't been tuned in years?</h4>
                <p>
                  pianos that have been in fluctuating temperatures or haven't been tuned in
                  5+ years typically require two tunings. the first brings the piano closer
                  to pitch, and the second (done after the piano has settled) ensures it holds
                  that pitch properly over time.
                </p>
              </div>
              <div className="faq-item">
                <h4>what is your background and training?</h4>
                <p>
                  a graduate of berklee college of music in boston massachusetts, james auditioned
                  in 2012 and was accepted into the piano department- where he was principled in
                  piano technology, acoustics, and majored in composition in 2016. since then,
                  james has maintained several pianos that were transported and serviced daily
                  for regional touring. formerly based out of los angeles, much of his work has
                  been on studio-pianos, though he is often working on pianos in a client's home,
                  whether it's a full restoration of a family heirloom or just a charming old piano
                  someone is curious about playing again.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="section-content">
            <h3>get in touch</h3>
            <div className="contact-container">
              <div className="contact-details">
                <div className="detail-item">
                  <h4>phone</h4>
                  <p><a href="tel:8156039854">815-603-9854</a></p>
                </div>
                <div className="detail-item">
                  <h4>service area</h4>
                  <p>cincinnati, oh<br/>
                  northern kentucky<br/>
                  southern indiana</p>
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
                    placeholder="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">send message</button>
              </form>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} maggy piano services. cincinnati, ohio.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
