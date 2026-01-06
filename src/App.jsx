import { useState } from 'react';
import { 
  Smartphone, 
  User, 
  ChevronLeft, 
  LayoutTemplate,
  Monitor
} from 'lucide-react';
import './App.css';
import { SCENARIOS } from './constants/scenarios';
import { styles } from './constants/colors';
import AgentLog from './components/AgentLog';
import SceneIntake from './components/scenes/SceneIntake';
import SceneUpload from './components/scenes/SceneUpload';
import SceneThinking from './components/scenes/SceneThinking';
import SceneOffer from './components/scenes/SceneOffer';
import SceneHITL from './components/scenes/SceneHITL';
import SceneOfficer from './components/scenes/SceneOfficer';
import SceneRejection from './components/scenes/SceneRejection';
import SceneESign from './components/scenes/SceneESign';
import SceneSuccess from './components/scenes/SceneSuccess';
import SceneChatSupport from './components/scenes/SceneChatSupport';

function App() {
  const [view, setView] = useState('home'); // home, flow
  const [scenario, setScenario] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [layoutMode, setLayoutMode] = useState('split'); // customer, split, xray
  const [logs, setLogs] = useState([]);

  // Log Helper
  const addLog = (agent, msg, highlight = false, type = 'info') => {
    const time = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }) + '.' + Math.floor(Math.random() * 999);
    setLogs(prev => [...prev, { time, agent, msg, highlight, type }]);
  };

  const startScenario = (scen) => {
    setScenario(scen);
    setStepIndex(0);
    setLogs([]);
    setView('flow');
    addLog('System', `Initializing Scenario: ${scen.name}`);
    addLog('Intake Agent', 'Session Started. Waiting for user input...');
  };

  const nextStep = () => {
    if (stepIndex < scenario.steps.length - 1) {
      setStepIndex(prev => prev + 1);
    }
  };

  const reset = () => {
    setView('home');
    setScenario(null);
    setLogs([]);
  };

  // Step Renderer
  const renderStep = () => {
    const stepName = scenario.steps[stepIndex];
    
    // Check for officer step to force desktop layout visual inside the phone frame
    if (stepName === 'officer') {
        return <SceneOfficer onNext={nextStep} addLog={addLog} />;
    }

    switch(stepName) {
        case 'intake': return <SceneIntake onNext={nextStep} addLog={addLog} />;
        case 'upload': return <SceneUpload onNext={nextStep} addLog={addLog} />;
        case 'thinking': return <SceneThinking onNext={nextStep} addLog={addLog} scenario={scenario} />;
        case 'offer': return <SceneOffer onNext={nextStep} addLog={addLog} scenario={scenario} />;
        case 'hitl': return <SceneHITL onNext={nextStep} addLog={addLog} />;
        case 'chat': return <SceneChatSupport onNext={nextStep} onEnd={reset} addLog={addLog} />;
        case 'rejection': return <SceneRejection onNext={nextStep} addLog={addLog} />;
        case 'esign': return <SceneESign onNext={nextStep} addLog={addLog} />;
        case 'success': return <SceneSuccess onRestart={reset} />;
        default: return <div>Unknown Step</div>;
    }
  };

  return (
    <div className={`min-h-screen ${styles.bgSoft} font-sans flex flex-col overflow-hidden`}>
      {/* HEADER */}
      <header className={`${styles.bgWhite} border-b ${styles.borderPrimary} p-4 flex justify-between items-center shadow-sm z-50`}>
        <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded bg-[#1957A6] flex items-center justify-center text-white font-bold`}>H</div>
            <span className={`font-bold text-lg ${styles.textDeep}`}>HNB Agentic Journey</span>
        </div>
        
        {view === 'flow' && (
            <div className={`flex gap-2 ${styles.bgSoft} rounded-lg p-1`}>
                <button 
                    onClick={() => setLayoutMode('customer')}
                    className={`p-2 rounded ${layoutMode === 'customer' ? `${styles.bgWhite} shadow-primary ${styles.textDeep}` : styles.textDeep + ' opacity-50'}`}
                    title="Customer View Only"
                >
                    <Smartphone size={20} />
                </button>
                <button 
                    onClick={() => setLayoutMode('split')}
                    className={`p-2 rounded ${layoutMode === 'split' ? `${styles.bgWhite} shadow-primary ${styles.textDeep}` : styles.textDeep + ' opacity-50'}`}
                    title="Split View"
                >
                    <LayoutTemplate size={20} />
                </button>
                <button 
                    onClick={() => setLayoutMode('xray')}
                    className={`p-2 rounded ${layoutMode === 'xray' ? `${styles.bgWhite} shadow-primary ${styles.textDeep}` : styles.textDeep + ' opacity-50'}`}
                    title="X-Ray View Only"
                >
                    <Monitor size={20} />
                </button>
            </div>
        )}
      </header>

      {/* BODY */}
      <main className="flex-1 relative flex overflow-hidden">
        
        {/* HOME VIEW */}
        {view === 'home' && (
            <div className="w-full h-full p-8 overflow-y-auto flex flex-col items-center justify-center">
                <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="col-span-full text-center mb-8">
                        <h1 className={`text-3xl font-bold ${styles.textDeep} mb-2`}>Select a Journey</h1>
                        <p className={styles.textDeep}>Experience the Agentic Loan flow from different perspectives.</p>
                    </div>

                    {[SCENARIOS.NIMAL_HAPPY, SCENARIOS.NIMAL_EDGE, SCENARIOS.KAMALA_STP, SCENARIOS.TRANSPARENT_REJECTION].map(scen => (
                        <button 
                            key={scen.id}
                            onClick={() => startScenario(scen)}
                            className={`p-6 rounded-2xl bg-white border-2 hover:border-[#2FB0E4] hover:shadow-xl transition-all text-left group ${styles.borderDeep} flex flex-col justify-between`}
                        >
                            <div>
                                <div className={`w-12 h-12 rounded-full ${styles.bgSoft} mb-4 flex items-center justify-center group-hover:bg-[#2FB0E4] transition-colors`}>
                                    <User className={`${styles.textDeep} group-hover:text-white`} />
                                </div>
                                <h3 className={`text-lg font-bold ${styles.textDeep} mb-1 leading-tight`}>{scen.name}</h3>
                                <p className={`text-xs opacity-70 ${styles.textDeep} mt-2`}>{scen.desc}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        )}

        {/* FLOW VIEW */}
        {view === 'flow' && (
            <div className="w-full h-full flex relative">
                
                {/* LEFT: CUSTOMER APP (PHONE FRAME) */}
                <div 
                    className={`
                        transition-all duration-500 flex justify-center items-center p-4
                        ${layoutMode === 'xray' ? 'w-0 opacity-0 overflow-hidden p-0' : layoutMode === 'split' ? 'w-1/2' : 'w-full'}
                    `}
                    style={{ backgroundColor: '#dbeaf0' }}
                >
                    <div className={`
                        relative bg-white shadow-2xl overflow-hidden flex flex-col
                        ${scenario.steps[stepIndex] === 'officer' ? `w-full max-w-4xl h-[600px] rounded-lg border-4 ${styles.borderDeep}` : `w-[375px] h-[750px] rounded-[3rem] border-8 ${styles.borderWhite}`}
                    `}>
                        {/* Phone Notch/Status Bar (Only for Mobile scenes) */}
                        {scenario.steps[stepIndex] !== 'officer' && (
                            <div className={`h-12 ${styles.bgWhite} flex justify-between items-center px-6 shrink-0 z-10`}>
                                <span className={`text-xs font-bold ${styles.textDeep}`}>9:41</span>
                                <div className="flex gap-1">
                                    <div className={`w-4 h-4 rounded-full ${styles.bgDeep}`}></div>
                                    <div className={`w-4 h-4 rounded-full ${styles.bgSoft}`}></div>
                                    <div className={`w-4 h-4 rounded-full ${styles.bgPrimary}`}></div>
                                </div>
                            </div>
                        )}

                        {/* Screen Content */}
                        <div className="flex-1 overflow-hidden relative">
                            {renderStep()}
                        </div>

                        {/* Phone Home Indicator */}
                        {scenario.steps[stepIndex] !== 'officer' && (
                            <div className={`h-8 ${styles.bgWhite} flex justify-center items-center shrink-0`}>
                                <div className={`w-1/3 h-1 ${styles.bgSoft} rounded-full`}></div>
                            </div>
                        )}
                    </div>
                </div>

                {/* RIGHT: AGENT LOG (X-RAY) */}
                <div 
                    className={`
                        transition-all duration-500 border-l ${styles.borderDeep} relative
                        ${layoutMode === 'customer' ? 'w-0 opacity-0 overflow-hidden' : layoutMode === 'split' ? 'w-1/2' : 'w-full'}
                    `}
                >
                    <AgentLog logs={logs} maximized={layoutMode === 'xray'} />
                </div>

                {/* BACK BUTTON */}
                <button 
                    onClick={reset}
                    className={`absolute bottom-6 left-6 p-3 rounded-full ${styles.bgWhite} shadow-primary ${styles.textDeep} hover:bg-soft z-50 transition-colors`}
                    title="Exit Demo"
                >
                    <ChevronLeft size={24} />
                </button>
            </div>
        )}

      </main>
    </div>
  );
}

export default App;
