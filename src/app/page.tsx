import Image from "next/image";

import nextConfig from "../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  return (
    <main>
      <section className="text-gray-100" id="home">
        <div className="flex container w-full mx-auto py-16 px-5 flex-col md:flex-row items-center">
          <div className="md:w-1/2 lg:max-w-lg w-4/6 mb-16 lg:pr-24 md:pr-16">
            <img className="relative inline-block rounded-full overflow-hidden" src="./img/icon.png" alt="" />
          </div>
          <div className="md:w-1/2 flex-grow text-center md:text-left">
            <h1 className="text-3xl md:text-6xl text-gray-100 font-medium mb-4">
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

      {/* プロフィール */}
      <section className="border-t border-gray-200">
        <div className="container px-5 pt-12 pb-3 w-full mx-auto">
          <div className="text-gray-100 text-left sm:text-center mb-12">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2">About Me</h1>
            <p className="pb-1 leading-relaxed">
            私は情報系の工業高校で3年間、C言語とJavaを使ってプログラミングの基礎を学びました。
            <br />
            大学ではメディア学部に進学し、映像やデザイン、音楽といったクリエイティブな分野を幅広く学びました。
            <br />
            2021年頃から社内エンジニアとして業務に励んでいます。社内の業務改善や自動化をメインに行っています。
            <br />
            最近はStable Diffusionで独自Loraを作成して画像生成するのに入れ込んでいます。
            <br />
            お寿司が好きです🍣
            </p>
          </div>
        </div>
      </section>

      {/* スキル */}
      <section className="border-t border-gray-200" id="skils">
        <div className="container px-5 py-12 w-full mx-auto">
          <div className="text-gray-100 text-left sm:text-center mb-12">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2">スキル</h1>
            <p className="pb-1 leading-relaxed">
              PythonとJavaScriptをメインに自動化や業務効率化システムを組むことが多いです。
              <br />
              またGASやKintoneのスクリプト・プラグイン作成、APIを経由して外部のサービス/アプリなどと連携できるよう構築もしています。
              <br />
              その他、現在勤めている会社の別部署の業務の効率化や構築の補助も行っています。
              <br />
              ほとんどの業務は一人でこなしてきたため、設計〜リリース、運用まで対応してきました。
            </p>
          </div>
          <div className="flex flex-wrap text-gray-800">
            {/* 1行目 */}
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/2 p-2">
              <div className="bg-gray-50 rounded-lg p-2 border">
                <div className="flex items-center justify-center">
                  <div className="rounded-full md:w-1/3 sm:w-1/4">
                    <img className="md:w-3/4 w-10 min-w-10" src="./img/python.png" alt="" />
                  </div>
                  <h2 className="ml-2 font-bold">
                    Python<br />3years
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
                    JavaScript<br />3years
                  </h2>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/2 p-2">
              <div className="bg-gray-50 rounded-lg p-2 border">
                <div className="flex items-center justify-center">
                  <div className="rounded-full md:w-1/3 sm:w-1/4">
                    <img className="md:w-3/4 w-10 min-w-10" src="./img/html.png" alt="" />
                  </div>
                  <h2 className="ml-2 font-bold">
                    HTML<br />3years
                  </h2>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/2 p-2">
              <div className="bg-gray-50 rounded-lg p-2 border">
                <div className="flex items-center justify-center">
                  <div className="rounded-full md:w-1/3 sm:w-1/4">
                    <img className="md:w-3/4 w-10 min-w-10" src="./img/css.png" alt="" />
                  </div>
                  <h2 className="ml-2 font-bold">
                    CSS<br />3years
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
                    Django<br />2years
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
                    Next.js<br />0.5years
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
                    Node.js<br />0.5years
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
                    React<br />0.5years
                  </h2>
                </div>
              </div>
            </div>
            {/* 3行目 */}
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/2 p-2">
              <div className="bg-gray-50 rounded-lg p-2 border">
                <div className="flex items-center justify-center">
                  <div className="rounded-full md:w-1/3 sm:w-1/4">
                    <img className="md:w-3/4 w-10 min-w-10" src="./img/gas.png" alt="" />
                  </div>
                  <h2 className="ml-2 font-bold">
                    GAS<br />3years
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
                    GCP<br />2years
                  </h2>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/2 p-2">
              <div className="bg-gray-50 rounded-lg p-2 border">
                <div className="flex items-center justify-center">
                  <div className="rounded-full md:w-1/3 sm:w-1/4">
                    <img className="md:w-3/4 w-10 min-w-10" src="./img/mysql.png" alt="" />
                  </div>
                  <h2 className="ml-2 font-bold">
                    MySQL<br />1years
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
                    MongoDB<br />0.5years
                  </h2>
                </div>
              </div>
            </div>
            {/* 4行目 */}
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/2 p-2">
              <div className="bg-gray-50 rounded-lg p-2 border">
                <div className="flex items-center justify-center">
                  <div className="rounded-full md:w-1/3 sm:w-1/4">
                    <img className="md:w-3/4 w-10 min-w-10" src="./img/selenium.png" alt="" />
                  </div>
                  <h2 className="ml-2 font-bold">
                    selenium<br />2years
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
                    Figma<br />1years
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 業務経歴 */}
      <section className="border-t border-gray-200">
        <div className="container px-5 pt-12 pb-6 w-full mx-auto">
          <div className="text-gray-100 text-center mb-12">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2">業務経歴</h1>
          </div>
          <div className="w-100 p-2">
              <div className="bg-gray-50 rounded-lg p-2 border">
                <div className="text-gray-900 flex-grow text-center md:text-left mb-12">
                <h2 className="text-2xl sm:text-3xl font-medium mb-2">学習系サービス</h2>
                <p className="pb-1">
                  説明
                </p>
                </div>
              </div>
            </div>
        </div>
      </section>
    </main>
  );
}
