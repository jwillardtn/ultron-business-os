import { NextResponse } from "next/server"; import { nextCycle } from "@/lib/loop";
export async function GET(){return NextResponse.json({status:"ready",cycle:nextCycle()});}