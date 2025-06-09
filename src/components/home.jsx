import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="heading">
        <h2>Indulge in Dreamlike Comfort</h2>
        <h4>
          Discover nightwear that blends elegance with comfort. From silky
          chemises to cozy robes, find pieces that celebrate your femininity.
        </h4>
        <button>
          <Link to="/shop">Explore Our Collections →</Link>
        </button>
      </section>
      <section className="reputation">
        <div>
          <img src="/assets/price-tag.png" alt="Price Tag" />
          <h3>Best Prices</h3>
          <p>
            We offer competitive prices with a price match guarantee. If you
            find a better deal elsewhere, we'll match it!
          </p>
        </div>
        <div>
          <img src="/assets/fabric.png" alt="Fabrics" />
          <h3>Premium Fabrics</h3>
          <p>
            We source only the softest and breathable materials, from silk
            satin, modal jersey, and organic cotton—for a heavenly feel on your
            skin.
          </p>
        </div>
        <div>
          <img src="/assets/unique.png" alt="Unique" />
          <h3>Unique Designs</h3>
          <p>
            Our in-house designers blend classic elegance with modern flair,
            offering styles you won't find anywhere else.
          </p>
        </div>
        <div>
          <img src="/assets/truck-delivery-outline.png" alt="Outline" />
          <h3>Quick Shipping</h3>
          <p>
            Receive your order quickly and in unbranded packaging because loving
            your nightwear should feel like a private luxury.
          </p>
        </div>
      </section>
      <section className="testimonials">
        <div className="customer-testimony">
          <img src="/assets/generic-profile.png" alt="Generic profile" />
          <p>
            “I never knew nightwear could feel this good! The satin set I
            ordered is so soft and lightweight I actually look forward to
            bedtime now. Plus, the fit was spot on and the delivery was faster
            than I expected!”
          </p>
          <h6>—Amara</h6>
        </div>
        <div className="customer-testimony">
          <img src="/assets/generic-profile.png" alt="Generic profile" />
          <p>
            “I'm obsessed with the fit and feel of these pajamas. They wash
            beautifully, don't lose shape, and look just as luxe after dozens of
            wears.”
          </p>
          <h6>—Sara</h6>
        </div>
        <div className="customer-testimony">
          <img src="/assets/generic-profile.png" alt="Generic profile" />
          <p>
            “Finally found nightwear that's both sexy and comfortable. The lace
            detailing is stunning, and the fabric feels like a dream against my
            skin.”
          </p>
          <h6>—Nkechi</h6>
        </div>
        <div className="customer-testimony">
          <img src="/assets/generic-profile.png" alt="Generic profile" />
          <p>
            “I never thought I'd invest in pajamas now I'm never going back!
            Total game-changer for my bedtime routine and self-care evenings.”
          </p>
          <h6>—Folake</h6>
        </div>
      </section>
    </main>
  );
}
