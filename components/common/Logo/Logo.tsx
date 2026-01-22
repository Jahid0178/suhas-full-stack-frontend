import Link from "next/link";

interface Args {
  href?: string;
}

const Logo = ({ href = "/" }: Readonly<Args>) => {
  return (
    <Link href={href}>
      <h1 className="text-3xl font-bold text-black">Suhas</h1>
    </Link>
  );
};

export default Logo;
