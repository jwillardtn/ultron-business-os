export type ProductStage="RESEARCH"|"BUILD"|"READY"|"LIVE"|"SCALE"|"KILL";
export type Product={id:string;name:string;channel:string;price:number;stage:ProductStage;owner:string};
export const PRODUCT_QUEUE:Product[]=[
{id:"P001",name:"Home Service Profit & Pricing OS",channel:"Etsy + Direct",price:29,stage:"BUILD",owner:"FORGE"},
{id:"P002",name:"Plumbing Business Operations Kit",channel:"Etsy",price:24,stage:"RESEARCH",owner:"SCOUT"},
{id:"P003",name:"HVAC Business Operations Kit",channel:"Etsy",price:24,stage:"RESEARCH",owner:"SCOUT"},
{id:"P004",name:"Contractor AI Sales & Follow-Up Vault",channel:"Etsy + Direct",price:19,stage:"RESEARCH",owner:"SCOUT"},
{id:"P005",name:"Home Service KPI Dashboard",channel:"Etsy + Direct",price:17,stage:"RESEARCH",owner:"SCOUT"},
{id:"P006",name:"Cleaning Business Starter OS",channel:"Etsy",price:24,stage:"RESEARCH",owner:"SCOUT"},
{id:"P007",name:"Landscaping Business Starter OS",channel:"Etsy",price:24,stage:"RESEARCH",owner:"SCOUT"},
{id:"P008",name:"Pressure Washing Business Starter OS",channel:"Etsy",price:24,stage:"RESEARCH",owner:"SCOUT"},
{id:"P009",name:"Mobile Detailing Business Starter OS",channel:"Etsy",price:24,stage:"RESEARCH",owner:"SCOUT"},
{id:"P010",name:"Complete Home Service Operator Bundle",channel:"Etsy + Direct",price:69,stage:"RESEARCH",owner:"ULTRON"}
];
export const FIRST_MILESTONE={monthlyRevenueTarget:10000,productsTarget:25,firstProduct:"P001"};