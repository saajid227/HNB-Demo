import { CheckCircle } from 'lucide-react';
import { styles } from '../../constants/colors';

const SceneSuccess = ({ onRestart }) => (
    <div className={`flex flex-col h-full justify-center items-center p-8 text-center space-y-6 ${styles.bgDeep} ${styles.textWhite}`}>
        <div className={`w-28 h-28 rounded-full ${styles.bgWhite} flex items-center justify-center animate-bounce shadow-2xl`}>
            <CheckCircle size={60} className={styles.textPrimary} />
        </div>
        <div className="space-y-2">
            <h2 className="text-3xl font-bold">Success!</h2>
            <p className={`${styles.textSoft} text-lg`}>Funds transferred to your account.</p>
        </div>
        
        <div className={`w-full bg-white/10 rounded-lg p-4 mt-8 backdrop-blur-sm`}>
            <div className="flex justify-between text-sm mb-2">
                <span className={styles.textSoft}>Transaction Ref</span>
                <span className="font-mono font-bold">TXN-882910</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className={styles.textSoft}>Time</span>
                <span className="font-mono font-bold">{new Date().toLocaleTimeString()}</span>
            </div>
        </div>

        <button 
            onClick={onRestart}
            className={`mt-8 px-8 py-3 ${styles.bgWhite} ${styles.textDeep} font-bold rounded-full shadow-primary hover:scale-105 transition-transform`}
        >
            Start New Journey
        </button>
    </div>
);

export default SceneSuccess;
