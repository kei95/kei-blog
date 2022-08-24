export default function Home() {
  return (
    <div
      className="flex flex-col m-auto items-center h-screen max-h-[1000px] justify-center"
      id="home"
    >
      <h1 className="title-text text-6xl sm:text-8xl md:text-9xl">
        Hi. It's Kei.
      </h1>
      <h1 className="title-text text-6xl sm:text-8xl md:text-9xl">
        A developer.
      </h1>
      <br />
      <p className="text-textAccent text-center px-10">
        Who is passionate about improving the lives of others through every
        single line of his code.
      </p>
    </div>
  );
}
