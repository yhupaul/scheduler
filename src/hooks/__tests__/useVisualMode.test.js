// import { renderHook, act } from "@testing-library/react-hooks";
const {renderHook, act } = require ('@testing-library/react-hooks')

// import useVisualMode from "hooks/useVisualMode";
const { useVisualMode } = require ('../useVisualMode');

const FIRST = "FIRST";
// const SECOND = "SECOND";

test("useVisualMode should initialize with default value", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  expect(result.current.mode).toBe(FIRST);
});



