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
          <div className="md:w-1/2 flex-grow text-center md:text-left">
            <h1 className="text-3xl md:text-6xl text-gray-900 font-medium mb-4">
              K-TWO
              <br />
              Playing with
              <br />
              JavaScript and Python.
            </h1>
            <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab rerum est debitis, ullam ducimus officiis optio assumenda iure et labore eaque quidem animi quam, impedit laborum. Eligendi nam tempore repellat!</p>
            <button className="justify-center px-6 py-2 border-0 rounded-md text-lg text-white bg-sky-500 hover:bg-sky-600 duration-200">Contact</button>
          </div>
        </div>
      </section>

      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 pt-12 pb-6 w-full mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">Skils</h1>
            <p className="pb-1">
              PythonとJavaScriptをメインに自動化や業務効率化システムを組むことが多いです。
              <br />
              最近はStable Diffusionで独自Loraを作成して画像生成するのにハマっています。
            </p>
          </div>
          <div className="flex flex-wrap">
            {/* 1行目 */}
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/2 p-2">
              <div className="bg-gray-50 rounded-lg p-2 border">
                <div className="flex items-center justify-center">
                  <div className="rounded-full md:w-1/3 sm:w-1/4">
                    <img className="md:w-3/4 w-10 min-w-10" src="./img/python.png" alt="" />
                  </div>
                  <h2 className="ml-2 font-bold">
                    Python
                  </h2>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/2 p-2">
              <div className="bg-gray-50 rounded-lg p-2 border">
                <div className="flex items-center justify-center">
                  <div className="rounded-full md:w-1/3 sm:w-1/4">
                    <img className="md:w-3/4 w-10 min-w-10" src="./img/js.png" alt="" />
                  </div>
                  <h2 className="ml-2 font-bold">
                    JavaScript
                  </h2>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/2 p-2">
              <div className="bg-gray-50 rounded-lg p-2 border">
                <div className="flex items-center justify-center">
                  <div className="rounded-full md:w-1/3 sm:w-1/4">
                    <img className="md:w-3/4 w-10 min-w-10" src="./img/node.png" alt="" />
                  </div>
                  <h2 className="ml-2 font-bold">
                   Node.js
                  </h2>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/2 p-2">
              <div className="bg-gray-50 rounded-lg p-2 border">
                <div className="flex items-center justify-center">
                  <div className="rounded-full md:w-1/3 sm:w-1/4">
                    <img className="md:w-3/4 w-10 min-w-10" src="./img/react.png" alt="" />
                  </div>
                  <h2 className="ml-2 font-bold">
                    React
                  </h2>
                </div>
              </div>
            </div>
            {/* 2行目 */}
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/2 p-2">
              <div className="bg-gray-50 rounded-lg p-2 border">
                <div className="flex items-center justify-center">
                  <div className="rounded-full md:w-1/3 sm:w-1/4">
                    <img className="md:w-3/4 w-10 min-w-10" src="./img/django.png" alt="" />
                  </div>
                  <h2 className="ml-2 font-bold">
                    Django
                  </h2>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/2 p-2">
              <div className="bg-gray-50 rounded-lg p-2 border">
                <div className="flex items-center justify-center">
                  <div className="rounded-full md:w-1/3 sm:w-1/4">
                    <img className="md:w-3/4 w-10 min-w-10" src="./img/next.png" alt="" />
                  </div>
                  <h2 className="ml-2 font-bold">
                    Next.js
                  </h2>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/2 p-2">
              <div className="bg-gray-50 rounded-lg p-2 border">
                <div className="flex items-center justify-center">
                  <div className="rounded-full md:w-1/3 sm:w-1/4">
                    <img className="md:w-3/4 w-10 min-w-10" src="./img/gas.png" alt="" />
                  </div>
                  <h2 className="ml-2 font-bold">
                    GAS
                  </h2>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/2 p-2">
              <div className="bg-gray-50 rounded-lg p-2 border">
                <div className="flex items-center justify-center">
                  <div className="rounded-full md:w-1/3 sm:w-1/4">
                    <img className="md:w-3/4 w-10 min-w-10" src="./img/gcp.png" alt="" />
                  </div>
                  <h2 className="ml-2 font-bold">
                    GCP
                  </h2>
                </div>
              </div>
            </div>
            {/* 3行目 */}
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/2 p-2">
              <div className="bg-gray-50 rounded-lg p-2 border">
                <div className="flex items-center justify-center">
                  <div className="rounded-full md:w-1/3 sm:w-1/4">
                    <img className="md:w-3/4 w-10 min-w-10" src="./img/mysql.png" alt="" />
                  </div>
                  <h2 className="ml-2 font-bold">
                    MySQL
                  </h2>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/2 p-2">
              <div className="bg-gray-50 rounded-lg p-2 border">
                <div className="flex items-center justify-center">
                  <div className="rounded-full md:w-1/3 sm:w-1/4">
                    <img className="md:w-3/4 w-10 min-w-10" src="./img/mongodb.png" alt="" />
                  </div>
                  <h2 className="ml-2 font-bold">
                    MongoDB
                  </h2>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/2 p-2">
              <div className="bg-gray-50 rounded-lg p-2 border">
                <div className="flex items-center justify-center">
                  <div className="rounded-full md:w-1/3 sm:w-1/4">
                    <img className="md:w-3/4 w-10 min-w-10" src="./img/selenium.png" alt="" />
                  </div>
                  <h2 className="ml-2 font-bold">
                    selenium
                  </h2>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/2 p-2">
              <div className="bg-gray-50 rounded-lg p-2 border">
                <div className="flex items-center justify-center">
                  <div className="rounded-full md:w-1/3 sm:w-1/4">
                    <img className="md:w-3/4 w-10 min-w-10" src="./img/figma.png" alt="" />
                  </div>
                  <h2 className="ml-2 font-bold">
                    Figma
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
