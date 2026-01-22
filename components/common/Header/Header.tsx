import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className="bg-gray-400/50 text-white py-4 fixed top-0 w-full z-50">
      <div className="container">
        <div className="flex justify-between items-center">
          <Logo />
          <ul className="flex gap-4">
            <li>
              <Button asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                variant={"outline"}
                className="text-black"
              >
                <Link href="/auth/register">Register</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
