import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import { ReportHeader } from '@/components/Sections/report-header';
import { BalancesChart } from '@/components/Sections/balances-chart';
import { HistoryChart } from '@/components/Sections/history-chart';
import { ReservesBreakdown } from '@/components/Sections/reserves-breakdown';
import { AuditReport } from '@/components/Sections/audit-report';
import { TokenList } from '@/components/Sections/token-list';
import { Footnotes } from '@/components/Sections/footnotes';
import { TokenChainBreakdown } from '@/components/Sections/token-chains';
import { formatLargeNumber } from '@/lib/utils';
import { useState } from 'react';
import { useEffect } from 'react';

const FOOTNOTES = [
  {
    id: '1',
    text: 'This is a real-time transparency report powered by Fact Finance, showing verified off-chain reserves with automated on-chain updates when thresholds are met.',
  },
  {
    id: '2',
    text: 'The heartbeat is a timing rule that ensures updates happen at regular intervals. For example, with a 5-minute heartbeat, the system will attempt an update at least every 5 minutes—even without major changes. This prevents data staleness and detects delays or outages quickly.',
  },
  {
    id: '3',
    text: 'The deviation threshold defines how much the reserve balance must change before a new on-chain update is triggered. For instance, with a 2% threshold, the system only publishes a new value if the balance moves by 2% or more since the last update. This avoids unnecessary updates due to minor fluctuations.',
  },
  {
    id: '4',
    text: 'Collateral Reserves are real-world assets—such as cash or public securities—held in reserve to back issued tokens. Fact Finance verifies the existence and value of these reserves through connected data sources.',
  },
  {
    id: '5',
    text: 'Tokens Issued is the total amount of tokens currently in circulation, issued by the tokenization platform. Each unit should be backed by a verified reserve, ensuring a transparent 1:1 or over-collateralized ratio.',
  },
  {
    id: '6',
    text: 'Excess Collateral is the portion of reserves that exceeds the circulating supply of tokens. It acts as a safety buffer and may allow additional token issuance while maintaining full backing.',
  },
];

type LastData = {
  date: string;
  circulation: number;
  reserves: number;
  totalTransfer: number;
  transactions: number;
  totalBurned: number;
};

type ReportItem = {
  date: string;
  file: string;
};

type AssettItem = {
  type: string;
  name: string;
  value: number;
};

type ChainItem = {
  name: string;
  value: number;
};

type NoteItem = {
  id: string;
  text: string;
};

type total = {
  periodTotalTransfer: number;
  periodTransactions: number;
  periodTotalBurned: number;
};

type average = {
  circulation: number;
  reserves: number;
  avgcolateral: string;
};

type Data = {
  threshold: string;
  heartbeat: string;
  chainDistribution: ChainItem[];
  assetDistribution: AssettItem[];
  logo: string;
  chart_history_change: number;
  chart_history_new_reserves: number;
  chart_history_new_tokens_issued: number;
  reportList: ReportItem[];
  currency: string;
  last: LastData;
  companyFullName: string;
  companyName: string;
  tokens: any[];
  historicalData?: LastData[];
  historicalData1?: LastData[];
  total: total;
  total1: total;
  average: average;
  average1: average;
  footnotes: NoteItem[];
  description: string;
};

