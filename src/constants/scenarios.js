export const SCENARIOS = {
  NIMAL_HAPPY: {
    id: 'nimal-happy',
    name: 'Nimal – Happy Path',
    desc: 'Instant Approval (CRIB 780)',
    steps: ['intake', 'upload', 'thinking', 'offer', 'success']
  },
  NIMAL_EDGE: {
    id: 'nimal-edge',
    name: 'Nimal – Edge Case',
    desc: 'Human-in-the-Loop (Income Mismatch)',
    steps: ['intake', 'upload', 'thinking', 'hitl', 'chat', 'officer']
  },
  KAMALA_STP: {
    id: 'kamala-stp',
    name: 'Kamala – Clean STP',
    desc: 'High Value + E-Sign (CRIB 850)',
    steps: ['intake', 'upload', 'thinking', 'offer', 'esign', 'success']
  },
  TRANSPARENT_REJECTION: {
    id: 'transparent-rejection',
    name: 'Transparent Rejection',
    desc: 'Explainable decline with a realistic alternative offer',
    steps: ['intake', 'upload', 'thinking', 'rejection', 'success']
  }
};
