import { About } from "components/about";
import { Biography } from "components/biography";
import { Navbar } from "components/navbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <div className="p-8">
        <About />
        <Biography />
      </div>
    </section>
  );
}
