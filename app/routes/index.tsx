import Home from "~/routes/__home";
import About from "~/routes/__about";
import Career from "~/routes/__career";

export default function Index() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Home />
      <About />
      <Career />
    </div>
  );
}
