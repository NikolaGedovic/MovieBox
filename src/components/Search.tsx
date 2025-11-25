export default function Search() {
  return (
    <div className="flex">
      <input
        type="text"
        name="search"
        id="searchInput"
        placeholder="Search your movie..."
        className="bg-indigo-50 px-4 w-xl mr-5 py-2 rounded"
      />
      <button className="text-indigo-50 bg-sky-700 rounded px-7 py-2 font-bold hover:bg-sky-900 hover:cursor-pointer active:bg-sky-600">
        Search
      </button>
    </div>
  );
}
