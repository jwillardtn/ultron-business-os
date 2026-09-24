import { NextResponse } from "next/server";
export async function GET(){return NextResponse.json({ok:true,system:"ULTRON",missionTarget:1000000});}