import Link from "next/link";
export default function Home() {
  return (
   <header>
    <nav className="flex items-center bg-pink-300 h-20">
    <img className="ml-10" height={100} width={100} src="https://i.pinimg.com/originals/a1/f7/5b/a1f75b6b8206ae06d98d1c79750f7673.jpg" alt="logo" />
   <h1 className="flex items-center ml-48 text-3xl font-serif text-orange-800 text-bold">A CUP OF JOY IN EVERY SIP</h1>
   <ul className="flex items-center gap-4 ml-52 font-semibold text-orange-800">
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
   <nav className="flex items-center gap-6 ml-10">
   <div className="bg-orange-200 h-48 w-96 mt-12"></div>
   <div className="bg-red-200 h-48 w-96 mt-12"></div>
   <div className="bg-yellow-200 h-48 w-96 mt-12"></div>
   </nav>
   <nav className="flex items-center gap-6 ml-60">
   <div className="bg-amber-400 h-48 w-96 mt-12"></div>
   <div className="bg-rose-400 h-48 w-96 mt-12"></div>
   </nav>
   </header>
  );
}
