import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { Button } from "../components/ui/button";

export function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1 flex flex-col">
        <div className="py-16 mb-16 bg-[#25202F]" id="home">
          <div className="text-white flex flex-col container mx-auto">
            <h3 className="font-light text-[25.4px] tracking-widest">
              WELCOME
            </h3>
            <h1 className="font-semibold text-[67px]">
              I'm Selma <br />
              Hadžijusufović
            </h1>
            <p className="font-light text-lg">FRONTEND DEVELOPER</p>
            <Button className="w-fit bg-[#8643DC] rounded-3xl border-[#8643DC] p-6 mt-16">
              Download CV
            </Button>
          </div>
        </div>
        <div className="py-16 mb-16 bg-[#25202F]" id="home">
          <div className="text-white flex flex-col container mx-auto">
            <h3 className="font-light text-[25.4px] tracking-widest">
              WELCOME
            </h3>
            <h1 className="font-semibold text-[67px]">
              I'm Selma <br />
              Hadžijusufović
            </h1>
            <p className="font-light text-lg">FRONTEND DEVELOPER</p>
            <Button className="w-fit bg-[#8643DC] rounded-3xl border-[#8643DC] p-6 mt-16">
              Download CV
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
