import React, { useEffect } from 'react';

const CalEmbed = () => {
  useEffect(() => {
    // Cal.com embed initialization script, run once after component mounts
    (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
            let cal = C.Cal; 
            let ar = arguments; 
            if (!cal.loaded) { 
                cal.ns = {}; 
                cal.q = cal.q || []; 
                d.head.appendChild(d.createElement("script")).src = A; 
                cal.loaded = true; 
            }   
            if (ar[0] === L) { 
                const api = function () { p(api, arguments); }; 
                const namespace = ar[1]; 
                api.q = api.q || []; 
                if(typeof namespace === "string"){
                    cal.ns[namespace] = cal.ns[namespace] || api;
                    p(cal.ns[namespace], ar);
                    p(cal, ["initNamespace", namespace]);
                } else {
                    p(cal, ar);
                }
                return;
            } 
            p(cal, ar); 
        }; 
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialization and display calls, ensuring the new calLink is used
    if (window.Cal) {
      window.Cal("init", "gritt-intro", {origin:"https://app.cal.com"});
      window.Cal.ns["gritt-intro"]("inline", {
        elementOrSelector:"#my-cal-inline-gritt-intro",
        config: {"layout":"month_view"},
        calLink: "grittai/gritt-intro", // UPDATED CAL.COM LINK
      });
      window.Cal.ns["gritt-intro"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    }
  }, []);

  return (
    <div id="calEmbed" className="w-full flex flex-col items-center py-12 sm:py-16 md:py-20 bg-white px-4">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-gray-900 mb-6 sm:mb-8 md:mb-10 text-center leading-snug">
        <span className="block sm:inline text-xl sm:text-2xl md:text-3xl font-thin font-FK-Grotesk">
          Schedule
        </span>{" "}
        <span className="font-bold font-ultralight">
          Your Free Consultation
        </span>
      </h2>
      
      {/* Widget Container */}
      <div className="w-full max-w-md sm:max-w-2xl md:max-w-5xl h-[600px] sm:h-[700px] md:h-[800px] bg-[#F6F5EE] rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl p-2 sm:p-4 overflow-hidden">
        <div 
          style={{ width: '100%', height: '100%', overflow: 'auto' }} 
          id="my-cal-inline-gritt-intro"
        />
      </div>
    </div>
  );
};

export default CalEmbed;
