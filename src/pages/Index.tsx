
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitch } from "@/components/theme-switch";
import { ReportHeader } from "@/components/report-header";
import { BalancesChart } from "@/components/balances-chart";
import { ChangeChart } from "@/components/change-chart";
import { ReservesBreakdown } from "@/components/reserves-breakdown";
import { AuditReport } from "@/components/audit-report";
import { TokenList } from "@/components/token-list";
import { Footnotes } from "@/components/footnotes";

// Mock data for the charts
const generateHistoricalData = () => {
  const data = [];
  for (let hour = 0; hour <= 20; hour++) {
    const baseValue = 500 + Math.random() * 100;
    const reserves = hour < 10 
      ? baseValue + (hour * 20) + (Math.random() * 50)
      : baseValue + 200 - ((hour - 10) * 25) + (Math.random() * 50);
    data.push({
      hour,
      reserves,
      circulation: reserves - (Math.random() * 100)
    });
  }
  return data;
};

const TOKENS = [
  {
    id: "1",
    logo: "500",
    symbol: "bCSPX",
    name: "Backed CSPX Core S&P 500",
    chains: ["ethereum", "polygon", "chainlink"],
    circulation: { amount: 9142.25, symbol: "bCSPX" },
    collateral: { amount: 9164.00, symbol: "CSPX" },
    collateralValue: "$5,789,421.33",
    reserveRatio: 100.24,
    oracleContract: "0x55e756...c43a8033"
  },
  {
    id: "2",
    logo: "€",
    symbol: "bC3M",
    name: "Backed GOVIES 0-6 months EURO invests",
    chains: ["ethereum", "chainlink", "polygon"],
    circulation: { amount: 23385.65, symbol: "bC3M" },
    collateral: { amount: 23394.00, symbol: "C3M" },
    collateralValue: "€2,901,925.48",
    reserveRatio: 100.04,
    oracleContract: "0x648E0f...3c4dc2Af"
  }
];

const FOOTNOTES = [
  {
    id: "1",
    text: "Tether typically updates the information on the Tokens in Circulation page daily. The information provided is based on the information available to Tether, which may be delayed. Accordingly, the information may not reflect the exact number of tokens in circulation at any given time."
  },
  {
    id: "2",
    text: "The Tether Issuer is Tether International, S.A. de C.V. When \"Tether Issuer\" is used in connection with a particular Reserve report, it means the entity or entities identified in that report as issuing Tether."
  },
  {
    id: "3",
    text: "The information presented is subject to the limitations, qualifications and assumptions expressed in the accompanying reports and subject to Tether's Terms of Service, including Section 12 (No Representations & Warranties) and Section 13 (Disclaimer of Warranties). This information is provided solely for informing Tether's customers and the public generally on Tether's consolidated reserves backing the Tokens in circulation."
  },
  {
    id: "4",
    text: "Reserves reports are not financial statements but selected financial information extracted from accounting records. Information presented is of entities stated in the relevant report, and may include assets and liabilities or credits and charges attributable to entities not issuing Tether described in the Reserves report. Reported information may be affected if assumptions change or if actual circumstances differ from those in the standards and assumptions."
  }
];

const ASSET_DISTRIBUTION = {
  cash: 81.49,
  bonds: 0.01,
  metals: 4.46,
  bitcoin: 5.13,
  investments: 2.89,
  loans: 6.01
};

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-end mb-6">
            <ThemeSwitch />
          </div>
          
          <ReportHeader 
            companyName="Tokeniza Stable Coin" 
            reserveRatio="Over 100%" 
            reportDate="May 06, 2025" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-card rounded-lg border p-6 shadow-sm">
              <BalancesChart circulation={60.5} reserves={60.7} />
            </div>
            <div className="bg-card rounded-lg border p-6 shadow-sm">
              <ChangeChart 
                emitido={14.2} 
                resgatado={14.0} 
                change={0.28}
                historicalData={generateHistoricalData()} 
              />
            </div>
          </div>
          
          <div className="bg-card rounded-lg border p-6 shadow-sm mt-12 mb-8">
            <ReservesBreakdown 
              totalAssets="$149,274,515,968.00" 
              totalLiabilities="$143,682,673,568.00" 
              netEquity="$5,591,842,400.00"
              assetDistribution={ASSET_DISTRIBUTION}
            />
          </div>
          
          <div className="bg-card rounded-lg border p-6 shadow-sm my-8">
            <AuditReport date="May 02, 2025" pages={5} />
          </div>
          
          <div className="bg-card rounded-lg border p-6 shadow-sm my-8">
            <TokenList tokens={TOKENS} />
          </div>
          
          <div className="bg-card rounded-lg border p-6 shadow-sm my-8">
            <Footnotes notes={FOOTNOTES} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
