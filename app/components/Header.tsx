import Link from "next/link";

const Header = () => {
  return (
    <header className="py-3">
      <Link href="/" className="font-bold text-xl cursor-pointer">
        Next.js Todo app
      </Link>
    </header>
  );
};

export default Header;
