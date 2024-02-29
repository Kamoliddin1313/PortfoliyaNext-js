import { Rishotka } from "@/assets/icons/Icons";
import { rankingsTopCreators } from "@/contents";

function RankingsTab2() {
  return (
    <table className="table w-full">
      <thead>
        <tr className="flex items-center justify-between border-[1px] px-5 py-3 rounded-[20px] border-color-grey gap-5 w-full text-16px sm:text-12px text-color-info font-space-mono text-center">
          <th className="flex items-center gap-5 flex-1 lg:basis-2/3">
            <span>
              <Rishotka />
            </span>
            <span>Artist</span>
          </th>
          <th className="flex flex-1 items-center gap-5 justify-between text-left w-full lg:basis-1/3">
            <span className="w-1/3 lg:basis-1/2 sm:hidden">Change</span>
            <span className="w-1/3 lg:hidden">NFTs Sold</span>
            <span className="w-1/3 lg:basis-1/2">Volume</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {rankingsTopCreators.map((value) => {
          return (
            <tr
              key={value.id}
              className="flex items-center justify-between gap-5 w-full mt-5 bg-color-grey px-5 py-3 rounded-[20px]"
            >
              <td className="flex items-center gap-5 flex-1 lg:basis-2/3 sm:gap-[10px]">
                <span className="bg-color-black sm:text-12px lg:bg-transparent flex text-16px lg:text-16px xl:text-[14px] font-space-mono text-color-info justify-center items-center w-[30px] h-[30px] rounded-full">
                  {value.id}
                </span>

                <img
                  src={value.img}
                  className="w-[60px] h-[60px] lg:w-[24px] lg:h-[24px]"
                />

                <span className="text-22px lg:text-22px xl:text-[18px] sm:text-16px line-clamp-1 text-color-white font-work-sans font-semibold">
                  {value.name}
                </span>
              </td>

              <td className="font-space-mono text-16px flex-1 lg:basis-1/3 gap-5 sm:w-full text-left w-full text-color-white flex items-center justify-between">
                <span className="text-color-green w-1/3 lg:basis-1/2 sm:hidden">
                  {value.change}
                </span>
                <span className="w-1/3 lg:hidden"> {value.nftsSold}</span>
                <span className="w-1/3 lg:basis-1/2 sm:w-full md:text-[14px] sm:text-12px">
                  {value.userTitle}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default RankingsTab2;
