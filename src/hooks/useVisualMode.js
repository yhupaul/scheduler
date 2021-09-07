import useState from "react";

function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);

  return { mode: mode };
}

module.exports = { useVisualMode };