
interface ReservesBreakdownProps {
  totalAssets: string;
  totalLiabilities: string;
  netEquity: string;
  assetDistribution: {
    cash: number;
    bonds: number;
    metals: number;
    bitcoin: number;
    investments: number;
    loans: number;
  };
}

export function ReservesBreakdown({ totalAssets, totalLiabilities, netEquity, assetDistribution }: ReservesBreakdownProps) {
  const formatPercent = (value: number) => `${value.toFixed(2)}%`;
  
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Reserves</h2>
      
      <div className="text-sm text-muted-foreground mb-6">
        <p>
          Reserve reports are published for transparency purposes only and are published on a quarterly basis. Reserve
          reports and the information included in them are prepared by Tether management. The information below is
          derived from the latest published Reserves report and has not been updated regardless of any material
          changes in composition or values following the report date. For more information about reported assets, please
          refer to the applicable Reserves report<sup>6</sup>. The information set out below is current as of the most recent
          published Reserves report.
        </p>
      </div>
      
      <h3 className="text-xl font-bold mb-2">Total Reserves as of the last Reserves Report</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <p className="subtitle">Total Assets<sup>7</sup></p>
          <p className="value-medium">{totalAssets}</p>
        </div>
        <div>
          <p className="subtitle">Total Liabilities<sup>8</sup></p>
          <p className="value-medium">{totalLiabilities}</p>
        </div>
        <div>
          <p className="subtitle">Net Equity<sup>9</sup></p>
          <p className="value-medium">{netEquity}</p>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-4">Reserves Breakdown as of the last Reserves Report</h3>
      
      <div className="h-2 flex w-full rounded-full overflow-hidden mb-6">
        <div className="asset-cash" style={{ width: `${assetDistribution.cash}%` }}></div>
        <div className="asset-bonds" style={{ width: `${assetDistribution.bonds}%` }}></div>
        <div className="asset-metals" style={{ width: `${assetDistribution.metals}%` }}></div>
        <div className="asset-bitcoin" style={{ width: `${assetDistribution.bitcoin}%` }}></div>
        <div className="asset-investments" style={{ width: `${assetDistribution.investments}%` }}></div>
        <div className="asset-loans" style={{ width: `${assetDistribution.loans}%` }}></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
        <div className="flex items-center">
          <div className="h-3 w-3 asset-cash mr-2 rounded-sm"></div>
          <div>
            <p>{formatPercent(assetDistribution.cash)}</p>
            <p>Cash & Cash Equivalents & Other Short-Term Deposits</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 asset-bonds mr-2 rounded-sm"></div>
          <div>
            <p>{formatPercent(assetDistribution.bonds)}</p>
            <p>Corporate Bonds</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 asset-metals mr-2 rounded-sm"></div>
          <div>
            <p>{formatPercent(assetDistribution.metals)}</p>
            <p>Precious Metals</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 asset-bitcoin mr-2 rounded-sm"></div>
          <div>
            <p>{formatPercent(assetDistribution.bitcoin)}</p>
            <p>Bitcoins (None To Affiliated Entities)</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 asset-investments mr-2 rounded-sm"></div>
          <div>
            <p>{formatPercent(assetDistribution.investments)}</p>
            <p>Other Investments</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 asset-loans mr-2 rounded-sm"></div>
          <div>
            <p>{formatPercent(assetDistribution.loans)}</p>
            <p>Secured Loans</p>
          </div>
        </div>
      </div>
    </div>
  );
}
