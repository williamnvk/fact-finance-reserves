
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
    ethereum: <Circle size={18} className="text-blue-500" />, // Using Circle for Ethereum
    bitcoin: <Circle size={18} className="text-orange-500" />, // Keep Bitcoin as a circle with orange color
    polygon: <Hexagon size={18} className="text-purple-500" />, // Using Hexagon for Polygon
    chainlink: <Link size={18} className="text-blue-400" /> // Using Link for Chainlink
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
          <div key={token.id} className="bg-card rounded-lg border p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold mr-4">
                  {token.logo}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{token.symbol}</h3>
                  <p className="text-sm text-muted-foreground">{token.name}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 ml-auto">
                {token.chains.map(chain => (
                  <div key={chain} className="bg-secondary rounded-full p-1">
                    {chainIcons[chain.toLowerCase()] || chain}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
              <div>
                <p className="subtitle">Tokens in Circulation</p>
                <p className="value-medium">{token.circulation.amount.toLocaleString()} {token.circulation.symbol}</p>
              </div>
              <div>
                <p className="subtitle">Collateral in Custody <CircleCheck size={14} className="inline ml-1" /></p>
                <p className="value-medium">{token.collateral.amount.toLocaleString()} {token.collateral.symbol}</p>
              </div>
              <div>
                <p className="subtitle">Collateral Value</p>
                <p className="value-medium">{token.collateralValue}</p>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <p className="subtitle">Reserve Ratio</p>
                <div className="flex items-center">
                  <p className="value-medium mr-2">{token.reserveRatio.toFixed(2)}%</p>
                  <Shield size={20} className="text-blue-500" />
                </div>
                <a 
                  href={`https://etherscan.io/address/${token.oracleContract}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline mt-1"
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
