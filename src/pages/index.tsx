import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] font-sans">
      {/* Header */}
      <header
        id="header"
        className="flex flex-wrap justify-between items-center relative z-10 text-white bg-[rgba(123,36,36,0.84)] px-5 h-[90px] border-b border-white"
      >
        <div className="left-header w-1/3 text-2xl font-semibold font-newsreader">
          Thread & Clay.
        </div>
        <nav className="middle-header flex justify-evenly gap-5 items-center w-2/5">
          <a href="#" className="cursor-pointer">Home</a>
          <div className="relative group dropdown-menu flex items-center gap-1">
            Shop
            <Image src="/icons/caret-down-white-icon.svg" alt="" width={12} height={12} />
            <div className="dropdown absolute left-0 top-full bg-neutral-700 text-white pt-2 rounded-md text-sm opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity min-w-max shadow-lg">
              <a href="#" className="block px-6 py-2 hover:bg-neutral-800">Paintings</a>
              <a href="#" className="block px-6 py-2 hover:bg-neutral-800">Pottery</a>
              <a href="#" className="block px-6 py-2 hover:bg-neutral-800">Weavings</a>
            </div>
          </div>
          <div className="relative group dropdown-menu flex items-center gap-1">
            Pages
            <Image src="/icons/caret-down-white-icon.svg" alt="" width={12} height={12} />
            <div className="dropdown absolute left-0 top-full bg-neutral-700 text-white pt-2 rounded-md text-sm opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity min-w-max shadow-lg">
              <a href="#about" className="block px-6 py-2 hover:bg-neutral-800">About us</a>
              <a href="#contact-us" className="block px-6 py-2 hover:bg-neutral-800">Contact us</a>
            </div>
          </div>
          <div className="relative group dropdown-menu flex items-center gap-1">
            Blog
            <Image src="/icons/caret-down-white-icon.svg" alt="" width={12} height={12} />
            <div className="dropdown absolute left-0 top-full bg-neutral-700 text-white pt-2 rounded-md text-sm opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity min-w-max shadow-lg">
              <span className="block px-6 py-2 hover:bg-neutral-800">Single Post</span>
              <span className="block px-6 py-2 hover:bg-neutral-800">Search results</span>
              <span className="block px-6 py-2 hover:bg-neutral-800">Post comments</span>
            </div>
          </div>
        </nav>
        <div className="right-header flex items-center w-1/3 justify-end gap-4 relative">
          <input
            className="search-box bg-transparent text-white h-[30px] w-2/3 border border-white border-r-0 pl-3 rounded-l-full outline-none placeholder-white"
            type="text"
            placeholder="Search products..."
          />
          <button className="search-icon bg-transparent border border-white border-l-0 h-[34px] rounded-r-full flex items-center px-2 relative">
            <Image src="/icons/search-icon.svg" alt="Search" width={20} height={20} />
            <span className="tooltip absolute bg-gray-500 text-white px-2 py-1 rounded text-xs bottom-[-40px] right-[-10px] opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
              Search
            </span>
          </button>
          <div className="account-sec relative flex items-center cursor-pointer">
            <Image src="/icons/account-white-icon.svg" alt="Account" width={35} height={35} className="ml-5" />
            <span className="tooltip absolute bg-gray-500 text-white px-2 py-1 rounded text-xs bottom-[-40px] right-[10px] opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
              Account
            </span>
          </div>
          <a href="#" className="relative">
            <div className="cart-container relative">
              <Image src="/icons/shopping-cart-white-icon.svg" alt="Cart" width={35} height={35} className="ml-5" />
              <div className="count absolute -top-2 -right-2 px-2 py-1 bg-black text-white text-xs font-medium rounded-full">
                3
              </div>
            </div>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="home flex flex-col justify-center items-center relative mt-0 mb-16 bg-cover bg-center bg-no-repeat h-[600px] w-full" style={{ backgroundImage: "url('/images/Beige Collage Minimalist Mood Board Instagram Post.svg')" }}>
        <div id="about"></div>
        <h2 className="z-10 text-3xl md:text-4xl font-bold text-white text-center drop-shadow-lg mb-4">
          Dive into Creativity with our art collection
        </h2>
        <p className="z-10 text-lg md:text-xl text-white text-center mb-6 max-w-xl drop-shadow">
          Handmade with love, crafted for you. Thread & Clay is inspired by earth, shaped by hand.
        </p>
        <button className="z-10 h-12 w-2/5 min-w-[150px] max-w-xs bg-[rgba(123,36,36,0.84)] text-white rounded-full transition hover:bg-black">
          Go to shop
        </button>
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </section>

      {/* Bestsellers Section */}
      <section className="sales-section py-12" id="best-sellers">
        <h2 className="bestsellers text-2xl font-bold text-center mb-8">Bestsellers</h2>
        <div className="product-showcase flex flex-wrap justify-center gap-8 px-4">
          {/* Example product card */}
          <div className="showcase bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-full max-w-xs">
            <Image src="/images/Vase-product.svg" alt="Vase" width={200} height={200} className="mb-4" />
            <div className="details flex flex-col items-center gap-2 mb-4">
              {/* ...product details here... */}
              <span className="font-semibold">Vase</span>
              <span className="text-gray-500">$45</span>
            </div>
            <button className="bg-[rgba(123,36,36,0.84)] text-white rounded-full px-6 py-2 transition hover:bg-black">
              Add to cart
            </button>
          </div>
          {/* Repeat for other products as needed */}
        </div>
      </section>

      {/* Media Section */}
      <section className="mid-section flex flex-col md:flex-row items-center justify-center py-12 px-4 bg-[#fafafa]">
        <iframe
          className="img1 w-full max-w-lg h-64 md:h-80 rounded-lg shadow-lg"
          src="https://player.vimeo.com/video/1122500526?autoplay=1&muted=1&loop=1&controls=1&background=0"
          title="Performance Video"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
        <div className="mid-section-text md:ml-8 mt-8 md:mt-0 text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Experience the rhythm of tradition and innovation.
          </h3>
          <button className="bg-[rgba(123,36,36,0.84)] text-white rounded-full px-8 py-3 transition hover:bg-black">
            Watch More
          </button>
        </div>
      </section>

      {/* Newsletter Card */}
      <div className="card flex flex-col items-center justify-center bg-white p-8 max-w-md mx-auto rounded-lg shadow my-12">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubscribe} className="w-full">
          <div className="form-group mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgba(123,36,36,0.84)]"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-[rgba(123,36,36,0.84)] text-white py-2 rounded hover:bg-black transition">Subscribe</button>
          {subscribed && (
            <p className="message mt-4 text-green-600 font-semibold">✅ Thanks for subscribing!</p>
          )}
        </form>
      </div>

      {/* Footer */}
      <footer id="contact-us" className="flex flex-wrap justify-between gap-20 text-black border-t-2 border-[rgba(123,36,36,0.91)] py-12 px-8 mt-auto bg-white">
        <div>
          <h3 className="font-light text-xl mb-2">Email Us</h3>
          <p>threadandclay@comapany.com</p>
        </div>
        <div>
          <h3 className="font-light text-xl mb-2">Follow us</h3>
          <div className="contact-icons flex gap-3">
            <Image src="/icons/instagram.svg" alt="Instagram" width={40} height={40} />
            <Image src="/icons/facebook.svg" alt="Facebook" width={40} height={40} />
            <Image src="/icons/tiktok.svg" alt="TikTok" width={40} height={40} />
            <Image src="/icons/x.svg" alt="X" width={40} height={40} />
          </div>
        </div>
        <div>
          <h3 className="font-light text-xl mb-2">Our Shop</h3>
          <p>
            Terms and Policy<br />
            Contact Us<br />
            Offers and Promotion<br />
            Gift Cards<br />
            Store and Opening Hours<br />
          </p>
        </div>
        <div>
          <h3 className="font-light text-xl mb-2">Links</h3>
          <p>
            <a href="#header" className="text-black">Our Brand</a><br />
            Career<br />
            <a href="#about" className="text-black">About</a><br />
            Campaigns<br />
          </p>
        </div>
        <div className="w-[60%]">
          <h3 className="font-light text-xl mb-2">Our Location</h3>
          <p>
            Rush Green Campus, Dagenham Rd, Rush Green, Dagenham, United Kingdom<br />
            138 Waterville Rd, Avon, United States<br />
          </p>
        </div>
        <p className="w-full text-center mt-8">&copy; 2025 Thread & Clay. All rights reserved.</p>
      </footer>
    </div>
  );
}
