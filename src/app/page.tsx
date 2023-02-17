import { About } from "components/about";
import { Biography } from "components/biography";
import { Navbar } from "components/navbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <div className="p-8 flex justify-center items-center">
        <div>
          <About />
          <Biography />
        </div>
      </div>
    </section>
  );
}
