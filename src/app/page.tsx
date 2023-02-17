import { About } from "components/about";
import { Biography } from "components/biography";
import { Navbar } from "components/navbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <div className="p-8 md:px-32 lg:px-64 xl:px-64">
        <About />
        <Biography />
      </div>
    </section>
  );
}
