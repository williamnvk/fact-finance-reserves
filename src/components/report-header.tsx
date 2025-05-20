
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
      
      <div className="bg-card rounded-lg p-6 text-center">
        <div className="flex justify-center mb-2">
          <div className="w-20 h-20 rounded-full bg-amber-100 border-4 border-amber-200 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-amber-300"></div>
          </div>
        </div>
        <p className="text-lg">{companyName}</p>
        <h2 className="text-4xl font-bold mt-1">{reserveRatio}</h2>
        <p className="text-sm text-muted-foreground mt-2">
          {companyName} held more Reserves than the sum of circulation tokens
        </p>
      </div>
    </div>
  );
}
