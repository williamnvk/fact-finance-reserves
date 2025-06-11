
import { Download } from "lucide-react";
import { useState } from "react";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";




export function AuditReport({reportsList, companyName }) {
  const [isOpen, setIsOpen] = useState(false);
  

  
  const [selectedDate, setSelectedDate] = useState(reportsList[0].date);

  const handleDownload = (file) => {
    // Simulate file download
    const link = document.createElement("a");
    link.href = file;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="bg-secondary rounded-lg p-6 mt-10 flex items-center gap-6">
      <div className="bg-background rounded-full p-4">
        <Download size={40} />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold">Download Full Report</h3>
  
          
        <div className="relative" >
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-1 py-2  bg-secondary rounded-md"
          >
           {selectedDate} <ChevronDown size={16} className="ml-2" />
          </button>

          {isOpen && (
            <div className="absolute bg-card border rounded-md shadow-lg z-10 w-44">
              {reportsList.map((item) => (
                <button
                  key={item.date}
                  className="block w-full text-left px-4 py-2 hover:bg-secondary text-sm"
                  onClick={() => {
                    setSelectedDate(item.date);
                    setIsOpen(false);
                    handleDownload(item.file);
                  }}
                >
                  {item.date}
                </button>
              ))}
            </div>
          )}
        
   
        </div>
        <p className="mt-2">
          Access the full version of this report, published quarterly to maintain transparency for investors and users of {companyName}-issued tokens.
        </p>
      </div>



    </div>
  );
}
