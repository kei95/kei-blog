import Header from "~/components/Header";
import Home from "~/routes/Home";
import Career from "~/routes/Career";

export default function Index() {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-7xl">
        <Home />
        <Career />
      </div>
    </>
  );
}
