export default function Search() {
  return (
    <div className="flex">
      <input
        type="text"
        name="search"
        id="searchInput"
        placeholder="Search your movie..."
        className="bg-indigo-50 px-4 w-xl py-2 mr-5  rounded"
      />
      <button className="text-indigo-50 bg-teal-700 rounded px-7 py-2 font-bold hover:bg-teal-600 hover:cursor-pointer active:bg-teal-800">
        Search
      </button>
    </div>
  );
}
