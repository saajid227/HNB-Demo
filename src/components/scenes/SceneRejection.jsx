import { Info, Activity, ArrowRight } from 'lucide-react';
import { styles } from '../../constants/colors';

const SceneRejection = ({ onNext, addLog }) => {
    // Specific Data for this scenario
    const data = {
        requested: '1,200,000',
        income: '120,000',
        existingDebt: '42,000',
        maxEmi: '48,000',
        offer: '750,000'
    };

    return (
        <div className="flex flex-col h-full justify-between p-6 overflow-y-auto">
            <div className="space-y-6">
                <div className="text-center space-y-2">
                    <div className={`mx-auto w-16 h-16 rounded-full bg-[#e8f4fc] flex items-center justify-center mb-4`}>
                        <Info size={32} className={styles.textDeep} />
                    </div>
                    <h2 className={`text-2xl font-bold ${styles.textDeep}`}>Application Update</h2>
                    <p className={`${styles.textDeep} opacity-80`}>
                        We could not approve your request for <br/>
                        <span className="font-bold">Rs. {data.requested}</span>.
                    </p>
                </div>

                {/* Explanation Card */}
                <div className={`p-5 rounded-xl ${styles.bgSoft} border border-white space-y-3`}>
                    <h4 className={`text-sm font-bold ${styles.textDeep} flex items-center gap-2`}>
                        <Activity size={16} /> Why was I declined?
                    </h4>
                    
                    <div className="space-y-3 pt-2">
                         <div className="flex justify-between text-xs font-medium">
                            <span className={styles.textDeep}>Monthly Income</span>
                            <span className={styles.textDeep}>Rs. {data.income}</span>
                         </div>
                         <div className="flex justify-between text-xs font-medium">
                            <span className={styles.textDeep}>Existing Commitments</span>
                            <span className={`${styles.textDeep} font-bold`}>(- Rs. {data.existingDebt})</span>
                         </div>
                         <div className={`h-px ${styles.bgSoft} w-full`}></div>
                         <div className="flex justify-between text-xs font-bold">
                            <span className={styles.textDeep}>Disposable for Loan</span>
                            <span className={styles.textPrimary}>Rs. {parseInt(data.maxEmi.replace(',','')) - parseInt(data.existingDebt.replace(',',''))} (approx)</span>
                         </div>
                         <p className={`text-[10px] ${styles.textDeep} opacity-70 italic mt-1`}>
                            *Your requested amount requires a monthly commitment of ~Rs. 35,000, which exceeds your safe limit.
                         </p>
                    </div>
                </div>

                {/* Counter Offer Card */}
                <div className={`p-6 rounded-2xl ${styles.bgWhite} border-2 ${styles.borderAccent} shadow-accent relative overflow-hidden`}>
                     <div className={`absolute top-0 right-0 ${styles.bgAccent} px-3 py-1 rounded-bl-lg text-[10px] font-bold ${styles.textDeep}`}>
                        SMART OFFER
                     </div>
                     <div className="space-y-2">
                        <p className={`text-xs ${styles.textDeep} font-bold uppercase`}>However, we can offer you:</p>
                        <h3 className={`text-3xl font-bold ${styles.textPrimary}`}>Rs. {data.offer}</h3>
                        <p className={`text-xs ${styles.textDeep} opacity-80`}>
                            This amount fits comfortably within your current financial capacity.
                        </p>
                     </div>
                </div>

            </div>

            <button 
                onClick={() => {
                    addLog('Orchestrator', 'User Accepted Counter-Offer: 750k', true);
                    addLog('Core Banking', 'Loan Account Created (Series B)', true);
                    onNext();
                }}
                className={`w-full py-4 rounded-xl font-bold text-lg shadow-deep ${styles.bgDeep} ${styles.textWhite} hover:brightness-105 transition-all mt-2 flex justify-center items-center gap-2`}
            >
                Accept Revised Offer <ArrowRight size={20} />
            </button>
        </div>
    );
};

export default SceneRejection;
