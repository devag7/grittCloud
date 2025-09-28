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
    <div className="w-full flex flex-col items-center py-20 bg-white">
      {/* Custom Title for the Scheduler */}
      <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-10">
        <span className="text-3xl font-thin font-FK-Grotesk"> Schedule </span>{" "}
        <span className="font-bold font-ultralight">Your Free Consultation</span>
      </h2>
      
      {/* Container for the Cal.com widget */}
      <div className="w-full max-w-5xl h-[800px] bg-[#F6F5EE] rounded-xl shadow-2xl p-4 overflow-hidden">
        {/* The target DIV with the exact ID from your embed code */}
        <div 
          style={{ width: '100%', height: '100%', overflow: 'scroll' }} 
          id="my-cal-inline-gritt-intro"
        />
      </div>
    </div>
  );
};

export default CalEmbed;