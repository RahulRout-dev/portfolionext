import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Luke<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
            <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;


{/* <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-blue-200">
Kru
<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400">
  tika
</span>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"> O.</span>
</h1> */}
