import { useState, useEffect } from 'react';
import { styles } from '../../constants/colors';

const SceneThinking = ({ onNext, addLog, scenario }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
        step++;
        setProgress(p => Math.min(p + 15, 100));

        // Randomized detailed logs
        if (step === 1) addLog('CRIB Agent', `Connecting to Bureau Database (v2.1)...`);
        if (step === 2) addLog('Network', 'Secure Channel: Active | Latency: 12ms');
        if (step === 3) addLog('CRIB Agent', 'History Fetched: 24 Records Found');
        if (step === 4) {
            if (scenario.id === 'kamala-stp') {
                addLog('CRIB Agent', 'Score Analysis: 850 [EXCELLENT]', true);
            } else if (scenario.id === 'transparent-rejection') {
                addLog('CRIB Agent', 'Score Analysis: 720 [GOOD]', true);
            } else {
                addLog('CRIB Agent', 'Score Analysis: 780 [GOOD]', true);
            }
        }
        if (step === 5) addLog('Risk Engine', 'Cross-referencing Watchlists (OFAC, UN)...');
        if (step === 6) {
             if (scenario.id === 'nimal-edge') {
                 addLog('Risk Engine', 'Income Validation: FAILED (Variance > 20%)', false, 'error');
             } else if (scenario.id === 'transparent-rejection') {
                 addLog('Risk Engine', 'DTI Check: FAILED (48k Cap Exceeded)', false, 'error');
             } else {
                 addLog('Risk Engine', 'DTI Calculation: 20% [PASS]', true);
             }
        }
        if (step === 8) {
             clearInterval(interval);
             if (scenario.id === 'nimal-edge') {
                 addLog('Orchestrator', 'Flagged for Manual Review. Routing to Officer Queue...', false, 'error');
             } else if (scenario.id === 'transparent-rejection') {
                 addLog('Decision Engine', 'Request REJECTED: DTI > 40%', false, 'error');
                 addLog('Sales Agent', 'Smart Counter-Offer Generated: 750,000', true);
             } else {
                 addLog('Decision Engine', 'DECISION: APPROVED [Auto]', true);
             }
             setTimeout(onNext, 800);
        }

    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full justify-center items-center p-8 text-center space-y-8">
        <div className="relative w-48 h-48">
             <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#BADFEC" strokeWidth="6" />
                <circle 
                    cx="50" cy="50" r="45" fill="none" stroke="#2FB0E4" strokeWidth="6" 
                    strokeDasharray="283"
                    strokeDashoffset={283 - (283 * progress / 100)}
                    strokeLinecap="round"
                    className="transition-all duration-500 ease-out"
                    transform="rotate(-90 50 50)"
                />
             </svg>
             <div className="absolute inset-0 flex items-center justify-center flex-col">
                 <span className={`text-3xl font-bold ${styles.textDeep}`}>{progress}%</span>
                 <span style={{ fontSize: '10px' }} className={`${styles.textPrimary} animate-pulse mt-1`}>PROCESSING</span>
             </div>
        </div>
        
        <div className="space-y-3">
            <h2 className={`text-xl font-bold ${styles.textDeep}`}>
                Analyzing Eligibility...
            </h2>
            <div className={`text-sm font-medium ${styles.textPrimary} flex flex-col gap-1 items-center`}>
                <span className={progress < 30 ? "font-bold" : "opacity-50"}>• Verifying Identity</span>
                <span className={progress >= 30 && progress < 60 ? "font-bold" : "opacity-50"}>• Checking Credit Health</span>
                <span className={progress >= 60 ? "font-bold" : "opacity-50"}>• Finalizing Offer</span>
            </div>
        </div>
    </div>
  );
};

export default SceneThinking;
