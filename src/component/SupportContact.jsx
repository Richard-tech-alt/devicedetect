import React from 'react';
import { Phone, MessageCircle, Mail, BookOpen } from 'lucide-react';

const SupportContact = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Need Help?
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              We're Here for You
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-lg mx-auto">
              Our support team is available 24/7 to help you secure your account and resolve any issues.
            </p>
          </div>

          {/* Support Options */}
          <div className="space-y-4 sm:space-y-6">
            {/* Call Support */}
            <div className="flex items-center justify-between p-4 sm:p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="flex-shrink-0">
                  <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
                    Call Support
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg">
                    (123) 456-7890
                  </p>
                </div>
              </div>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base">
                Call Now
              </button>
            </div>

            {/* Live Chat */}
            <div className="flex items-center justify-between p-4 sm:p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="flex-shrink-0">
                  <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
                    Live Chat
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg">
                    Use backup
                  </p>
                </div>
              </div>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base">
                Start Chat
              </button>
            </div>

            {/* Email Support */}
            <div className="flex items-center justify-between p-4 sm:p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="flex-shrink-0">
                  <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
                    Email Support
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg">
                    support@yourbran...
                  </p>
                </div>
              </div>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base">
                Send Email
              </button>
            </div>

            {/* Help Center */}
            <div className="flex items-center justify-between p-4 sm:p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="flex-shrink-0">
                  <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
                    Help Center /
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg">
                    FAQs
                  </p>
                </div>
              </div>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base">
                Go to Help Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportContact;