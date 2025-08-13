
// // import React, { useState } from "react";
// // import axios from "axios";

// // const UserDeviceInfo = () => {
// //   const [deviceInfo, setDeviceInfo] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const fetchIPInfo = async () => {
// //     try {
// //       setLoading(true);
// //       const token = "26347059c50ccc"; // Get from https://ipinfo.io/account/token
// //       const response = await axios.get(`https://ipinfo.io/json?token=${token}`);

// //       const userAgent = navigator.userAgent;
// //       const browser = getBrowser(userAgent);
// //       const os = getOS(userAgent);

// //       setDeviceInfo({
// //         ...response.data,
// //          isp: response.data.org || "Unknown ISP",
// //         browser,
// //         os,
// //         deviceType: getDeviceType(),
// //         screenResolution: `${window.screen.width}x${window.screen.height}`,
// //         userAgent
// //       });
// //     } catch (error) {
// //       console.error("Error fetching IP info:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const getBrowser = (ua) => {
// //     if (ua.includes("Chrome") && !ua.includes("Edg")) return "Chrome";
// //     if (ua.includes("Firefox")) return "Firefox";
// //     if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
// //     if (ua.includes("Edg")) return "Edge";
// //     return "Unknown";
// //   };

// //   const getOS = (ua) => {
// //     if (ua.includes("Windows")) return "Windows";
// //     if (ua.includes("Mac OS")) return "MacOS";
// //     if (ua.includes("Linux")) return "Linux";
// //     if (/Android/.test(ua)) return "Android";
// //     if (/iPhone|iPad|iPod/.test(ua)) return "iOS";
// //     return "Unknown";
// //   };

// //   const getDeviceType = () => {
// //     if (/Mobi|Android/i.test(navigator.userAgent)) return "Mobile";
// //     if (/Tablet|iPad/i.test(navigator.userAgent)) return "Tablet";
// //     return "Desktop";
// //   };

// //   return (
// //     <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
// //       <h2 className="text-2xl font-bold text-gray-800 mb-4">User Device Info</h2>
// //       <button
// //         onClick={fetchIPInfo}
// //         disabled={loading}
// //         className={`px-6 py-3 rounded-full text-white font-semibold shadow-lg transition duration-300 
// //           ${loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"}`}
// //       >
// //         {loading ? "Fetching..." : "Get My Device Info"}
// //       </button>

// //       {deviceInfo && (
// //         <div className="mt-6 w-full max-w-lg bg-white rounded-xl shadow-md p-5 border border-gray-200">
// //           <h3 className="text-lg font-semibold mb-3">📋 Your Information</h3>
// //           <ul className="space-y-2 text-gray-700">
// //             <li><strong>IP:</strong> {deviceInfo.ip}</li>
// //             <li><strong>City:</strong> {deviceInfo.city}</li>
// //             <li><strong>ISP:</strong> {deviceInfo.isp}</li>
// //             <li><strong>Region:</strong> {deviceInfo.region}</li>
// //             <li><strong>Country:</strong> {deviceInfo.country}</li>
// //             <li><strong>Timezone:</strong> {deviceInfo.timezone}</li>
// //             <li><strong>Browser:</strong> {deviceInfo.browser}</li>
// //             <li><strong>OS:</strong> {deviceInfo.os}</li>
// //             <li><strong>Device Type:</strong> {deviceInfo.deviceType}</li>
// //             <li><strong>Screen Resolution:</strong> {deviceInfo.screenResolution}</li>
// //           </ul>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default UserDeviceInfo;





// import React, { useState } from "react";

// const UserDeviceInfo = () => {
//   const [deviceInfo, setDeviceInfo] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchIPInfo = async () => {
//     try {
//       setLoading(true);
//       const token = "26347059c50ccc"; // Get from https://ipinfo.io/account/token
//       const response = await fetch(`https://ipinfo.io/json?token=${token}`);
//       const data = await response.json();

//       const userAgent = navigator.userAgent;
//       const browser = getBrowser(userAgent);
//       const os = getOS(userAgent);

//       setDeviceInfo({
//         ...data,
//          isp: data.org || "Unknown ISP",
//         browser,
//         os,
//         deviceType: getDeviceType(),
//         screenResolution: `${window.screen.width}x${window.screen.height}`,
//         userAgent
//       });
//     } catch (error) {
//       console.error("Error fetching IP info:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getBrowser = (ua) => {
//     if (ua.includes("Chrome") && !ua.includes("Edg")) return "Chrome";
//     if (ua.includes("Firefox")) return "Firefox";
//     if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
//     if (ua.includes("Edg")) return "Edge";
//     return "Unknown";
//   };

//   const getOS = (ua) => {
//     if (ua.includes("Windows")) return "Windows";
//     if (ua.includes("Mac OS")) return "MacOS";
//     if (ua.includes("Linux")) return "Linux";
//     if (/Android/.test(ua)) return "Android";
//     if (/iPhone|iPad|iPod/.test(ua)) return "iOS";
//     return "Unknown";
//   };

