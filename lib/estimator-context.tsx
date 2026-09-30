"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import EarningsEstimatorModal from "@/components/EarningsEstimatorModal";

type EstimatorContextValue = {
  openEstimator: () => void;
};

const EstimatorContext = createContext<EstimatorContextValue | null>(null);

/**
 * Single, app-wide instance of the earnings estimator modal — mounted once
 * at the root layout so any page or the header can open it via
 * useEstimator(), instead of each trigger owning its own modal instance.
 */
export function EstimatorProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [instanceKey, setInstanceKey] = useState(0);

  function openEstimator() {
    setInstanceKey((k) => k + 1);
    setOpen(true);
  }

  return (
    <EstimatorContext.Provider value={{ openEstimator }}>
      {children}
      <EarningsEstimatorModal key={instanceKey} open={open} onClose={() => setOpen(false)} />
    </EstimatorContext.Provider>
  );
}

export function useEstimator() {
  const ctx = useContext(EstimatorContext);
  if (!ctx) throw new Error("useEstimator must be used within EstimatorProvider");
  return ctx;
}
