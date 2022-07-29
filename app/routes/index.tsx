import Button from "~/components/Button";
import Header from "~/components/Header";

export default function Index() {
  return (
    <>
      <Header />
      <div className="pt-4 px-8">
        <h1 className="title-text">Hi. It's Kei.</h1>
        <h1 className="title-text">A developer.</h1>
      </div>
      <Button text="TEST BUTTON" />
    </>
  );
}
