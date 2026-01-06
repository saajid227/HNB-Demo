import { useState } from 'react';
import { Shield, PenTool, CheckCircle } from 'lucide-react';
import { styles } from '../../constants/colors';

const SceneESign = ({ onNext, addLog }) => {
    const [signed, setSigned] = useState(false);

    return (
        <div className="flex flex-col h-full justify-between p-6">
            <div className="space-y-6">
                <h2 className={`text-xl font-bold ${styles.textDeep}`}>Digital Signature</h2>
                <div className={`h-64 ${styles.bgSoft} rounded-lg p-5 text-xs ${styles.textDeep} overflow-y-auto leading-relaxed border ${styles.borderPrimary} shadow-inner`}>
                    <div className="text-center mb-4 opacity-50">
                        <Shield size={32} className="mx-auto mb-2" />
                        <p className="font-bold">SECURE DOCUMENT VIEWER</p>
                    </div>
                    <p className="font-bold mb-2 text-sm">LOAN AGREEMENT #HNB-8821</p>
                    <p>1. The Borrower agrees to pay the Principal Amount of Rs. 1,000,000...</p>
                    <p className="mt-2">2. Interest shall be calculated at 13.5% p.a. on a reducing balance basis...</p>
                    <p className="mt-2">3. Default of payment triggers standard banking procedure as per Central Bank regulations...</p>
                    <p className="mt-2">4. Early settlement fees may apply...</p>
                    <div className="mt-8 border-b-2 border-black w-1/2 opacity-20"></div>
                    <p className="opacity-50 mt-1">Authorized Officer</p>
                </div>
                
                <div 
                    onClick={() => {
                        setSigned(true);
                        addLog('Security Agent', 'Biometric Signature Captured: [Kamala P.]', true);
                        addLog('Blockchain Node', 'Hash: 8d9a...2b1 written to ledger');
                    }}
                    className={`h-24 border-2 ${signed ? styles.borderPrimary : styles.borderDeep} border-dashed rounded-xl flex items-center justify-center cursor-pointer ${styles.bgWhite} relative hover:opacity-90 transition-opacity`}
                >
                    {!signed ? (
                        <div className="flex flex-col items-center animate-pulse">
                            <PenTool className={styles.textDeep} />
                            <span className={`text-sm ${styles.textDeep} font-bold mt-2`}>Tap to Sign Here</span>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            <span className={`text-3xl font-script ${styles.textDeep} font-bold italic`}>Kamala P.</span>
                            <span className={`text-[10px] ${styles.textPrimary} font-bold mt-1 flex items-center gap-1`}><CheckCircle size={10}/> Verified</span>
                        </div>
                    )}
                </div>
            </div>

            <button 
                onClick={() => {
                    addLog('Core Banking', 'Loan Disbursed to Account *8821', true);
                    onNext();
                }}
                disabled={!signed}
                className={`w-full py-4 rounded-xl font-bold text-lg shadow-deep ${signed ? `${styles.bgPrimary} ${styles.textWhite}` : `${styles.bgSoft} ${styles.textDeep}`} transition-all`}
            >
                Confirm & Disburse
            </button>
        </div>
    );
}

export default SceneESign;