export const Index = ({ client }: { client: string }) => {
  const [data, setData] = useState<Data>({
    companyName: '',
    logo: '',
    chart_history_change: 0,
    chart_history_new_reserves: 0,
    chart_history_new_tokens_issued: 0,
    reportList: [],
    currency: '',
    last: {
      date: '',
      circulation: 0,
      reserves: 0,
      totalTransfer: 0,
      transactions: 0,
      totalBurned: 0,
    },
    companyFullName: '',
    tokens: [],
    historicalData: [],
    historicalData1: [],
    total: {
      periodTotalTransfer: 0,
      periodTransactions: 0,
      periodTotalBurned: 0,
    },
    total1: {
      periodTotalTransfer: 0,
      periodTransactions: 0,
      periodTotalBurned: 0,
    },
    average: {
      circulation: 0,
      reserves: 0,
      avgcolateral: '-',
    },
    average1: {
      circulation: 0,
      reserves: 0,
      avgcolateral: '-',
    },
    assetDistribution: [],
    chainDistribution: [],
    footnotes: [],
    threshold: '',
    heartbeat: '',
    description: '',
  });
  const [loaded, setLoaded] = useState(false);

  const loadData = async () => {
    let historicalData1 = [];
    let total1 = [];
    let average1 = [];

    try {
      const responseChart1 = await fetch(`/data/${client}-chart-1.json`);
      const dataChart1 = await responseChart1.json();
      historicalData1 = dataChart1.historical;
      total1 = dataChart1.total;
      average1 = dataChart1.average;
    } catch {}

    const responseChart = await fetch(`/data/${client}-chart.json`);
    const dataChart = await responseChart.json();

    const response = await fetch(`/data/${client}.json`);
    const data = await response.json();

    data.historicalData = dataChart.historical;
    data.historicalData1 = historicalData1;
    data.total = dataChart.total;
    data.total1 = total1;
    data.average = dataChart.average;
    data.average1 = average1;
    data.last = data.historicalData[data.historicalData.length - 1];
    data.chart_history_new_tokens_issued = data.last.circulation - data.historicalData[0].circulation;
    data.chart_history_new_reserves = data.last.reserves - data.historicalData[0].reserves;
    data.chart_history_change =
      (data.historicalData[0].circulation /
        data.historicalData[0].reserves /
        (data.last.circulation / data.last.reserves)) *
      100;

    if (data.footnotes) FOOTNOTES.push(...data.footnotes);

    setData(data);
    setLoaded(true);
    document.title = `${data.companyName} - Proof of reserves`;
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {loaded ? (
        <Box minH="100vh" bg="bg">
          <Container maxW="7xl" px={4} py={8}>
            <ReportHeader
              companyName={data.companyFullName}
              contractLink=""
              contract=""
              logo={data.logo}
              description={data.description}
              circulation={formatLargeNumber(data.last.circulation)}
              currency={data.currency}
              reserves={formatLargeNumber(data.last.reserves)}
              ratio={((data.last.reserves / data.last.circulation) * 100).toFixed(1) + '%'}
              dateAs={data.historicalData?.[data.historicalData.length - 1]?.date || ''}
              heartbeat={data.heartbeat}
              threshold={data.threshold}
              dappLink="https://tokeniza.com.br"
            />

            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6} mt={12}>
              <GridItem>
                <BalancesChart
                  circulation={data.last.circulation}
                  reserves={data.last.reserves}
                  over={data.last.reserves - data.last.circulation}
                  currency={data.currency}
                />
              </GridItem>

              <GridItem>
                <HistoryChart
                  heartbeat={data.heartbeat}
                  historicalData={data.historicalData}
                  historicalData1={data.historicalData1}
                  periodTotalTransfer={data.total?.periodTotalTransfer ?? 0}
                  periodTotalTransfer1={data.total1?.periodTotalTransfer ?? 0}
                  periodTransactions={data.total?.periodTransactions ?? 0}
                  periodTransactions1={data.total1?.periodTransactions ?? 0}
                  avgcolateral={data.average?.avgcolateral ?? '-'}
                  avgcolateral1={data.average1?.avgcolateral ?? '-'}
                  currency={data.currency}
                />
              </GridItem>
            </Grid>

            <ReservesBreakdown
              companyName={data.companyName}
              currency={data.currency}
              reserves={data.last.reserves}
              issued={data.last.circulation}
              balance={data.last.reserves - data.last.circulation}
              assetDistribution={data.assetDistribution}
            />

            <Box pt={0} p={6} shadow="sm" borderRadius="md">
              <TokenList
                tokens={data.tokens}
                currency={data.currency}
                companyName={data.companyName}
                reserves={data.last.reserves}
                circulation={data.last.circulation}
                periodTotalTransfer={data.total?.periodTotalTransfer}
              />

              <TokenChainBreakdown
                totalChains={3}
                totalTokens={1}
                totalValue={formatLargeNumber(data.last.circulation)}
                chainDistribution={data.chainDistribution}
              />
            </Box>

            <AuditReport reportsList={data.reportList} companyName={data.companyName} />

            <Footnotes notes={FOOTNOTES} />
          </Container>
          <Box textAlign="center" color="fg.muted" pb={8} fontSize="sm">
            © 2025 Fact Finance. All rights reserved.
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default Index;
