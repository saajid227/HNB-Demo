/**
 * ------------------------------------------------------------------
 * STRICT COLOR PALETTE CONFIGURATION
 * ------------------------------------------------------------------
 * Primary Blue: #2FB0E4
 * Deep Corporate Blue: #1957A6
 * Accent Yellow: #FADD02
 * Soft Background Blue: #BADFEC
 * White: #FFFFFF
 * NO BLACKS, NO GRAYS, NO DEFAULTS.
 * ------------------------------------------------------------------
 */

export const COLORS = {
  primary: '#2FB0E4',
  deep: '#1957A6',
  accent: '#FADD02',
  soft: '#BADFEC',
  white: '#FFFFFF'
};

// Tailwind utility classes using ONLY the strict palette
export const styles = {
  // Text colors
  textDeep: "text-deep",
  textPrimary: "text-primary",
  textAccent: "text-accent",
  textWhite: "text-white",
  textSoft: "text-soft",
  
  // Background colors
  bgDeep: "bg-deep",
  bgPrimary: "bg-primary",
  bgSoft: "bg-soft",
  bgWhite: "bg-white",
  bgAccent: "bg-accent",
  
  // Border colors
  borderDeep: "border-deep",
  borderPrimary: "border-primary",
  borderAccent: "border-accent",
  borderSoft: "border-soft",
  
  // Shadows (only palette-based)
  shadowDeep: "shadow-deep",
  shadowPrimary: "shadow-primary",
  shadowAccent: "shadow-accent",
};
