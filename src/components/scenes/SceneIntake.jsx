import { useState } from 'react';
import { Activity, Fingerprint, RefreshCw, CheckCircle } from 'lucide-react';
import { styles } from '../../constants/colors';

const SceneIntake = ({ onNext, addLog }) => {
  const [loading, setLoading] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);
  const [formData, setFormData] = useState({ nic: '', mobile: '', consent: false });

  const fetchDigitalID = () => {
      setLoading(true);
      addLog('System', 'Initiating Secure Handshake with Digital ID Provider...', false);
      
      setTimeout(() => {
          addLog('Network', 'TLS 1.3 Connection Established [latency: 24ms]', false);
      }, 500);

      setTimeout(() => {
          setLoading(false);
          setDataFetched(true);
          setFormData({ ...formData, nic: '198512345678', mobile: '077-123-4567' });
          addLog('Intake Agent', 'Identity Data Retrieved: { name: "Nimal P.", status: "VERIFIED" }', true);
      }, 1500);
  };

  const handleConsent = () => {
    const newState = !formData.consent;
    setFormData({ ...formData, consent: newState });
    if (newState) {
      addLog('Intake Agent', 'Consent Token Generated: 0x4F9A... [SIGNED]', true);
      addLog('Security Agent', 'CRIB Query Authorization: GRANTED');
    }
  };

  return (
    <div className="flex flex-col h-full justify-between p-6">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
            <div className={`p-3 rounded-full ${styles.bgSoft}`}>
                <Activity className={styles.textDeep} />
            </div>
            <div>
                <h2 className={`text-xl font-bold ${styles.textDeep}`}>Ayubowan!</h2>
                <p className={styles.textPrimary}>Let's check your eligibility.</p>
            </div>
        </div>

        {!dataFetched ? (
            <div 
                onClick={!loading ? fetchDigitalID : undefined}
                className={`p-6 rounded-xl border-2 border-dashed ${loading ? styles.borderAccent : styles.borderDeep} ${styles.bgWhite} flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-soft transition-colors h-48`}
            >
                {loading ? (
                    <>
                        <RefreshCw className={`animate-spin ${styles.textAccent}`} size={32} />
                        <span className={`text-sm font-bold ${styles.textDeep}`}>Fetching Verified ID...</span>
                    </>
                ) : (
                    <>
                        <Fingerprint className={styles.textDeep} size={40} />
                        <div className="text-center">
                            <span className={`block font-bold ${styles.textDeep}`}>Tap to Auto-Fill</span>
                            <span className={`text-xs ${styles.textPrimary}`}>via National Digital ID</span>
                        </div>
                    </>
                )}
            </div>
        ) : (
            <div className={`p-4 rounded-xl ${styles.bgSoft} space-y-4 animate-fadeIn`}>
                <div className="flex justify-between items-center border-b border-white pb-2 mb-2">
                     <span className={`text-xs font-bold ${styles.textDeep} uppercase tracking-wider`}>Verified Identity</span>
                     <CheckCircle size={14} className={styles.textPrimary} />
                </div>
                <label className="block space-y-1">
                    <span className={`text-xs font-bold ${styles.textDeep}`}>NIC Number</span>
                    <input 
                        type="text" 
                        value={formData.nic}
                        readOnly
                        className={`w-full p-3 rounded-lg ${styles.borderPrimary} border-2 ${styles.textDeep} ${styles.bgWhite} outline-none font-mono`}
                    />
                </label>
                <label className="block space-y-1">
                    <span className={`text-xs font-bold ${styles.textDeep}`}>Mobile Number</span>
                    <input 
                        type="text" 
                        value={formData.mobile}
                        readOnly
                        className={`w-full p-3 rounded-lg ${styles.borderPrimary} border-2 ${styles.textDeep} ${styles.bgWhite} outline-none font-mono`}
                    />
                </label>
            </div>
        )}

        <label className={`flex items-start gap-3 p-4 rounded-xl border-2 ${formData.consent ? styles.borderPrimary : styles.borderSoft} cursor-pointer transition-colors`}>
            <div className={`mt-1 w-6 h-6 rounded border-2 flex items-center justify-center ${formData.consent ? styles.bgPrimary : styles.bgWhite} ${styles.borderPrimary} transition-colors`}>
                {formData.consent && <CheckCircle size={16} className={styles.textWhite} />}
            </div>
            <input type="checkbox" className="hidden" onChange={handleConsent} checked={formData.consent} />
            <span className={`text-sm ${styles.textDeep} font-medium leading-relaxed`}>
                I consent to CRIB & Identity Verification processing by HNB AI Agents.
            </span>
        </label>
      </div>

      <button 
        onClick={() => {
            addLog('Orchestrator', 'Initiating Flow: CHECK_ELIGIBILITY [ID: Nimal-88]');
            onNext();
        }}
        disabled={!formData.consent || !dataFetched}
        className={`w-full py-4 rounded-xl font-bold text-lg shadow-deep transition-transform active:scale-95
            ${formData.consent && dataFetched ? `${styles.bgDeep} ${styles.textWhite}` : `${styles.bgSoft} cursor-not-allowed ${styles.textDeep}`}
        `}
      >
        Check Eligibility
      </button>
    </div>
  );
};

export default SceneIntake;
