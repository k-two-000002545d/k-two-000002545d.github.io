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
              KATO TAISUKE
              <br />
              My Portfolio.
            </h1>
            <p className="mb-8 leading-relaxed">
            ポートフォリオへようこそ！私は社内SEとして、技術と現場の橋渡し役を務めています。現場の業務効率化や自動化を通じて、会社の成長をサポートすることに情熱を持っています。このポートフォリオを通して私のスキルやプロジェクトを知っていただければ幸いです。
            </p>
            {/*
            <button className="justify-center px-6 py-2 border-0 rounded-md text-lg text-white bg-sky-500 hover:bg-sky-600 duration-200">
              <a href="https://github.com/k-two-000002545d/k-two-000002545d.github.io" target="_blank">Contact</a>
            </button>
            */}
          </div>
        </div>
      </section>

      {/* プロフィール */}
      <section className="border-t border-gray-100" id="about">
      <div className="flex container w-full mx-auto py-6 sm:py-16 px-5 flex-col md:flex-row items-center">
        <div className="container px-5 pt-10 pb-6 sm:pt-20 sm:pb-16 w-full mx-auto">
          <div className="text-gray-100 text-left mb-2">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 mb-2">プロフィール</h1>
            <p className="pb-1 leading-10">
            2021年から現在まで、コールセンターの社内SEとして働いています。主な業務は、業務の自動化や効率化を図ることです。
            <br />
            単に依頼されたシステムやツールを作成するだけでなく、現場の人々と密に関わることで、より効果的な問題解決を目指しています。
            <br />
            音楽が好きでアカペラ用の楽譜作成やレコーディング・ミックスなども趣味でやってます。
            <br />
            最近はStable Diffusionで独自Loraを作成し画像生成するのにハマっています。
            <br />
            お寿司が好きです🍣
            </p>
          </div>
        </div>
        <div className="md:w-1/4 w-1/2 mb-2">
            <img className="relative inline-block rounded-2xl overflow-hidden" src="./img/icon-3.jpg" alt="" />
        </div>
      </div>
      </section>

      {/* スキル */}
      <section className="border-t border-gray-100" id="skils">
        <div className="container px-5 pt-10 pb-6 sm:pt-20 sm:pb-16 w-full mx-auto">
          <div className="text-gray-100 text-left mb-6">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 mb-2">スキル</h1>
            <p className="pb-1 leading-10">
              現在はPythonやJavaScript（GAS）を使用しての業務がほとんどです。
              <br/>
              殆どの業務は一人で行ってきたため、要件定義/設計からリリース、保守運用まで対応してきました。  
            </p>
          </div>
          <div className="flex flex-wrap text-gray-800">
            {/* 1行目 */}
            <div className="lg:w-1/5 md:w-1/3 sm:w-1/2 w-1/2 p-2">
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
            <div className="lg:w-1/5 md:w-1/3 sm:w-1/2 w-1/2 p-2">
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
            <div className="lg:w-1/5 md:w-1/3 sm:w-1/2 w-1/2 p-2">
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
            <div className="lg:w-1/5 md:w-1/3 sm:w-1/2 w-1/2 p-2">
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
            <div className="lg:w-1/5 md:w-1/3 sm:w-1/2 w-1/2 p-2">
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
            {/* 2行目 */}
            <div className="lg:w-1/5 md:w-1/3 sm:w-1/2 w-1/2 p-2">
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
            <div className="lg:w-1/5 md:w-1/3 sm:w-1/2 w-1/2 p-2">
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
            <div className="lg:w-1/5 md:w-1/3 sm:w-1/2 w-1/2 p-2">
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
            <div className="lg:w-1/5 md:w-1/3 sm:w-1/2 w-1/2 p-2">
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
            <div className="lg:w-1/5 md:w-1/3 sm:w-1/2 w-1/2 p-2">
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
            {/* 3行目 */}
            <div className="lg:w-1/5 md:w-1/3 sm:w-1/2 w-1/2 p-2">
              <div className="bg-gray-50 rounded-lg p-2 border">
                <div className="flex items-center justify-center">
                  <div className="rounded-full md:w-1/3 sm:w-1/4">
                    <img className="md:w-3/4 w-10 min-w-10" src="./img/ts.png" alt="" />
                  </div>
                  <h2 className="ml-2 font-bold">
                    TypeScript<br />0.5years
                  </h2>
                </div>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/3 sm:w-1/2 w-1/2 p-2">
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
            <div className="lg:w-1/5 md:w-1/3 sm:w-1/2 w-1/2 p-2">
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
            <div className="lg:w-1/5 md:w-1/3 sm:w-1/2 w-1/2 p-2">
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
            <div className="lg:w-1/5 md:w-1/3 sm:w-1/2 w-1/2 p-2">
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
          </div>
        </div>
      </section>

      {/* 業務経歴 */}
      <section className="border-t border-gray-100" id="business">
        <div className="container px-5 pt-10 pb-6 sm:pt-20 sm:pb-16 w-full mx-auto">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pb-8 pt-6 md:space-y-5">
              <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10">
              業務経歴
              </h2>
              <div className="space-y-1">
                <h3 className="text-lg text-gray-100">①業務の自動化・効率化</h3>
                <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                業務プロセスを見直し、自動化することで生産性を向上させるツールやシステムを開発・導入しています。
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg text-gray-100">②現場との連携</h3>
                <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                実際にシステムを使用する現場のスタッフとコミュニケーションを取り、現場のニーズや課題を直接把握し、最適なソリューションを提供しています。
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg text-gray-100">③ヘルプデスク業務</h3>
                <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                社内の技術サポートを行い、日常的なITトラブルの解決や、システムの使用に関する問い合わせに対応しています。
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg text-gray-100">④インフラ補助</h3>
                <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                専門のインフラエンジニアがいますが、必要に応じて社内インフラのサポートも行っています。
                </p>
              </div>

            </div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">2023年11月~2024年3月</dd>
                    </dl>
                    <div className="space-y-6 xl:col-span-3">
                      <div className="space-y-2">
                        <h2 className="text-1xl sm:text-2xl font-bold leading-8 tracking-tight text-gray-100">
                        勤怠管理Webアプリ開発
                        </h2>
                        <div className="flex flex-wrap">
                          <p className="mr-3 text-sm font-medium uppercase text-sky-400">python</p>
                          <p className="mr-3 text-sm font-medium uppercase text-sky-400">javascript</p>
                          <p className="mr-3 text-sm font-medium uppercase text-sky-400">html</p>
                          <p className="mr-3 text-sm font-medium uppercase text-sky-400">css</p>
                          <p className="mr-3 text-sm font-medium uppercase text-sky-400">gcp</p>
                          <p className="mr-3 text-sm font-medium uppercase text-sky-400">mysql</p>
                          <p className="mr-3 text-sm font-medium uppercase text-sky-400">Figma</p>
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      社内向けの従業員の出勤・退勤の打刻、勤務時間の算出・管理を行うWebアプリケーション開発を3人態勢で実施。
                      <br/>
                      手計算やスプレッドで集計していた事務総務全体の作業時間を削減。
                      </div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">2023年6月~現在</dd>
                    </dl>
                    <div className="space-y-6 xl:col-span-3">
                      <div className="space-y-2">
                        <h2 className="text-1xl sm:text-2xl font-bold leading-8 tracking-tight text-gray-100">
                        Kintoneプラグイン開発
                        </h2>
                        <div className="flex flex-wrap">
                        <p className="mr-3 text-sm font-medium uppercase text-sky-400">javascript</p>
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      Kintoneにて作業効率化のプラグインを作成。毎日の集計作業・ミスチェックなど確認する時間を削減。
                      <br/>
                      ・入力制御プラグイン
                      <br/>
                      ・検索機能、検索窓追加
                      <br/>
                      ・人件費の平均金額表示追加
                      <br/>
                      ・対象のアプリから数値の集計、別アプリへ計算し書き込みなど
                      </div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">2022年12月~現在</dd>
                    </dl>
                    <div className="space-y-6 xl:col-span-3">
                      <div className="space-y-2">
                        <h2 className="text-1xl sm:text-2xl font-bold leading-8 tracking-tight text-gray-100">
                          応対内容情報管理Webアプリ開発
                        </h2>
                        <div className="flex flex-wrap">
                          <p className="mr-3 text-sm font-medium uppercase text-sky-400">python</p>
                          <p className="mr-3 text-sm font-medium uppercase text-sky-400">javascript</p>
                          <p className="mr-3 text-sm font-medium uppercase text-sky-400">html</p>
                          <p className="mr-3 text-sm font-medium uppercase text-sky-400">css</p>
                          <p className="mr-3 text-sm font-medium uppercase text-sky-400">gcp</p>
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      自社コールセンター業務向けのお問い合わせ履歴の作成と登録を行うWebアプリケーション開発。
                      問い合わせ内容の定型文の自動構築をし入力時間を短縮。
                      またどのような対応フローだったか細分化し出力させることで、管理者の数値化やフィードバックなどに活用。
                      </div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">2022年9月~現在</dd>
                    </dl>
                    <div className="space-y-6 xl:col-span-3">
                      <div className="space-y-2">
                        <h2 className="text-1xl sm:text-2xl font-bold leading-8 tracking-tight text-gray-100">
                          自動スクレイピングツール
                        </h2>
                        <div className="flex flex-wrap">
                          <p className="mr-3 text-sm font-medium uppercase text-sky-400">python</p>
                          <p className="mr-3 text-sm font-medium uppercase text-sky-400">selenium</p>
                          <p className="mr-3 text-sm font-medium uppercase text-sky-400">aws</p>
                          <p className="mr-3 text-sm font-medium uppercase text-sky-400">タスクスケジューラ</p>
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      pythonとseleniumを用いてのスクレイピング。ログイン、DL作業、スクリーンショットなど部署によって使い分け。aws lambdaやタスクスケジューラを使用して自動可運用。
                      <br/>
                      一部では月で約40時間の工数削減に成功。手作業での対応がなくなり他の業務に時間が使えるようになった。
                      </div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">2022年8月</dd>
                    </dl>
                    <div className="space-y-6 xl:col-span-3">
                      <div className="space-y-2">
                        <h2 className="text-1xl sm:text-2xl font-bold leading-8 tracking-tight text-gray-100">
                        PDF自動作成/自動メール送信GAS
                        </h2>
                        <div className="flex flex-wrap">
                          <p className="mr-3 text-sm font-medium uppercase text-sky-400">gas</p>
                          <p className="mr-3 text-sm font-medium uppercase text-sky-400">javascript</p>
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      GASを使用してスプレッドのリストから請求書のPDF化、リストの相手ごとにメール送信を行う作業を自動化。
                      <br/>
                      毎月一人一人に手動で行っていたPDF請求書作成・メール送信を無くし、30分ほどで終われるように。
                      </div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">2021年12月~現在</dd>
                    </dl>
                    <div className="space-y-6 xl:col-span-3">
                      <div className="space-y-2">
                        <h2 className="text-1xl sm:text-2xl font-bold leading-8 tracking-tight text-gray-100">
                          GASを使用した自動化/スプレッドシートの構築/API連携など
                        </h2>
                        <div className="flex flex-wrap">
                        <p className="mr-3 text-sm font-medium uppercase text-sky-400">gas</p>
                        <p className="mr-3 text-sm font-medium uppercase text-sky-400">javascript</p>
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      現在スプレッドでの業務が殆ど。Slack・ChatWork連携、Kintone連携、現場のスプレッド構築から関数の相談まで対応。
                      <br/>
                      自動通知や自動報告、集計などスプレッドで業務をする現場の全体的な作業時間の削減を行う。
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
