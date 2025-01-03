import { Link } from "react-router-dom";
import { Button } from "../components/ui/button.tsx";

function Home() {
  return (
    <main className="container mx-auto px-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Payments, communication, & information for everyone.
          </h1>

          <p className="text-gray-400 text-lg">
            Offline ID is your gateway to all our products and services. It's a
            unified, secure identity designed for seamless access across the
            Offline Protocol ecosystem.
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              With Offline ID, you can:
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4989a7]"></div>
                Access payments, communication, and information tools
                effortlessly.
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4989a7]"></div>
                Enjoy enhanced privacy and offline-first functionality.
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4989a7]"></div>
                Unlock future-ready features tailored for a decentralized world.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-10">
          <img src="vitalik-nft.svg" alt="Vitalik NFT" />
          <Link to="/claim">
            <Button size="lg">Claim Your Offline ID</Button>
          </Link>
        </div>
      </div>
    </main>
    // <div className="container mx-auto px-16 h-full">
    //   <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
    //     <div className="space-y-8 text-center md:text-left">
    //       <h1 className="text-4xl font-light text-white leading-tight">
    //         Payments, communication, & information for{" "}
    //         <span className="font-normal">everyone</span>.
    //       </h1>

    //       <h3 className="text-2xl font-light text-white leading-tight">
    //         Unlock the Power of Offline Protocol with Offline ID
    //       </h3>

    //       <p className="text-white text-opacity-90 max-w-lg mx-auto md:mx-0">
    //         Offline ID is your gateway to all our products and services. It’s a
    //         unified, secure identity designed for seamless access across the
    //         Offline Protocol ecosystem.
    //       </p>

    //       <div className="text-white space-y-4">
    //         <h2 className="text-3xl">With Offline ID, you can:</h2>
    //         <ul className="list-disc list-inside space-y-2">
    //           <li className="text-lg">
    //             Access payments, communication, and information tools
    //             effortlessly.
    //           </li>
    //           <li className="text-lg">
    //             Enjoy enhanced privacy and offline-first functionality.
    //           </li>
    //           <li className="text-lg">
    //             Unlock future-ready features tailored for a decentralized world.
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="flex flex-col justify-center items-center">
    //       <img src="vitalik-nft.svg" alt="Vitalik NFT" />
    //       <Link
    //         to={"/claim"}
    //         className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 mt-10 rounded-full transition-all"
    //       >
    //         Claim Your Offline Id
    //       </Link>
    //     </div>
    //   </div>
    //   {/* <NewsTicker /> */}
    // </div>
  );
}

export default Home;
