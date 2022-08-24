import Header from "~/components/Header";
import Home from "~/routes/__Home";
import About from "~/routes/__About";
import Career from "~/routes/__Career";

export default function Index() {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-7xl">
        <Home />
        <About />
        <Career />
      </div>
    </>
  );
}
