import { useState } from 'react';
import { Shield, User, AlertTriangle, RefreshCw } from 'lucide-react';
import { styles } from '../../constants/colors';

const SceneOfficer = ({ onNext, addLog }) => {
    const [actionState, setActionState] = useState('idle'); // idle, processing

    const handleAction = (action) => {
        setActionState('processing');
        addLog('Officer Console', `Action Triggered: ${action}`, false);
        
        setTimeout(() => {
            if (action === 'Approve') {
                addLog('Officer', 'Manual Override: GRANTED', true);
                addLog('Audit Log', 'Reason: "Bonus verified via bank statement"', false);
            } else {
                addLog('Officer', 'Application REJECTED', false, 'error');
            }
            onNext();
        }, 1500);
    };

    return (
        <div className={`w-full h-full ${styles.bgSoft} flex flex-col font-sans`}>
             {/* Desktop Header */}
             <div className={`${styles.bgDeep} px-6 py-3 flex justify-between items-center shadow-md`}>
                <div className="flex items-center gap-3">
                    <div className="bg-white/10 p-2 rounded">
                        <Shield className={styles.textWhite} size={20} />
                    </div>
                    <div>
                        <div className={`${styles.textWhite} font-bold text-sm`}>HNB Credit Admin</div>
                        <div className={`${styles.textSoft} text-xs`}>v4.2.1 (Secure)</div>
                    </div>
                </div>
                <div className={`flex gap-6 text-sm ${styles.textSoft}`}>
                    <span className="flex items-center gap-2"><User size={14} /> Ruwan D.</span>
                    <span className={`flex items-center gap-2 ${styles.textAccent}`}><div className={`w-2 h-2 ${styles.bgAccent} rounded-full`}></div> Queue: 1</span>
                </div>
             </div>

             <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
                {/* Left Panel - Doc Preview */}
                <div className={`${styles.bgWhite} rounded-lg shadow-primary flex flex-col h-full border ${styles.borderSoft}`}>
                    <div className={`p-3 border-b flex justify-between items-center ${styles.bgSoft} rounded-t-lg`}>
                         <span className={`font-bold ${styles.textDeep} text-sm`}>Document Viewer</span>
                         <span className={`text-xs ${styles.textDeep} opacity-70`}>Payslip_March.pdf</span>
                    </div>
                    <div className={`flex-1 ${styles.bgSoft} p-4 flex items-center justify-center relative overflow-hidden`}>
                        <div className={`${styles.bgWhite} shadow-deep w-3/4 h-5/6 border ${styles.borderSoft} p-8 flex flex-col gap-4 scale-95 opacity-80 blur-[1px]`}>
                            {/* Fake Document Content */}
                            <div className={`h-4 w-1/3 ${styles.bgSoft} rounded`}></div>
                            <div className={`h-2 w-full ${styles.bgSoft} opacity-50 rounded mt-4`}></div>
                            <div className={`h-2 w-full ${styles.bgSoft} opacity-50 rounded`}></div>
                            <div className={`h-2 w-2/3 ${styles.bgSoft} opacity-50 rounded`}></div>
                            <div className={`h-20 w-full bg-white border ${styles.borderPrimary} rounded mt-4`}></div>
                        </div>
                        {/* Overlay Highlight */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${styles.bgAccent} bg-opacity-90 border-2 ${styles.borderAccent} p-4 rounded shadow-accent text-center`}>
                             <p className={`text-xs ${styles.textDeep} opacity-70 uppercase font-bold`}>Detected Value</p>
                             <p className={`text-2xl font-bold ${styles.textDeep}`}>100,000</p>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Data & Action */}
                <div className="flex flex-col gap-4">
                    <div className={`${styles.bgWhite} rounded-lg shadow-primary p-5 border ${styles.borderSoft}`}>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h2 className={`text-xl font-bold ${styles.textDeep}`}>Nimal Perera</h2>
                                <p className={`text-sm ${styles.textDeep} opacity-70`}>ID: 851234567V</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${styles.bgSoft} ${styles.textPrimary}`}>
                                Score: 780
                            </span>
                        </div>
                        
                        <div className="bg-white border-l-4 border-accent p-4 rounded-r-lg mb-4">
                            <h4 className={`font-bold ${styles.textDeep} flex items-center gap-2 text-sm`}>
                                <AlertTriangle size={16} className={styles.textAccent} />
                                AI Risk Alert
                            </h4>
                            <p className={`text-sm ${styles.textDeep} mt-2 leading-relaxed`}>
                                <strong>Income Mismatch Detected.</strong><br/>
                                Stated Income: 125,000<br/>
                                Document Proof: 100,000<br/>
                                <span className="italic opacity-80 text-xs">Variance exceeds 20% threshold.</span>
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.bgWhite} rounded-lg shadow-primary p-5 border ${styles.borderSoft} flex-1 flex flex-col`}>
                        <h3 className={`font-bold ${styles.textDeep} text-sm mb-4`}>Decision Control</h3>
                        
                        <textarea 
                            className={`w-full border ${styles.borderPrimary} p-3 rounded text-sm mb-4 h-24 resize-none focus:outline-none focus:border-accent ${styles.textDeep}`}
                            placeholder="Add internal notes for audit trail..."
                        ></textarea>

                        <div className="mt-auto flex gap-3">
                            <button 
                                onClick={() => handleAction('Request Info')}
                                disabled={actionState === 'processing'}
                                className={`flex-1 py-3 border-2 ${styles.borderDeep} ${styles.textDeep} font-bold rounded hover:bg-soft transition-colors disabled:opacity-50`}
                            >
                                Request Info
                            </button>
                            <button 
                                onClick={() => handleAction('Approve')}
                                disabled={actionState === 'processing'}
                                className={`flex-1 py-3 ${styles.bgDeep} text-white font-bold rounded hover:shadow-lg hover:-translate-y-0.5 transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none`}
                            >
                                {actionState === 'processing' ? <RefreshCw className="animate-spin" size={18} /> : 'Approve Override'}
                            </button>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default SceneOfficer;
