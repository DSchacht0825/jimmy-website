import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Add structured data for SEO
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://www.callmaggy.com/#organization",
          "name": "Maggy Piano Services",
          "alternateName": "James Maggy Piano Services",
          "url": "https://www.callmaggy.com/",
          "logo": "https://www.callmaggy.com/image1.jpg",
          "image": "https://www.callmaggy.com/image2.jpg",
          "description": "Professional piano tuning, repair, and restoration services in Cincinnati, Northern Kentucky, and Southern Indiana. Berklee College of Music trained technician specializing in piano technology and acoustics.",
          "telephone": "+1-815-603-9854",
          "priceRange": "$100 - $200",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cincinnati",
            "addressRegion": "OH",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "39.103119",
            "longitude": "-84.512020"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Cincinnati",
              "containedInPlace": {
                "@type": "State",
                "name": "Ohio"
              }
            },
            {
              "@type": "Place",
              "name": "Northern Kentucky"
            },
            {
              "@type": "Place",
              "name": "Southern Indiana"
            },
            {
              "@type": "City",
              "name": "Dayton",
              "containedInPlace": {
                "@type": "State",
                "name": "Ohio"
              }
            },
            {
              "@type": "City",
              "name": "Mason",
              "containedInPlace": {
                "@type": "State",
                "name": "Ohio"
              }
            },
            {
              "@type": "City",
              "name": "Fairfield",
              "containedInPlace": {
                "@type": "State",
                "name": "Ohio"
              }
            }
          ],
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "08:00",
            "closes": "18:00"
          },
          "founder": {
            "@type": "Person",
            "name": "James Maggy",
            "jobTitle": "Piano Technician",
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Berklee College of Music",
              "location": "Boston, Massachusetts"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "10",
            "bestRating": "5",
            "worstRating": "5"
          }
        },
        {
          "@type": "Service",
          "@id": "https://www.callmaggy.com/#piano-tuning",
          "serviceType": "Piano Tuning",
          "provider": {
            "@id": "https://www.callmaggy.com/#organization"
          },
          "areaServed": {
            "@type": "State",
            "name": "Ohio"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Piano Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Piano Tuning",
                  "description": "Equal temperament tuning with meticulous attention to beat-rates and note relationships"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Piano Restoration",
                  "description": "Full restoration of family heirlooms and antique pianos"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Piano Repair",
                  "description": "Professional repairs for new and old pianos"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Piano Cleaning",
                  "description": "Thorough cleaning with disassembly to improve functioning and air quality"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "String Replacement",
                  "description": "Professional string replacement and custom bass string ordering"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Voicing & Regulation",
                  "description": "Action adjustments to optimize dynamics and playability"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Key & Pedal Repair",
                  "description": "Adjustments to eliminate friction and match piano feel"
                }
              }
            ]
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How often should my piano be tuned?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most pianos should be tuned at least once or twice a year to maintain optimal performance. Pianos in concert settings or heavy use may require more frequent tuning. If your piano hasn't been tuned in over 5 years, it will typically require two tunings to properly hold pitch."
              }
            },
            {
              "@type": "Question",
              "name": "What does a piano tuning cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Piano tuning costs between $100 & $200 depending on location and the condition of the piano. A piano that's been kept in fluctuating temperatures or hasn't been tuned in 5+ years typically needs to be tuned twice (sometimes in one visit) to hold a pitch."
              }
            },
            {
              "@type": "Question",
              "name": "How much does it cost to fix sticky keys?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A lot of the time sticky-key issues can be fixed via adjustments while tuning a piano, covered in the tuning rate ($150-$200). Other times keys need replacement parts, which are inexpensive but take time to install, costing $100-$200 depending on the project."
              }
            },
            {
              "@type": "Question",
              "name": "Do you work on antique pianos?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We especially enjoy bringing older pianos back to life. Restoration projects can be customized to fit specific budgets and can preserve the original 'old timey' sound while restoring essential functions."
              }
            },
            {
              "@type": "Question",
              "name": "What areas do you service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Primary service area includes Cincinnati, Northern Kentucky, Eastern Indiana, and surrounding communities including Dayton, Mason, and Fairfield."
              }
            },
            {
              "@type": "Question",
              "name": "Why does my piano need multiple tunings if it hasn't been tuned in years?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pianos that have been in fluctuating temperatures or haven't been tuned in 5+ years typically require two tunings. The first brings the piano closer to pitch, and the second (done after the piano has settled) ensures it holds that pitch properly over time."
              }
            }
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Netlify form handling
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString()
    })
      .then(() => {
        setSubmitStatus('success');
        // Clear form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        // Reset submit button after 3 seconds
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitStatus(null);
        }, 3000);
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
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
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div className="section-content">
            <h3>about</h3>
            <div className="about-container">
              <img
                src={`${process.env.PUBLIC_URL}/image1.jpg`}
                alt="Professional piano tuning and repair services by James Maggy, Berklee College of Music trained technician in Cincinnati"
                className="about-image"
              />
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
                  Practiced in a method of tuning referred to as "equal temperament", meticulous
                  attention is given to "beat-rates" and relationships between notes on a piano.
                  This ensures that each string is not only in tune, but properly compromising to
                  create harmony with the rest of the notes on a piano.
                </p>
              </div>
              <div className="service-item">
                <h4>restoration</h4>
                <p>
                  The full restoration of a family heirloom or found treasure is an incredible project
                  to be part of, as many piano's have such rich histories and have endured so many changes.
                  Some restoration projects require everything to be replaced besides the original plate
                  and cabinet, while other projects are focused on utilizing as much of the original as
                  possible. This can include rebuilding pieces of the original actions and reinstalling
                  the pins and felts that make everything work effectively.
                </p>
              </div>
              <div className="service-item">
                <h4>repair</h4>
                <p>
                  Taking the time to have professional repairs done on your piano can make a world of
                  difference and transform your instrument quickly. Whether you have a new piano with
                  minor issues or an old piano that's been out of commission for years, a few hours of
                  attention can make a huge difference.
                </p>
                <p>
                  Sometimes a client has a specific budget in mind. It's also not uncommon that a client
                  wants to preserve elements of the "old timey" sound of their piano for recording/etc.
                  In these cases, a piano's needs can be triaged to restore essential functions of a
                  piano, and returned to a place where it can be appreciated again.
                </p>
              </div>
              <div className="service-item">
                <h4>cleaning</h4>
                <p>
                  A thorough cleaning can often benefit the functioning of a piano, as well as improve
                  air quality in a home. Often things unnoticed are dropped inside parts of a piano and
                  subtly influence performance. Involving disassembly, a piano cleaning can reveal hidden
                  treasure and quite literally breathe new life into an instrument.
                </p>
              </div>
              <div className="service-item">
                <h4>string replacement</h4>
                <p>
                  Strings often break after moving a piano, during temperature changes, or sometimes
                  spontaneously for seemingly no reason at all. The broken string can be left inside
                  the piano so it can be later measured for its replacement. Broken bass strings will
                  usually need to be ordered and custom-made. Strings are carefully stretched and wound
                  when installed. If you are replacing a string on your piano it may need to be tuned a
                  second time in the year to help stretch the string to stay in tune.
                </p>
              </div>
              <div className="service-item">
                <h4>voicing & regulation</h4>
                <p>
                  Voicing and regulation is the practiced technique of making adjustments to the action
                  and other mechanisms in the piano to optimize dynamics and the overall playability of
                  a piano. If a piano is having issues with sticking keys, sustained notes, or unwanted
                  clicks/noises, a voicing and regulation is almost always where the issue will be resolved.
                </p>
              </div>
              <div className="service-item">
                <h4>key & pedal repair</h4>
                <p>
                  Keys sometimes swell in changing climates or become damaged over time requiring adjustments
                  to eliminate friction or noise and to match the feel of the rest of a piano. Similar issues
                  can arise with the pedals on a piano. Both keys and pedals are responsible for triggering a
                  series of chain reactions within a piano which makes adjustments to the alignment and
                  resistance of these parts extremely influential to a piano's sound and feel.
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
                  Most pianos should be tuned at least once or twice a year to maintain
                  optimal performance. Pianos in concert settings or heavy use may require
                  more frequent tuning. If your piano hasn't been tuned in over 5 years,
                  it will typically require two tunings to properly hold pitch.
                </p>
              </div>
              <div className="faq-item">
                <h4>what does a tuning cost?</h4>
                <p>
                  • Between $100 & $200 depending on location and the condition of the piano.
                </p>
                <p>
                  • A piano that's been kept in fluctuating temperatures or hasn't been tuned
                  in 5+ years typically needs to be tuned twice (sometimes in one visit) to
                  hold a pitch.
                </p>
              </div>
              <div className="faq-item">
                <h4>how much does it cost to fix sticky keys?</h4>
                <p>
                  • A lot of the time sticky-key issues are something I can fix via making
                  adjustments while I'm tuning a piano. If that's the case, I cover minor
                  repairs in my tuning rate. ($150-$200)
                </p>
                <p>
                  • Other times keys are sticking because pieces within the piano-action
                  need to be replaced. Luckily, a majority of the replacement parts are
                  very inexpensive- they just take time to install. Depending on the project
                  it could take one to 2 hours. ($100-$200)
                </p>
              </div>
              <div className="faq-item">
                <h4>do you work on antique pianos?</h4>
                <p>
                  Absolutely. I especially enjoy bringing older pianos back to life. A full-on
                  restoration can become pretty elaborate. Sometimes a client has a specific
                  budget in mind. It's also not uncommon that a client wants to preserve elements
                  of the "old timey" sound of their piano for recording/etc. In these cases I can
                  triage a piano's needs and restore essential functions of a piano, bringing it
                  back to a place where it can be appreciated again.
                </p>
              </div>
              <div className="faq-item">
                <h4>what areas do you service?</h4>
                <p>
                  Primary service area includes Cincinnati, Northern Kentucky, Eastern Indiana,
                  and surrounding communities including Dayton, Mason, and Fairfield. Contact to
                  confirm service availability in your specific location.
                </p>
              </div>
              <div className="faq-item">
                <h4>why does my piano need multiple tunings if it hasn't been tuned in years?</h4>
                <p>
                  Pianos that have been in fluctuating temperatures or haven't been tuned in
                  5+ years typically require two tunings. The first brings the piano closer
                  to pitch, and the second (done after the piano has settled) ensures it holds
                  that pitch properly over time.
                </p>
              </div>
              <div className="faq-item">
                <h4>what is your background and training?</h4>
                <p>
                  A graduate of Berklee College of Music in Boston Massachusetts, James auditioned
                  in 2012 and was accepted into the piano department- where he was principled in
                  piano technology, acoustics, and majored in composition in 2016. Since then,
                  James has maintained several pianos that were transported and serviced daily
                  for regional touring. Formerly based out of Los Angeles, much of his work has
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
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                  style={{
                    opacity: isSubmitting ? 0.6 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? 'sending...' : submitStatus === 'success' ? 'sent!' : 'send message'}
                </button>
                {submitStatus === 'success' && (
                  <p style={{ color: '#4CAF50', marginTop: '10px', fontSize: '14px' }}>
                    Thank you for your message! We will be in touch soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p style={{ color: '#f44336', marginTop: '10px', fontSize: '14px' }}>
                    Error submitting form. Please call us directly at 815-603-9854.
                  </p>
                )}
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
