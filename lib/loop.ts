import { AGENTS } from "./agents";
export const LOOP=["observe","discover","score","build","launch","measure","scale_or_kill","learn"] as const;
export function nextCycle(){return {agents:Object.keys(AGENTS),steps:LOOP,requiresHumanApproval:["financial_commitment","binding_contract","banking_change","production_launch_with_spend"]};}