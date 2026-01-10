"use client";

import 'boxicons/css/boxicons.min.css';

const Beyond = () => {
  const contenders = [
    { rank: 1, user: "ShadowReaper", score: "42,000", icon: "bxs-ghost" },
    { rank: 2, user: "CyberQueen", score: "38,500", icon: "bxs-crown" },
    { rank: 3, user: "VortexGamer", score: "35,200", icon: "bxs-planet" },
    { rank: 4, user: "NeoPhantom", score: "33,800", icon: "bxs-mask" },
  ];

  return (
    <div
      id="beyond-section"
      className="md:min-h-[90%] p-0 lg:p-8 mt-40 md:mt-60 text-white scroll-mt-20"
    >
      {/* Section Title */}
      <div className="relative z-10 pt-6 text-center">
        <h1
          className="text-5xl font-bold tracking-widest mb-6"
          style={{
            textShadow:
              "0 0 10px rgba(255,255,255,0.6), 0 0 20px rgba(167,139,250,0.5)",
          }}
        >
          Beyond
        </h1>
       
      </div>

      {/* Main Grid */}
      <div className="lg:max-w-[90%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
        
        {/* Left: Leaderboard */}
        <div className="relative overflow-hidden rounded-3xl border border-white bg-white/5 backdrop-blur-md aspect-[4/3] transform transition-transform duration-500 hover:scale-[1.03] p-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <i className="bx bxs-trophy text-yellow-400 text-3xl"></i>
            Top Contenders
          </h3>

          <div className="space-y-4">
            {contenders.map((player) => (
              <div
                key={player.rank}
                className="flex items-center justify-between p-4 rounded-xl border border-white/10 transition-all cursor-pointer hover:scale-[1.01]"
              >
                <div className="flex items-center gap-4">
                  <span className="text-gray-500 font-mono text-sm w-6 text-center">
                    {player.rank < 10 ? `0${player.rank}` : player.rank}
                  </span>

                  {/* Player Icon Circle */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xl shadow-md shadow-purple-500/30">
                    <i className={`bx ${player.icon}`}></i>
                  </div>

                  <span className="font-bold">{player.user}</span>
                </div>
                <span className="font-mono text-purple-400 font-bold">
                  {player.score} XP
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Stats + CTA */}
        <div className="relative overflow-hidden rounded-3xl border border-white bg-white/5 backdrop-blur-md aspect-[4/3] transform transition-transform duration-500 hover:scale-[1.03] p-8 flex flex-col justify-between">
          <div>
            <h2
              className="text-4xl font-bold mb-4"
              style={{
                textShadow:
                  "0 0 10px rgba(255,255,255,0.5), 0 0 15px rgba(167,139,250,0.4)",
              }}
            >
              Go Beyond the <span className="text-purple-500">Arena</span>
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-lg">
              Connect your wallet, unlock exclusive NFTs, and climb the global
              rankings. Every battle, every trade, every victory brings you one
              step closer to eternal glory.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { value: "100k+", label: "Players", color: "text-yellow-400" },
              { value: "$2.4M", label: "Prize Pool", color: "text-purple-400" },
              { value: "850+", label: "Champions", color: "text-blue-400" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="border border-white rounded-2xl py-4 text-center transition-all hover:scale-[1.02]"
              >
                <h4 className={`${stat.color} font-bold text-lg`}>
                  {stat.value}
                </h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="pt-6 text-center">
            <button className="h-9 px-8 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-lg font-semibold text-sm text-white text-nowrap hover:opacity-80 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mx-auto shadow-md shadow-purple-500/30">
              <i className="bx bx-bolt-circle text-lg"></i> Join the Legends
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beyond;
