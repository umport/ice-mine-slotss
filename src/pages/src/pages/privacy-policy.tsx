export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 md:p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <a href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
            ← Back to Home
          </a>
        </div>
        
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-cyan-800/30">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">
            Privacy Policy
          </h1>
          
          <div className="mb-8 p-6 bg-gray-800/50 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Key Information
            </h2>
            <p className="mb-4">
              <strong>Ice Mine Slots</strong> is a completely free social game for entertainment only.
            </p>
            <p className="mb-6">
              No real money gambling. No financial investment required.
            </p>
            
            <div className="mt-6 p-4 bg-cyan-900/20 border border-cyan-700/30 rounded-lg">
              <p className="font-semibold text-cyan-300 mb-2">
                Full Privacy Policy:
              </p>
              <a
                href="https://www.freeprivacypolicy.com/live/ba49458d-ab4f-42ae-b543-f1bd1cd8da4f"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-cyan-700 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg"
              >
                <span className="mr-2">📄</span>
                Open Full Privacy Policy
              </a>
            </div>
          </div>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">
              Key Points
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>No real money bets required</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>For entertainment only</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>For 18+ audience</span>
              </li>
            </ul>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              Last updated: {new Date().toLocaleDateString('en-US')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
