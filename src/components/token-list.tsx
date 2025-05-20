
import { 
  Circle, 
  Link, 
  Hexagon, 
  CircleCheck, 
  Shield 
} from "lucide-react";

interface Token {
  id: string;
  logo: string;
  symbol: string;
  name: string;
  chains: string[];
  circulation: {
    amount: number;
    symbol: string;
  };
  collateral: {
    amount: number;
    symbol: string;
  };
  collateralValue: string;
  reserveRatio: number;
  oracleContract: string;
}

interface TokenListProps {
  tokens: Token[];
}

export function TokenList({ tokens }: TokenListProps) {
  // Map of chain names to their respective icons using available lucide-react icons
  const chainIcons: Record<string, JSX.Element> = {
    ethereum: <Circle size={18} className="text-gray-500" />, // Using Circle for Ethereum with more professional colors
    bitcoin: <Circle size={18} className="text-amber-600" />, // Bitcoin with amber color
    polygon: <Hexagon size={18} className="text-gray-600" />, // Using Hexagon for Polygon with gray color
    chainlink: <Link size={18} className="text-gray-400" /> // Using Link for Chainlink with gray color
  };
  
  // Function to get shortened contract address
  const getShortenedAddress = (address: string) => {
    return address.length > 12 
      ? `${address.substring(0, 6)}...${address.substring(address.length - 6)}`
      : address;
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-2">Circulation Tokens</h2>
      <p className="text-sm text-muted-foreground mb-6">
        This is the list of tokens secured by the company assets and reserves
      </p>
      
      <div className="space-y-4">
        {tokens.map(token => (
          <div key={token.id} className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 border-4 border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-300 font-bold mr-4">
                  {token.logo}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{token.symbol}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{token.name}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 ml-auto">
                {token.chains.map(chain => (
                  <div key={chain} className="bg-gray-100 dark:bg-gray-700 rounded-full p-1">
                    {chainIcons[chain.toLowerCase()] || chain}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
              <div>
                <p className="subtitle dark:text-gray-400">Tokens in Circulation</p>
                <p className="value-medium text-gray-800 dark:text-gray-100">{token.circulation.amount.toLocaleString()} {token.circulation.symbol}</p>
              </div>
              <div>
                <p className="subtitle dark:text-gray-400">Collateral in Custody <CircleCheck size={14} className="inline ml-1 text-gray-600 dark:text-gray-400" /></p>
                <p className="value-medium text-gray-800 dark:text-gray-100">{token.collateral.amount.toLocaleString()} {token.collateral.symbol}</p>
              </div>
              <div>
                <p className="subtitle dark:text-gray-400">Collateral Value</p>
                <p className="value-medium text-gray-800 dark:text-gray-100">{token.collateralValue}</p>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <p className="subtitle dark:text-gray-400">Reserve Ratio</p>
                <div className="flex items-center">
                  <p className="value-medium mr-2 text-gray-800 dark:text-gray-100">{token.reserveRatio.toFixed(2)}%</p>
                  <Shield size={20} className="text-gray-500 dark:text-gray-400" />
                </div>
                <a 
                  href={`https://etherscan.io/address/${token.oracleContract}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-gray-600 dark:text-gray-400 hover:underline mt-1"
                >
                  {getShortenedAddress(token.oracleContract)}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
