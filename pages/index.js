import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentFact, setCurrentFact] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [stars, setStars] = useState([]);

  const facts = [
    {
      emoji: "🌌",
      title: "Galaxies - Poori Duniya",
      text: "Ye sirf tare nahi… poori galaxies hain! Har galaxy me karodo sitare, grah aur black holes hote hain."
    },
    {
      emoji: "🪐",
      title: "Milky Way Galaxy",
      text: "Hum Milky Way galaxy me rehte hain — jaha light ko ek kone se dusre kone tak jaane me 1 lakh saal lagte hain!"
    },
    {
      emoji: "🌠",
      title: "200 Billion Galaxies",
      text: "Scientists kehte hain universe me 200 billion se zyada galaxies ho sakti hain."
    },
    {
      emoji: "👽",
      title: "Alien Life Possibility",
      text: "Socho, har galaxy me alag worlds, alag life ho sakti hai!"
    },
    {
      emoji: "✨",
      title: "Sky Ka Raaz",
      text: "Raat me jab sky dekho, yaad rakhna — wo sirf chamak nahi, ek nayi duniya ka raaz hai!"
    }
  ];

  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < 200; i++) {
      newStars.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 3 + 2
      });
    }
    setStars(newStars);
  }, []);

  const nextFact = () => {
    setCurrentFact((prev) => (prev + 1) % facts.length);
  };

  const prevFact = () => {
    setCurrentFact((prev) => (prev - 1 + facts.length) % facts.length);
  };

  return (
    <>
      <Head>
        <title>🌌 Galaxy Explorer - Space Facts</title>
        <meta name="description" content="Explore amazing facts about galaxies and space" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`
            }}
          />
        ))}

        <main className="main">
          <div className="header">
            <h1 className="title">🚀 Galaxy Explorer</h1>
            <p className="subtitle">Universe ke Amazing Facts</p>
          </div>

          <div className="fact-card">
            <div className="emoji-large">{facts[currentFact].emoji}</div>
            <h2 className="fact-title">{facts[currentFact].title}</h2>
            <p className="fact-text">{facts[currentFact].text}</p>

            <div className="navigation">
              <button onClick={prevFact} className="nav-button">← Previous</button>
              <span className="counter">{currentFact + 1} / {facts.length}</span>
              <button onClick={nextFact} className="nav-button">Next →</button>
            </div>
          </div>

          <div className="action-buttons">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`action-btn ${isLiked ? 'active' : ''}`}
            >
              {isLiked ? '❤️' : '🤍'} Like
            </button>
            <button
              onClick={() => setIsSubscribed(!isSubscribed)}
              className={`action-btn subscribe ${isSubscribed ? 'active' : ''}`}
            >
              {isSubscribed ? '✅' : '🔔'} {isSubscribed ? 'Subscribed' : 'Subscribe'}
            </button>
          </div>

          <footer className="footer">
            <p>🌍 Explore the wonders of the universe</p>
          </footer>
        </main>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(to bottom, #0a0e27, #1a1a3e, #0d0221);
          position: relative;
          overflow: hidden;
        }

        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle infinite ease-in-out;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .main {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 20px;
        }

        .header {
          text-align: center;
          margin-bottom: 40px;
        }

        .title {
          font-size: 3rem;
          background: linear-gradient(to right, #ff6b6b, #4ecdc4, #45b7d1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.5); }
        }

        .subtitle {
          color: #a8a8ff;
          font-size: 1.2rem;
          margin-top: 10px;
        }

        .fact-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 40px;
          max-width: 600px;
          width: 100%;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .emoji-large {
          font-size: 5rem;
          text-align: center;
          margin-bottom: 20px;
        }

        .fact-title {
          color: #ffffff;
          font-size: 1.8rem;
          text-align: center;
          margin-bottom: 20px;
        }

        .fact-text {
          color: #d4d4ff;
          font-size: 1.2rem;
          line-height: 1.8;
          text-align: center;
          margin-bottom: 30px;
        }

        .navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .nav-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 25px;
          cursor: pointer;
          font-size: 1rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .nav-button:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }

        .counter {
          color: #a8a8ff;
          font-size: 1rem;
        }

        .action-buttons {
          display: flex;
          gap: 20px;
          margin-top: 30px;
        }

        .action-btn {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.2);
          padding: 15px 40px;
          border-radius: 30px;
          cursor: pointer;
          font-size: 1.1rem;
          transition: all 0.3s;
        }

        .action-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .action-btn.active {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          border-color: transparent;
        }

        .action-btn.subscribe.active {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }

        .footer {
          margin-top: 40px;
          color: #8888ff;
          text-align: center;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2rem;
          }

          .fact-card {
            padding: 30px 20px;
          }

          .emoji-large {
            font-size: 3.5rem;
          }

          .fact-title {
            font-size: 1.4rem;
          }

          .fact-text {
            font-size: 1rem;
          }

          .navigation {
            flex-direction: column;
            gap: 10px;
          }

          .nav-button {
            width: 100%;
          }

          .action-buttons {
            flex-direction: column;
            width: 100%;
          }

          .action-btn {
            width: 100%;
          }
        }
      `}</style>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
      `}</style>
    </>
  );
}
