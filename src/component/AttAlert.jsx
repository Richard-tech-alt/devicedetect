import { Shield, Smartphone, CheckCircle, Phone } from 'lucide-react';

export default function WiFiSecurityLayout() {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8 lg:mb-12">
          <div className="flex-1 mb-6 lg:mb-0 lg:pr-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Protect Your Wi-Fi Router & Mobile Network from Hackers
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We help you scan, secure, and safeguard your devices before threats spread.
            </p>
          </div>
         
          {/* Router and Phone Illustration */}
          <div className="flex-shrink-0 relative">
            <div className="relative">
              {/* Router */}
              <div className="w-20 h-12 sm:w-24 sm:h-14 bg-gray-700 rounded-lg relative">
                {/* Router antennas */}
                <div className="absolute -top-6 left-2 w-1 h-6 bg-gray-600 rounded-full transform -rotate-12"></div>
                <div className="absolute -top-6 right-2 w-1 h-6 bg-gray-600 rounded-full transform rotate-12"></div>
                {/* Router lights */}
                <div className="absolute top-2 left-2 w-1 h-1 bg-green-400 rounded-full"></div>
                <div className="absolute top-2 left-5 w-1 h-1 bg-blue-400 rounded-full"></div>
              </div>
             
              {/* Shield */}
              <div className="absolute -top-2 -right-2 w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
             
              {/* Phone */}
              <div className="absolute -top-4 -right-12 sm:-right-16 w-12 h-20 sm:w-14 sm:h-24 bg-blue-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid gap-6 sm:gap-8 mb-8 lg:mb-12">
          {/* Feature 1 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-base">1</span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Scan Your Device</h3>
              <p className="text-gray-600 text-sm sm:text-base">Run a full network & device check.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-base">2</span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Detect Unusual Activity</h3>
              <p className="text-gray-600 text-sm sm:text-base">Identify suspicious logins or hidden apps.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-base">3</span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Secure Instantly</h3>
              <p className="text-gray-600 text-sm sm:text-base">Get expert guidance to lock down your router & phone.</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-12">
          <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base">
            Run Scan Now
          </button>
          <button className="flex-1 border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base flex items-center justify-center">
            <Phone className="w-4 h-4 mr-2" />
            Call Support: (TTTF-Aeee)
          </button>
        </div>

        {/* Trust Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Trusted Security Service</h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0" />
              <span className="text-gray-700 text-sm sm:text-base">U.S.-based certified consultants</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0" />
              <span className="text-gray-700 text-sm sm:text-base">24/7 Wi-Fi & mobile security guidance</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0" />
              <span className="text-gray-700 text-sm sm:text-base">Trusted by 10,000+ users</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}