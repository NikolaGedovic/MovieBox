import Logo from "./Logo";
import Search from "./Search";

export default function Navbar({
  handleSearch,
}: {
  handleSearch: (term: string) => void;
}) {
  return (
    <div className="bg-gray-700 rounded-2xl px-3 w-8/9 mt-3 grid grid-cols-3 items-center">
      <Logo />
      <div className="flex justify-center items-center">
        <Search onSearch={handleSearch} />
      </div>
      <div></div>
    </div>
  );
}
