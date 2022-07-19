export default function Index() {
  return (
    <div className="bg-blue-300">
      <header className="flex justify-between text-white py-4 px-8">
        <a href="/" className="text-lg font-bold">
          Logo
        </a>
        <ul className="hidden md:flex flex-row items-center align-middle gap-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </header>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-md px-4 py-4 border-2 border-black">
            <h2 className="tracking-widest text-xs mb-1">CATEGORY</h2>
            <h1 className="text-lg text-zinc-500 mb-3">Tailwind CSS</h1>
            <p className="leading-relaxed text-sm mb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <button className="bg-stone-600	text-sm text-white rounded-md px-4 py-1 customBtn">
              Click Me
            </button>
          </div>

          <div className="bg-white rounded-md px-4 py-4 border-2 border-black">
            <h2 className="tracking-widest text-xs mb-1">CATEGORY</h2>
            <h1 className="text-lg text-zinc-500 mb-3">Tailwind CSS</h1>
            <p className="leading-relaxed text-sm mb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <button className="bg-stone-600	text-sm text-white rounded-md px-4 py-1">
              Click Me
            </button>
          </div>

          <div className="bg-white rounded-md px-4 py-4 border-2 border-black">
            <h2 className="tracking-widest text-xs mb-1">CATEGORY</h2>
            <h1 className="text-lg text-zinc-500 mb-3">Tailwind CSS</h1>
            <p className="leading-relaxed text-sm mb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <button className="bg-stone-600	text-sm text-white rounded-md px-4 py-1">
              Click Me
            </button>
          </div>

          <div className="bg-white rounded-md px-4 py-4 border-2 border-black">
            <h2 className="tracking-widest text-xs mb-1">CATEGORY</h2>
            <h1 className="text-lg text-zinc-500 mb-3">Tailwind CSS</h1>
            <p className="leading-relaxed text-sm mb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <button className="bg-stone-600	text-sm text-white rounded-md px-4 py-1">
              Click Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
