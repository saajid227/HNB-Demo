import { useEffect, useRef } from 'react';
import { Cpu, Server } from 'lucide-react';
import { styles } from '../constants/colors';

const AgentLog = ({ logs, maximized }) => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  return (
    <div className={`flex flex-col h-full overflow-hidden ${styles.bgDeep} font-mono border-l-4 ${styles.borderPrimary} transition-all duration-300 ${maximized ? 'w-full' : 'w-full'}`}>
      <div className={`p-4 border-b ${styles.borderPrimary} flex justify-between items-center`} style={{ backgroundColor: '#154a8f' }}>
        <div className="flex items-center gap-2">
          <Cpu size={20} className={styles.textAccent} />
          <span className={`${styles.textAccent} font-bold tracking-wider text-sm`}>HNB_AGENTIC_CORE_V1.0</span>
        </div>
        <div className="flex gap-2">
           <div className={`w-2 h-2 rounded-full ${styles.bgAccent} animate-pulse`}></div>
           <div className={`w-2 h-2 rounded-full ${styles.bgPrimary}`}></div>
           <div className={`w-2 h-2 rounded-full ${styles.bgWhite}`}></div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-2 text-xs md:text-sm">
        {logs.length === 0 && (
            <div className={`${styles.textPrimary} opacity-50 italic flex items-center gap-2`}>
                <Server size={14} /> System Idle. Waiting for trigger...
            </div>
        )}
        {logs.map((log, idx) => (
          <div key={idx} className={`flex gap-3 animate-fadeIn border-l-2 ${styles.borderDeep} pl-2 hover:border-accent transition-colors`}>
            <span className={`${styles.textPrimary} shrink-0 opacity-70 font-light text-[10px] w-16 text-right pt-1`}>{log.time}</span>
            <div className="flex flex-col">
                <span className={`font-bold uppercase tracking-wide text-[11px] ${log.type === 'error' ? styles.textAccent : styles.textWhite}`}>
                {log.agent}
                </span>
                <span className={`font-mono ${log.highlight ? `${styles.textAccent} font-bold` : styles.textSoft}`}>
                {log.msg}
                </span>
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>
    </div>
  );
};

export default AgentLog;
