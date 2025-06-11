


export function TokenChainBreakdown({ totalChains, totalTokens, totalValue, chainDistribution }) {
  const formatPercent = (value: number) => `${value.toFixed(2)}%`;
  const chainNames = Object.keys(chainDistribution);
  return (
    <div className="mt-6">

      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Blockchain Distribution</h3>
          <p className=" text-muted-foreground">
             This section shows how the token supply is distributed across different blockchains.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          <div className="flex flex-col items-center">
            <p className="subtitle whitespace-nowrap">Total Chains</p>
            <p className="value-medium text-sm6">{chainDistribution.length}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="subtitle whitespace-nowrap">Total Tokens</p>
            <p className="value-medium">{totalTokens}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="subtitle whitespace-nowrap">Total Value</p>
            <p className="value-medium">{totalValue}</p>
          </div>
        </div>
      </div>

      <div className="h-2 flex w-full rounded-full overflow-hidden mb-6">

    {chainDistribution.map((chain: { name: any; value: any; }) => (
        <div className={`chain-${chain.name}`} key={Math.random()} style={{ width: `${Number(chain.value)}%` }}></div>
      ))
    }

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-xs">
      {chainDistribution.map((chain: { name: any; value: number; }) => (
    

      <div className="flex items-center gap-2" key={Math.random()} >
        <div className={`h-3 w-3 chain-${chain.name} mr-2 rounded-sm`}></div>
        <div>
          <p>{formatPercent(chain.value)}</p>
          <p>{chain.name.charAt(0).toUpperCase() + chain.name.slice(1)}</p>
        </div>
      </div>
    ))
  }
  </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-xs">

      </div>
    </div>
  );
}
