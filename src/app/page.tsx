import Link from "next/link";
import { ArrowIcon, GitHubIcon, TwitterIcon } from "components/icons";

export default function Home() {
  return (
    <section className="">
      <h1 className="font-bold text-3xl">Rutger van Rees</h1>
      <p className="my-5 max-w-[460px] text-neutral-200">
        Full-Stack Developer 🔥
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <img
          alt="Rutger van Rees"
          className="rounded-full"
          src="/rutger.jpg"
          placeholder="blur"
          width={100}
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/rutgervanrees"
            className="flex items-center gap-2 hover:text-white"
          >
            <TwitterIcon />
            @rutgervanrees
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/rvanrees"
            className="flex items-center gap-2 hover:text-white"
          >
            <GitHubIcon />
            Rutger van Rees
          </a>
          <Link
            href="https://rutgervanrees.nl/tailk"
            target="_blank"
            className="flex items-center gap-3 hover:text-white"
          >
            <ArrowIcon />
            My latest project: Tailk
          </Link>
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-200">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </section>
  );
}
