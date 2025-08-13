
import React, { useState } from "react";
import axios from "axios";

const UserDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchIPInfo = async () => {
    try {
      setLoading(true);
      const token = "26347059c50ccc"; // Get from https://ipinfo.io/account/token
      const response = await axios.get(`https://ipinfo.io/json?token=${token}`);

      const userAgent = navigator.userAgent;
      const browser = getBrowser(userAgent);
      const os = getOS(userAgent);

      setDeviceInfo({
        ...response.data,
        browser,
        os,
        deviceType: getDeviceType(),
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        userAgent
      });
    } catch (error) {
      console.error("Error fetching IP info:", error);
    } finally {
      setLoading(false);
    }
  };

  const getBrowser = (ua) => {
    if (ua.includes("Chrome") && !ua.includes("Edg")) return "Chrome";
    if (ua.includes("Firefox")) return "Firefox";
    if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
    if (ua.includes("Edg")) return "Edge";
    return "Unknown";
  };

  const getOS = (ua) => {
    if (ua.includes("Windows")) return "Windows";
    if (ua.includes("Mac OS")) return "MacOS";
    if (ua.includes("Linux")) return "Linux";
    if (/Android/.test(ua)) return "Android";
    if (/iPhone|iPad|iPod/.test(ua)) return "iOS";
    return "Unknown";
  };

  const getDeviceType = () => {
    if (/Mobi|Android/i.test(navigator.userAgent)) return "Mobile";
    if (/Tablet|iPad/i.test(navigator.userAgent)) return "Tablet";
    return "Desktop";
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">User Device Info</h2>
      <button
        onClick={fetchIPInfo}
        disabled={loading}
        className={`px-6 py-3 rounded-full text-white font-semibold shadow-lg transition duration-300 
          ${loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"}`}
      >
        {loading ? "Fetching..." : "Get My Device Info"}
      </button>

      {deviceInfo && (
        <div className="mt-6 w-full max-w-lg bg-white rounded-xl shadow-md p-5 border border-gray-200">
          <h3 className="text-lg font-semibold mb-3">📋 Your Information</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>IP:</strong> {deviceInfo.ip}</li>
            <li><strong>City:</strong> {deviceInfo.city}</li>
            <li><strong>Region:</strong> {deviceInfo.region}</li>
            <li><strong>Country:</strong> {deviceInfo.country}</li>
            <li><strong>Timezone:</strong> {deviceInfo.timezone}</li>
            <li><strong>Browser:</strong> {deviceInfo.browser}</li>
            <li><strong>OS:</strong> {deviceInfo.os}</li>
            <li><strong>Device Type:</strong> {deviceInfo.deviceType}</li>
            <li><strong>Screen Resolution:</strong> {deviceInfo.screenResolution}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDeviceInfo;

