
import { 
  Circle, 
  Link, 
  Hexagon, 
  CircleCheck,  
  Shield 
} from "lucide-react";
import { formatLargeNumber } from "@/lib/utils";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export function TokenList({ currency, tokens, companyName, reserves, circulation,periodTotalTransfer }) {
  const chainIcons: Record<string, JSX.Element> = {
    ethereum: <Circle size={18} className="text-gray-500" />, 
    bitcoin: <Circle size={18} className="text-amber-600" />, 
    moonbeam: <Circle size={18} className="text-amber-700" />, 
    polygon: <Hexagon size={18} className="text-gray-600" />, 
    gnosis: <Link size={18} className="text-gray-400" />, 
    celo: <Link size={18} className="text-green-700" /> ,
    other: <Link size={18} className="text-gray-600" /> 
  };
  
  // Function to get shortened contract address
  const getShortenedAddress = (address: string) => {
    return address.length > 12 
      ? `${address.substring(0, 6)}...${address.substring(address.length - 6)}`
      : address;
  };

  return (
    <div className="mt-20">
      <h3 className="text-2xl font-bold mb-4">Token Summary</h3>
      <p className="text-sm text-muted-foreground mb-6">
        These are the tokens backed by { companyName}'s verified reserves:
      </p>
      
      <div className="space-y-4">
        {tokens.map((token) => (
          <div key={token.id} className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900  to-gray-200  rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 border-4 border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-300 font-bold mr-4">
                  <img src={token.logo}/>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{token.symbol}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{token.name}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 ml-auto text-xs text-gray-800">Chains
                {token.chains.map(chain => (
                  <div key={chain} title={chain} className="bg-gray-100 dark:bg-gray-700 rounded-full p-1">
                    {chainIcons[chain.toLowerCase()] || chain}
                    
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
              <div>
                <p className="subtitle dark:text-gray-400">Total Supply</p>
                <p className="value-medium text-gray-800 dark:text-gray-100">
                  <span className="text-xs">{currency}</span>
                  {formatLargeNumber(circulation*token.share/100)}</p>
              </div>
              <div>
                <p className="subtitle dark:text-gray-400">30 Days Transfers </p>
                <p className="value-medium text-gray-800 dark:text-gray-100">
                  <span className="text-xs">{currency}</span>
                  
                  {formatLargeNumber(periodTotalTransfer*token.share/100)}</p>
              </div>
              <div>
                <p className="subtitle dark:text-gray-400">Token Price<CircleCheck size={14} className="inline ml-1 text-gray-600 dark:text-gray-400" /></p>
                <p className="value-medium text-gray-800 dark:text-gray-100">
                  <span className="text-xs">{currency}</span>
                  {token.tokenPrice.toFixed(2)}</p>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <p className="subtitle dark:text-gray-400">Reserve utilization</p>
                <div className="flex items-center">
                  <p className="value-medium mr-2 text-gray-800 dark:text-gray-100">{((circulation*token.share/100)/reserves*100).toFixed(2)}%</p>
                  <Shield size={20} className="text-gray-500 dark:text-gray-400" />
                </div>
                
                <a 
                  href={`https://etherscan.io/address/${token.oracleContract}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-gray-600 dark:text-gray-400 hover:underline mt-1"
                >
                  On-chain Reserve {getShortenedAddress(token.oracleContract)}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
