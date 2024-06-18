import Image from "next/image";

import nextConfig from "../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  return (
    <main>
      <section className="text-gray-700" id="home">
        <div className="flex container w-full mx-auto py-20 px-5 flex-col md:flex-row items-center">
          <div className="md:w-1/2 lg:max-w-lg w-5/6 mb-16 lg:pr-24 md:pr-16">
            <img className="relative inline-block rounded-full overflow-hidden" src="./img/icon.png" alt="" />
          </div>
          <div className="md:w-1/2 flex-grow">
            <h1 className="text-3xl md:text-6xl text-gray-900 font-medium mb-4">
              K-TWO
              <br />
              Playing with
              <br />
              JavaScript and Python.
            </h1>
            <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab rerum est debitis, ullam ducimus officiis optio assumenda iure et labore eaque quidem animi quam, impedit laborum. Eligendi nam tempore repellat!</p>
            <button>Contact</button>
          </div>
        </div>
      </section>
    </main>
  );
}
