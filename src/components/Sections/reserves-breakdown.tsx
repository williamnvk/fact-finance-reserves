import { Key } from "react";
import { formatLargeNumber } from "@/lib/utils";

export function ReservesBreakdown({ reserves, issued, balance, assetDistribution, currency, companyName }) {


  return (
    <div className="mt-6  p-6 shadow-sm rounded-md">
      <h3 className="text-xl font-bold mb-4">Monthly Reserves Report</h3>

      <div className=" text-muted-foreground mb-6">
        <p>
          This report<sup>1</sup> is prepared by Fact Finance to promote transparency in {companyName}'s  asset reserves. It includes selected financial information based on data available at the time of publication. For more details, consult the complete reserve report available for download.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 my-16">
        <div>
          <p className="subtitle">Collateral Reserves<sup>4</sup></p>
          <p className="value-medium text-sm6">
            <span className="text-xs">{currency}&nbsp;</span>
            {formatLargeNumber(reserves)}</p>
        </div>
        <div>
          <p className="subtitle">Tokens Issued<sup>5</sup></p>
          <p className="value-medium">
            <span className="text-xs">{currency}&nbsp;</span>
            {formatLargeNumber(issued)}</p>
        </div>
        <div>
          <p className="subtitle">Available Balance<sup>6</sup></p>
          <p className="value-medium">
            <span className="text-xs">{currency}&nbsp;</span>
            {formatLargeNumber(balance)}</p>
        </div>
      </div>

      <div className="h-2 flex w-full rounded-full overflow-hidden mb-6">
        {assetDistribution.map((asset: { type: any; name: Key; value: any; }) => (
          <div
            key={asset.name}
            className={`asset-${asset.type}`}
            style={{ width: `${asset.value / reserves * 100}%` }}
          ></div>
        ))}
      </div>


      <div className="md:flex gap-4 text-xs w-full "> 
        {assetDistribution.map((asset, index) => (
          <div 
            key={asset.name}
            className="flex items-center gap-2 " 
          >
            <div className={`h-3 w-3 asset-${asset.type} mr-2 rounded-sm`}> </div>
            <div >
              <p>{asset.value.toLocaleString()}</p>
              <p className="hidden">{asset.type}</p>
              <span>{asset.name}</span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
