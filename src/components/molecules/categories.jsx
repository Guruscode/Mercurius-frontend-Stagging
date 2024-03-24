import { BsArrowRight } from "react-icons/bs";
import Img1 from "../../assets/images/img1.png";
import Img2 from "../../assets/images/img2.png";
import Img3 from "../../assets/images/img3.png";
import Img5 from "../../assets/images/img5.png";
import Pro6 from "../../assets/images/pro6.png";
import BlackFriday from "../../assets/images/BlackFri.png";
import Men from "../../assets/images/men.png";
import Women from "../../assets/images/women.png";
import Male from "../../assets/images/swag.png";
import Female from "../../assets/images/model.png";
import MercuriusWeek from "../../assets/images/merc.png";

export const Category = function () {
  return (
    <div className="mx-6 md:mx-12 my-4 bg-white/55">
      <div className="flex flex-row justify-start">
        <p className="text-[1.1rem] font-semibold">Shop by Category</p>
      </div>
      <div>
        <p className="flex flex-row gap-2 items-center justify-end text-[.8rem] mb-3">
          <a href="/#">All categories</a>
          <BsArrowRight />
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <figure className="relative">
            <img className="rounded-t-lg w-full" src={Img5} alt="" />
            <figcaption className="bg-white/80 font-semibold text-center absolute w-full py-2 px-4 bottom-0">
              <h3>Footwears</h3>
            </figcaption>
          </figure>
          <figure className="relative">
            <img className="rounded-t-lg w-full" src={Img3} alt="" />
            <figcaption className="bg-white/80 font-semibold text-center absolute w-full py-2 px-4 bottom-0">
              <h3>Gadgets</h3>
            </figcaption>
          </figure>
          <figure className="relative">
            <img className="rounded-t-lg w-full" src={Img2} alt="" />
            <figcaption className="bg-white/80 font-semibold text-center absolute w-full py-2 px-4 bottom-0">
              <h3>Bags</h3>
            </figcaption>
          </figure>
          <figure className="relative">
            <img className="rounded-t-lg w-full" src={Img1} alt="" />
            <figcaption className="bg-white/80 font-semibold text-center absolute w-full py-2 px-4 bottom-0">
              <h3>Aparrels</h3>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export const MaleFemaleCategory = function () {
  return (
    <div className="my-4 mx-6 md:mx-12">
      <div className="xl:grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="hidden xl:grid grid-rows-[100px_minmax(50px,_200px)_100px] gap-2">
          {/* item 1 */}
          <div className="row-start-1 row-span-1 col-start-1 col-span-2 flex flex-row justify-around items-center flex-nowrap bg-[#FDE8E8] rounded">
            <div>
              <h4 className="font-bold text-red-600 text-2xl">
                30% OFF <span className="text-black">Deal</span>
              </h4>
              <p className="text-sm leading-tight font-semibold">
                Best Selling product
              </p>
            </div>
            <div className="self-center text-center">
              <img className="w-[40%] mx-auto" src={Pro6} alt="" />
              <p className="text-sm font-semibold">
                $510{" "}
                <span className="text-black/70 line-through font-thin">
                  $549
                </span>
              </p>
            </div>
          </div>
          {/* item 2 */}
          <div className="row-start-1">
            <figure className="bg-slate-200">
              <img className="" src={Img3} alt="/" />
              <figcaption className="text-center bg-slate-300 rounded-b py-2">
                <p className="font-bold text-red-600 text-sm">10% Discount </p>
                <span className="block text-black leading-tight">
                  Foot-wears
                </span>
                <p className="text-red-600 leading-tight">
                  Buy more, Spend less
                </p>
              </figcaption>
            </figure>
          </div>
          {/* item 3 */}
          <div className="row-start-2 row-span-auto h-[378px] col-span-2 bg-[#F6F5FF] px-3 pt-8 rounded">
            <h4 className="uppercase font-semibold text-center text-2xl">
              Product of the Month
            </h4>
            <div className="flex flex-row gap-2 justify-between items-center my-3">
              <div className="flex-2">
                <div className="bg-[#FDE8E8] w-[50%] p-2 rounded-tr-full rounded-br-full">
                  <p className="font-semibold">Iphone 13</p>
                  <p className="text-sm font-semibold">
                    $2398{" "}
                    <span className="text-black/70 line-through font-light">
                      $2980
                    </span>
                  </p>
                </div>
                <ul>
                  <li>🔥 Superfast A15 Bionic chip</li>
                  <li>📷 Pro-level camera system</li>
                  <li>🌈 Gorgeous Super Retina XDR display</li>
                  <li>🚀 Lightning-fast 5G connectivity</li>
                  <li>🔒 Enhanced security with Face ID</li>
                </ul>
              </div>
              <div className="flex-1">
                <img className="" src={Img5} alt="/" />
              </div>
            </div>
          </div>
          {/* item 4 */}
          <div className="row-start-3 col-start-3">
            <img className="w-full " src={BlackFriday} alt="/" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative flex justify-center items-center">
            <div className="absolute z-50 bg-white/70 text-center py-4 w-[75%] sm:w-[300px] outline outline-white outline-offset-8 outline-1 cursor-pointer">
              <h3 className="text-4xl font-semibold text-pretty">SALE</h3>
              <p>#mercuriusweek</p>
            </div>
            <img className="object-cover " src={MercuriusWeek} alt="" />
          </div>
          <div className="flex flex-row items-center justify-center gap-1 my-2">
            <div
              className="flex items-center justify-center rounded"
              style={{ backgroundImage: `url(${Men})`, width: "50%" }}
            >
              <img
                className="w-[87%]"
                src={Male}
                alt="Male brand aparrel section"
              />
            </div>
            <div
              className="flex items-center justify-center rounded"
              style={{ backgroundImage: `url(${Women})`, width: "50%" }}
            >
              <img
                className="w-[85%]"
                src={Female}
                alt="Female brand aparrel section"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