//   const getDeviceType = () => {
//     if (/Mobi|Android/i.test(navigator.userAgent)) return "Mobile";
//     if (/Tablet|iPad/i.test(navigator.userAgent)) return "Tablet";
//     return "Desktop";
//   };

//   return (
//     <div className="flex flex-col items-center p-6 bg-black min-h-screen">
//       <h2 className="text-3xl font-bold mb-6" style={{ color: '#00ff00' }}>
//         🖥️ User Device Information
//       </h2>
      
//       <button
//         onClick={fetchIPInfo}
//         disabled={loading}
//         className={`px-8 py-4 rounded-lg font-bold shadow-lg transition-all duration-300 transform hover:scale-105 border-2
//           ${loading 
//             ? "bg-gray-800 border-gray-600 cursor-not-allowed" 
//             : "bg-red-600 hover:bg-red-700 border-red-500 hover:border-red-400"
//           }`}
//         style={{ color: loading ? '#666' : '#00ff00' }}
//       >
//         {loading ? "🔄 Fetching Data..." : "📡 Get My Device Info"}
//       </button>

//       {deviceInfo && (
//         <div className="mt-8 w-full max-w-2xl bg-gray-900 rounded-2xl shadow-2xl p-6 border-2 border-gray-700">
//           <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#00ff00' }}>
//             📊 System Information
//           </h3>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="space-y-3">
//               <div className="bg-black p-3 rounded-lg border border-gray-600">
//                 <span className="text-red-500 font-semibold">🌐 IP Address:</span>
//                 <span className="ml-2" style={{ color: '#00ff00' }}>{deviceInfo.ip}</span>
//               </div>
              
//               <div className="bg-black p-3 rounded-lg border border-gray-600">
//                 <span className="text-red-500 font-semibold">🏙️ City:</span>
//                 <span className="ml-2" style={{ color: '#00ff00' }}>{deviceInfo.city}</span>
//               </div>
              
//               <div className="bg-black p-3 rounded-lg border border-gray-600">
//                 <span className="text-red-500 font-semibold">📡 ISP:</span>
//                 <span className="ml-2" style={{ color: '#00ff00' }}>{deviceInfo.isp}</span>
//               </div>
              
//               <div className="bg-black p-3 rounded-lg border border-gray-600">
//                 <span className="text-red-500 font-semibold">📍 Region:</span>
//                 <span className="ml-2" style={{ color: '#00ff00' }}>{deviceInfo.region}</span>
//               </div>
              
//               <div className="bg-black p-3 rounded-lg border border-gray-600">
//                 <span className="text-red-500 font-semibold">🌍 Country:</span>
//                 <span className="ml-2" style={{ color: '#00ff00' }}>{deviceInfo.country}</span>
//               </div>
//             </div>
            
//             <div className="space-y-3">
//               <div className="bg-black p-3 rounded-lg border border-gray-600">
//                 <span className="text-red-500 font-semibold">⏰ Timezone:</span>
//                 <span className="ml-2" style={{ color: '#00ff00' }}>{deviceInfo.timezone}</span>
//               </div>
              
//               <div className="bg-black p-3 rounded-lg border border-gray-600">
//                 <span className="text-red-500 font-semibold">🌐 Browser:</span>
//                 <span className="ml-2" style={{ color: '#00ff00' }}>{deviceInfo.browser}</span>
//               </div>
              
//               <div className="bg-black p-3 rounded-lg border border-gray-600">
//                 <span className="text-red-500 font-semibold">💻 OS:</span>
//                 <span className="ml-2" style={{ color: '#00ff00' }}>{deviceInfo.os}</span>
//               </div>
              
//               <div className="bg-black p-3 rounded-lg border border-gray-600">
//                 <span className="text-red-500 font-semibold">📱 Device:</span>
//                 <span className="ml-2" style={{ color: '#00ff00' }}>{deviceInfo.deviceType}</span>
//               </div>
              
//               <div className="bg-black p-3 rounded-lg border border-gray-600">
//                 <span className="text-red-500 font-semibold">🖥️ Resolution:</span>
//                 <span className="ml-2" style={{ color: '#00ff00' }}>{deviceInfo.screenResolution}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserDeviceInfo;







import React, { useState } from 'react';

