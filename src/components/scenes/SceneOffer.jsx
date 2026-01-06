import { useState } from 'react';
import { CheckCircle, Activity, Shield } from 'lucide-react';
import { styles } from '../../constants/colors';

const SceneOffer = ({ onNext, addLog, scenario }) => {
    const isKamala = scenario.id === 'kamala-stp';
    const rate = isKamala ? 13.5 : 14.5;
    const maxAmount = isKamala ? 1000000 : 500000;
    const minAmount = 100000;
    const [amount, setAmount] = useState(maxAmount);
    
    // Installment Calculation Simulation
    const tenor = isKamala ? 36 : 24; // months
    const monthlyRate = (rate / 100) / 12;
    const installment = Math.floor((amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -tenor)));

    const handleSliderChange = (e) => {
        setAmount(Number(e.target.value));
    };

    return (
        <div className="flex flex-col h-full justify-between p-6 overflow-y-auto">
            <div className="space-y-6">
                <div className="text-center space-y-2">
                    <div className={`mx-auto w-16 h-16 rounded-full ${styles.bgAccent} flex items-center justify-center mb-4 shadow-lg`}>
                        <CheckCircle size={32} className={styles.textDeep} />
                    </div>
                    <h2 className={`text-2xl font-bold ${styles.textDeep}`}>Congratulations!</h2>
                    <p className={styles.textDeep}>You are eligible for a pre-approved loan.</p>
                </div>

                {/* Main Card */}
                <div className={`p-6 rounded-2xl ${styles.bgDeep} text-white shadow-xl relative overflow-hidden`}>
                    <div className={`absolute -top-4 -right-4 p-4 opacity-10`}>
                        <Shield size={120} />
                    </div>
                    <div className="relative z-10 space-y-4">
                        <div>
                            <p className={`text-[#BADFEC] text-xs uppercase tracking-wider mb-1`}>Monthly Installment</p>
                            <h3 className={`text-4xl font-bold ${styles.textWhite}`}>Rs. {installment.toLocaleString()}</h3>
                        </div>
                        <div className={`flex justify-between border-t ${styles.borderPrimary} pt-4 mt-2`}>
                            <div>
                                <p className={`${styles.textSoft} text-xs`}>Interest Rate</p>
                                <p className={`font-bold ${styles.textAccent} text-lg`}>{rate}% p.a.</p>
                            </div>
                            <div className="text-right">
                                <p className={`${styles.textSoft} text-xs`}>Tenor</p>
                                <p className={`font-bold ${styles.textWhite} text-lg`}>{tenor} Months</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interactive Slider */}
                <div className={`space-y-4 p-4 ${styles.bgWhite} rounded-xl border ${styles.borderSoft} shadow-sm`}>
                    <div className="flex justify-between text-sm font-bold items-end">
                        <span className={styles.textDeep}>Loan Amount</span>
                        <span className={`text-xl ${styles.textPrimary}`}>Rs. {amount.toLocaleString()}</span>
                    </div>
                    
                    <input 
                        type="range" 
                        min={minAmount} 
                        max={maxAmount} 
                        step={50000}
                        value={amount}
                        onChange={handleSliderChange}
                        className={`w-full h-2 ${styles.bgSoft} rounded-lg appearance-none cursor-pointer`}
                        style={{
                            background: `linear-gradient(to right, #2FB0E4 0%, #2FB0E4 ${((amount - minAmount) / (maxAmount - minAmount)) * 100}%, #BADFEC ${((amount - minAmount) / (maxAmount - minAmount)) * 100}%, #BADFEC 100%)`
                        }}
                    />
                    
                    <div className={`flex justify-between text-xs ${styles.textDeep} opacity-70 font-medium`}>
                        <span>Rs. {(minAmount/1000)}k</span>
                        <span>Rs. {(maxAmount/1000)}k</span>
                    </div>
                </div>

                {/* Explainability */}
                <div className={`p-4 rounded-xl border ${styles.borderPrimary} ${styles.bgWhite}`} style={{ backgroundColor: '#eaf6fa' }}>
                    <div className="flex gap-3 items-start">
                        <Activity size={20} className={styles.textPrimary} />
                        <div>
                            <h4 className={`text-sm font-bold ${styles.textDeep}`}>AI Decision Insight</h4>
                            <p className={`text-xs mt-1 ${styles.textDeep} opacity-80 leading-relaxed`}>
                                Your excellent CRIB score ({isKamala ? '850' : '780'}) and verified income qualified you for this special rate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <button 
                onClick={() => {
                    addLog('Orchestrator', `User Accepted Offer: ${amount} @ ${rate}%`, true);
                    if(isKamala) {
                        addLog('Orchestrator', 'Initiating E-Sign Flow...');
                        onNext();
                    } else {
                        addLog('Core Banking', 'Creating Loan Account...', true);
                        addLog('Core Banking', 'Disbursement Scheduled: IMMEDIATE', true);
                        onNext();
                    }
                }}
                className={`w-full py-4 rounded-xl font-bold text-lg shadow-deep ${styles.bgPrimary} ${styles.textWhite} hover:brightness-105 transition-all mt-4`}
            >
                Accept Offer
            </button>
        </div>
    );
};

export default SceneOffer;
