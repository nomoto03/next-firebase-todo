import Link from "next/link";

const Header = () => {
  return (
    <header className="text-center py-3 bg-sky-300">
      <Link href="/" className="font-bold text-xl cursor-pointer">
        Next.js Todo app
      </Link>
    </header>
  );
};

export default Header;
