import Link from "next/link";

export default function Home() {
  return (
    <header>
      <nav className="flex items-center bg-pink-300 h-20 px-4 sm:px-10">
        <img
          className="ml-0 sm:ml-10"
          height={100}
          width={100}
          src="https://i.pinimg.com/originals/a1/f7/5b/a1f75b6b8206ae06d98d1c79750f7673.jpg"
          alt="logo"
        />
        <h1 className="flex items-center ml-0 sm:ml-10 text-2xl sm:text-3xl md:text-4xl font-serif text-orange-800 font-bold text-center sm:text-left">
          A CUP OF JOY IN EVERY SIP
        </h1>
        <ul className="flex flex-wrap justify-center sm:justify-start gap-4 ml-0 sm:ml-10 text-orange-800 font-semibold text-lg sm:text-base">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>

      <div className="flex flex-wrap gap-6 justify-center sm:justify-start sm:ml-10 mt-12">
        <div className="bg-orange-200 h-48 w-80 sm:w-96"></div>
        <div className="bg-red-200 h-48 w-80 sm:w-96"></div>
        <div className="bg-yellow-200 h-48 w-80 sm:w-96"></div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center sm:justify-start sm:ml-60 mt-12">
        <div className="bg-amber-400 h-48 w-80 sm:w-96"></div>
        <div className="bg-rose-400 h-48 w-80 sm:w-96"></div>
      </div>
    </header>
  );
}
