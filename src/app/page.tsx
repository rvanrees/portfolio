import { About } from "components/about";
import { Navbar } from "components/navbar";
import { Blogs } from "components/blogs";

export default function Home() {
  return (
    <section>
      <Navbar />
      <div className="p-8">
        <About />
        <Blogs />
      </div>
    </section>
  );
}