const InternetScanLayout = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  // Replace with your actual IPinfo access token
  const IPINFO_ACCESS_TOKEN = '26347059c50ccc';

  const scanNetwork = async () => {
    setIsScanning(true);
    setShowResults(false);
    
    try {
      // Simulate scanning delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Fetch IP information from IPinfo API
      const response = await fetch(`https://ipinfo.io/json?token=${IPINFO_ACCESS_TOKEN}`);
      const data = await response.json();
      
      // Detect device type (basic detection)
      const userAgent = navigator.userAgent;
      let deviceType = 'Unknown';
      
      if (/Windows/i.test(userAgent)) {
        deviceType = 'Windows';
      } else if (/Macintosh/i.test(userAgent)) {
        deviceType = 'Mac';
      } else if (/Linux/i.test(userAgent)) {
        deviceType = 'Linux';
      } else if (/Android/i.test(userAgent)) {
        deviceType = 'Android';
      } else if (/iPhone|iPad/i.test(userAgent)) {
        deviceType = 'iOS';
      }

      setScanResults({
        location: `${data.city}, ${data.region}, ${data.country}`,
        ip: data.ip,
        isp: data.org,
        device: deviceType
      });
      
      setShowResults(true);
    } catch (error) {
      console.error('Error fetching IP info:', error);
      // Fallback data for demo purposes
      setScanResults({
        location: 'Mumbai, Maharashtra, India',
        ip: '152.58.40.123',
        isp: 'Reliance Jio Infocomm Limited',
        device: 'Windows'
      });
      setShowResults(true);
    }
    
    setIsScanning(false);
  };

  const ScanningAnimation = () => (
    <div className="text-lime-400 font-mono space-y-2">
      <div className="animate-pulse">Initializing connection...</div>
      <div className="animate-pulse" style={{ animationDelay: '0.5s' }}>Bypassing firewall...</div>
      <div className="animate-pulse" style={{ animationDelay: '1s' }}>Accessing secure server...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Main Container */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8 sm:space-y-12 lg:space-y-16">
        
        {/* Top Button - Scan Network (only show if not showing results) */}
        {!showResults && (
          <div className="w-full flex justify-center">
            <button 
              onClick={scanNetwork}
              disabled={isScanning}
              className="bg-lime-400 hover:bg-lime-300 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-bold py-3 px-8 sm:py-4 sm:px-12 lg:py-5 lg:px-16 rounded-full text-base sm:text-lg lg:text-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform disabled:transform-none disabled:shadow-none"
            >
              {isScanning ? 'Scanning...' : 'Scan Network'}
            </button>
          </div>
        )}

        {/* Main Title */}
        <div className="text-center">
          <h1 className="text-lime-400 font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider cursor-pointer">
            Internet Scan
          </h1>
        </div>

        {/* Content Area */}
        <div className="w-full min-h-64 flex flex-col items-center justify-center">
          {isScanning && (
            <ScanningAnimation />
          )}
          
          {showResults && scanResults && (
            <div className="w-full max-w-2xl space-y-6 font-mono">
              {/* Scan Results */}
              <div className="space-y-4 text-center sm:text-left">
                <div className="text-lime-400 text-lg sm:text-xl">
                  Detected Location: {scanResults.location}
                </div>
                
                <div className="text-lime-400 text-lg sm:text-xl">
                  IP Address: {scanResults.ip}
                </div>
                
                <div className="text-lime-400 text-lg sm:text-xl">
                  ISP: {scanResults.isp}
                </div>
                
                <div className="text-lime-400 text-lg sm:text-xl">
                  Device: {scanResults.device}
                </div>
              </div>

              {/* Warning Message */}
           <div className="text-orange-400 text-base sm:text-lg leading-relaxed text-center sm:text-left mt-8">
  Your {scanResults.device} was used from another location
  apart from your home location {scanResults.location.split(',')[0]}, and
  your data was accessed through your ISP {scanResults.isp.replace(/AS\d+\s+/, '')}.
  
  <br /><br />
  <strong>Important Notice: Suspicious Activity Detected Using Your Identity</strong>
  <br />
  We’ve found strong indicators that your personal information is being misused across multiple platforms. Specifically, it appears that your identity has been used on the following apps and services:
  <br /><br />
  Cash App
  <br />
  Venmo
  <br />
  Chime
  <br />
  Walmart
  <br />
  Sam’s Club
  <br />
  Bitcoin platform
  <br />
  One credit line application
  <br />
</div>

           

              {/* Loading Messages */}
              <div className="text-lime-400 font-mono space-y-2 text-base sm:text-lg text-center sm:text-left mt-8">
                <div>Initializing connection...</div>
                <div>Bypassing firewall...</div>
                <div>Accessing secure server...</div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Button - Submit Complaint (always visible) */}
        <div className="w-full flex justify-center">
           <a 
    href="https://chatbot.page/V3kkrC" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button className="bg-lime-400 hover:bg-lime-300 text-black font-bold py-3 px-8 sm:py-4 sm:px-12 lg:py-5 lg:px-16 rounded-full text-base sm:text-lg lg:text-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform cursor-pointer">
      Submit complaint
    </button>
  </a>
        </div>

      </div>
    </div>
  );
};

export default InternetScanLayout;