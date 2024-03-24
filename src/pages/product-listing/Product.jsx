import Accordion from "./Accordion";
import { Selling } from "../../components/molecules/Selling";
import { contents } from "../../db_local/store";
export const Products = function () {
  return (
    <div className="flex flex-row gap-x-4 mt-12 scrollbar-hide">
      <div
        className="
       basis-[20%]"
      >
        <Accordion />
      </div>
      <div className="basis-[80%]">
        <Selling />
      </div>
    </div>
  );
};
