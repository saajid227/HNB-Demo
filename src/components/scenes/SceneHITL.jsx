import { useEffect, useRef } from 'react';
import { User, AlertTriangle } from 'lucide-react';
import { styles } from '../../constants/colors';

const SceneHITL = ({ onNext, addLog }) => {
    const hasInitialized = useRef(false);

    useEffect(() => {
        // Only run once when component mounts using ref
        if (hasInitialized.current) return;
        hasInitialized.current = true;

        setTimeout(() => {
            addLog('Orchestrator', 'Context Switch: OFFICER_DASHBOARD', true);
            setTimeout(onNext, 2500);
        }, 3000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex flex-col h-full justify-center items-center p-8 text-center space-y-6">
            <div className={`w-24 h-24 rounded-full ${styles.bgSoft} flex items-center justify-center relative`}>
                <User size={48} className={styles.textDeep} />
                <div className={`absolute -bottom-2 -right-2 ${styles.bgAccent} p-2 rounded-full border-4 ${styles.borderWhite}`}>
                    <AlertTriangle size={20} className={styles.textWhite} />
                </div>
            </div>
            <h2 className={`text-xl font-bold ${styles.textDeep}`}>Expert Review Required</h2>
            <p className={`${styles.textDeep} leading-relaxed opacity-80`}>
                We noticed a small discrepancy in your income verification. A Credit Officer is reviewing it now.
            </p>
            <div className={`w-full p-4 ${styles.bgSoft} rounded-lg text-sm ${styles.textDeep} font-medium flex justify-between items-center`}>
                <span>Reference ID</span>
                <span className="font-mono font-bold">#HNB-9928</span>
            </div>
            <div className={`flex items-center gap-2 text-xs ${styles.textPrimary}`}>
                <div className={`w-2 h-2 rounded-full ${styles.bgPrimary} animate-ping`}></div>
                Connecting to Officer Console...
            </div>
        </div>
    );
};

export default SceneHITL;
