
import { useState } from "react";
import { ChevronDown, Shield } from "lucide-react";

interface ReportHeaderProps {
  companyName: string;
  reserveRatio: string;
  reportDate: string;
}

export function ReportHeader({ companyName, reserveRatio, reportDate }: ReportHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(reportDate);
  
  const datesOptions = [
    "May 06, 2025",
    "April 06, 2025",
    "March 06, 2025",
    "February 06, 2025",
    "January 06, 2025",
  ];

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <h1 className="text-3xl font-bold">Proof of Reserves</h1>
        
        <div className="relative mt-2 md:mt-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-4 py-2 text-sm bg-secondary rounded-md"
          >
            {selectedDate} <ChevronDown size={16} className="ml-2" />
          </button>
          
          {isOpen && (
            <div className="absolute right-0 mt-1 bg-card border rounded-md shadow-lg z-10 w-44">
              {datesOptions.map((date) => (
                <button
                  key={date}
                  className="block w-full text-left px-4 py-2 hover:bg-secondary text-sm"
                  onClick={() => {
                    setSelectedDate(date);
                    setIsOpen(false);
                  }}
                >
                  {date}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-card rounded-lg p-6 text-center border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex justify-center mb-3">
          <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-700 border-4 border-gray-200 dark:border-gray-600 flex items-center justify-center">
            <Shield size={36} className="text-gray-500 dark:text-gray-300" />
          </div>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300">{companyName}</p>
        <h2 className="text-4xl font-bold mt-1 text-gray-800 dark:text-gray-100">{reserveRatio}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          {companyName} held more Reserves than the sum of circulation tokens
        </p>
      </div>
    </div>
  );
}
