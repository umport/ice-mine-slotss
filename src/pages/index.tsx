export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-950 via-gray-900 to-black">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            ICE MINE SLOTS
          </h1>
          <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-2xl mx-auto">
            Free social game with icy treasures
          </p>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-800/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Coming Soon!
            </h2>
            <p className="text-cyan-200 mb-6 max-w-xl">
              Get ready for an exciting adventure in the frozen mines. 
              Collect diamonds, unlock bonuses, and enjoy the game!
            </p>
            <div className="text-sm text-gray-400">
              Free • For Entertainment • No Real Money Bets
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Game Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-cyan-800/30">
            <div className="text-cyan-400 text-3xl mb-4">❄️</div>
            <h3 className="text-xl font-bold text-white mb-3">Icy Graphics</h3>
            <p className="text-gray-300">
              Stunning visual effects and crystal animations
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-cyan-800/30">
            <div className="text-cyan-400 text-3xl mb-4">🎮</div>
            <h3 className="text-xl font-bold text-white mb-3">Social Play</h3>
            <p className="text-gray-300">
              Play for free in an engaging social atmosphere
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-cyan-800/30">
            <div className="text-cyan-400 text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-3">Fast Gameplay</h3>
            <p className="text-gray-300">
              Dynamic rounds and exciting bonus levels
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Important Information
          </h2>
          <div className="space-y-4">
            <p className="text-cyan-200">
              <span className="font-bold text-white">Ice Mine Slots</span> is a completely free social game for entertainment only.
            </p>
            <p className="text-gray-300">
              No real money gambling. No financial investment required.
            </p>
            <p className="text-gray-300">
              For 18+ audience. Entertainment purposes only.
            </p>
          </div>
          
          <div className="mt-8 pt-8 border-t border-cyan-800/30">
            <a
              href="/privacy-policy"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span className="mr-2">🔒</span>
              <span>Privacy Policy</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="text-center text-gray-400">
          <p>© {new Date().getFullYear()} Ice Mine Slots. All rights reserved.</p>
          <p className="text-sm mt-2">Game is for entertainment purposes only.</p>
        </div>
      </footer>
    </main>
  );
}
