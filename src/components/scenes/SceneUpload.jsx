import { useState } from 'react';
import { FileText, CheckCircle, Shield } from 'lucide-react';
import { styles } from '../../constants/colors';

const SceneUpload = ({ onNext, addLog }) => {
  const [status, setStatus] = useState('idle'); // idle, scanning, verified
  const [scanProgress, setScanProgress] = useState(0);

  const startUpload = () => {
    setStatus('scanning');
    addLog('System', 'Upload Started. Stream Size: 2.4MB', false);
    
    // Simulate progress
    let p = 0;
    const interval = setInterval(() => {
        p += 5;
        setScanProgress(p);
        
        // Random "Scanning" logs
        if (p === 20) addLog('System', 'Virus Scan: [CLEAN]', false);
        if (p === 50) addLog('System', 'OCR Engine: Extracting Text Layers...', false);
        if (p === 80) addLog('Data Extractor', 'Found Keywords: "Gross Salary", "EPF"', true);

        if (p >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                addLog('Document AI', 'Confidence Score: 99.2%', true);
                addLog('Data Extractor', 'JSON Output: { "income": 125000, "source": "payroll" }');
                setStatus('verified');
            }, 500);
        }
    }, 100);
  };

  return (
    <div className="flex flex-col h-full justify-between p-6">
      <div className="space-y-6">
        <h2 className={`text-xl font-bold ${styles.textDeep}`}>Secure Documents</h2>
        <p className={styles.textDeep}>Please upload your proof of income.</p>

        <div className="space-y-3">
            {['NIC (Front/Back)', 'Payslip (Last 3 months)', 'Bank Statement'].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-lg ${styles.bgSoft}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${status === 'verified' ? styles.bgPrimary : styles.bgDeep}`}>
                        {status === 'verified' ? <CheckCircle size={16} className="text-white" /> : <span className="text-white text-xs">{i+1}</span>}
                    </div>
                    <span className={`font-medium ${styles.textDeep}`}>{item}</span>
                </div>
            ))}
        </div>

        <div 
            onClick={status === 'idle' ? startUpload : undefined}
            className={`
                mt-8 border-4 border-dashed rounded-2xl h-48 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all relative overflow-hidden
                ${status === 'idle' ? styles.borderPrimary : ''}
                ${status === 'scanning' ? styles.borderAccent : ''}
                ${status === 'verified' ? styles.borderDeep : ''}
                ${styles.bgWhite}
            `}
        >
            {status === 'scanning' && (
                <div 
                    className={`absolute bottom-0 left-0 h-1 ${styles.bgPrimary} transition-all duration-100`} 
                    style={{ width: `${scanProgress}%` }}
                ></div>
            )}
            
            {status === 'idle' && (
                <>
                    <div className={`p-4 rounded-full ${styles.bgSoft}`}>
                        <FileText size={32} className={styles.textDeep} />
                    </div>
                    <span className={`${styles.textDeep} font-bold`}>Tap to Upload Documents</span>
                </>
            )}
            {status === 'scanning' && (
                <>
                    <div className="w-full px-8">
                        <div className="flex justify-between text-xs font-bold mb-1">
                            <span className={styles.textDeep}>Analyzing...</span>
                            <span className={styles.textPrimary}>{scanProgress}%</span>
                        </div>
                        <div className={`w-full h-2 ${styles.bgSoft} rounded-full overflow-hidden`}>
                            <div className={`h-full ${styles.bgAccent} transition-all duration-100`} style={{ width: `${scanProgress}%` }}></div>
                        </div>
                    </div>
                    <span className={`text-xs ${styles.textDeep} font-mono mt-2`}>Checking for tamper marks...</span>
                </>
            )}
            {status === 'verified' && (
                <>
                    <Shield size={40} className={styles.textPrimary} />
                    <span className={`${styles.textPrimary} font-bold`}>Documents Verified</span>
                    <span className={`text-xs ${styles.textDeep}`}>All checks passed</span>
                </>
            )}
        </div>
      </div>

      <button 
        onClick={onNext}
        disabled={status !== 'verified'}
        className={`w-full py-4 rounded-xl font-bold text-lg shadow-deep transition-all
            ${status === 'verified' ? `${styles.bgDeep} ${styles.textWhite}` : `${styles.bgSoft} cursor-not-allowed ${styles.textDeep}`}
        `}
      >
        Proceed
      </button>
    </div>
  );
};

export default SceneUpload;
