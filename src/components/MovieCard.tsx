export default function MovieCard() {
  return (
    <div className="h-9/12 rounded-2xl mt-3 w-8/9 bg-gray-700 grid grid-cols-10">
      <div className="col-span-4 flex items-center justify-center">
        <div className="bg-amber-300 h-9/12 w-8/12 rounded-2xl"></div>
      </div>
      <div className="col-span-6 flex items-baseline justify-center flex-col gap-12 pr-40 text-xl text-indigo-50">
        <div>Title: Transformers</div>
        <div>Year: 2004</div>
        <div>Genre: Action</div>
        <div>Duration: 170min</div>
        <div>
          Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Dignissimos facilis nobis molestiae odit quibusdam molestias deserunt
          natus velit voluptatibus ut consequuntur, recusandae perspiciatis
          excepturi aliquam dolore voluptate nemo delectus maxime.
        </div>
      </div>
    </div>
  );
}
