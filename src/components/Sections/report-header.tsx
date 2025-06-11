
import { ThemeSwitch } from './theme-switch';
import { Link } from 'react-router';
import { Avatar, Card } from '@chakra-ui/react';

export function ReportHeader({
  currency,
  companyName,
  dateAs,
  heartbeat,
  dappLink,
  threshold,
  circulation,
  reserves,
  ratio,
  description,
  logo,
  contract,
  contractLink,
}: {
  currency: string;
  companyName: string;
  dateAs: string;
  heartbeat: string;
  dappLink: string;
  threshold: string;
  circulation: string;
  reserves: string;
  ratio: string;
  description: string;
  logo: string;
  contract: string;
  contractLink: string;
}) {
  return (
    <div className="space-y-6 ">
      <div className="flex flex-col float-right absolute top-4 right-4">
        <ThemeSwitch />
      </div>
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="text-1xl tracking-tight flex items-center gap-1 absolute top-4 left-4">
          <Link to="/">
            <span className="secondary">Fact</span>
            <span className="text-gray-300 dark:text-gray-400">&#10022;</span>
            <span className="secondary">Finance</span>
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-center">Proof of Reserves Report </h1>
      </div>
      <Card className="p-6 border-0">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4 md:mb-0">
            <Avatar.Root className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800 p-4">
              <Avatar.Image src={logo} alt={companyName} className="object-contain " />
              <Avatar.Fallback className="bg-gray-100 dark:bg-gray-700 text-xl font-bold">
                {companyName.substring(0, 2).toUpperCase()}
              </Avatar.Fallback>
            </Avatar.Root>

            <div className="text-center  md:text-left">
              <div className="mt-4">
                <p className="text-xl font-medium text-gray-700 dark:text-gray-300 ">
                  {companyName}
                  <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-gray-900 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-green-600/20 ring-inset ml-2">
                    {' '}
                    Verified{' '}
                  </span>
                </p>
                <span className=" my-2 text-sm text-gray-400 dark:text-gray-500 ">
                  {' '}
                  {description}
                  <br />
                  {dappLink ? (
                    <a href={dappLink} target="_blank" className="hover:underline text-xs  ">
                      dApp: {dappLink}
                    </a>
                  ) : null}
                  <br />
                  {contract ? (
                    <a
                      href={contractLink}
                      target="_blank"
                      className="text-gray-400 dark:text-gray-500 text-xs hover:underline"
                    >
                      Contract: {contract} &lt;/&gt;
                    </a>
                  ) : null}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end mt-8 whitespace-nowrap">
            <div className="flex flex-col-2 align-center  flex-row with-full justify-center gap-10  ">
              <div className="flex flex-col items-center">
                <p className="subtitle whitespace-nowrap">Issued Tokens</p>
                <h3 className="value-medium text-[hsl(var(--chart-navy))]">
                  <span className="text-xs">{currency}&nbsp;</span>
                  {circulation}
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <p className="subtitle">Reserves</p>
                <h3 className="value-medium text-[hsl(var(--chart-blue))]">
                  <span className="text-xs">{currency}&nbsp;</span>
                  {reserves}
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <p className="subtitle whitespace-nowrap">Collateral Ratio</p>
                <h3 className="value-medium text-green-500">{ratio}</h3>
              </div>
            </div>

            <span className="text-xs text-gray-400 dark:text-gray-400 mt-4 ">{dateAs}</span>
            <span className="flex items-center gap-1 pb-4 text-gray-400 dark:text-gray-500 text-xs">
              {heartbeat ? (
                <>
                  {' '}
                  Heartbeat<sup>2</sup>: <b>{heartbeat}</b>
                </>
              ) : null}
              {threshold ? (
                <>
                  {' '}
                  Deviation Threshold<sup>3</sup>: <b>{threshold}</b>{' '}
                </>
              ) : null}
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
