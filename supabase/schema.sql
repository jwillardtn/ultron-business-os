create extension if not exists "pgcrypto";

create table if not exists mission (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  target_revenue numeric(14,2) not null default 1000000,
  current_revenue numeric(14,2) not null default 0,
  status text not null default 'active',
  created_at timestamptz not null default now()
);

create table if not exists businesses (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  thesis text,
  status text not null default 'idea',
  revenue numeric(14,2) not null default 0,
  mrr numeric(14,2) not null default 0,
  monthly_cost numeric(14,2) not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists opportunities (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  market text,
  problem text,
  score numeric(6,2),
  evidence jsonb not null default '{}'::jsonb,
  status text not null default 'discovered',
  created_at timestamptz not null default now()
);

create table if not exists experiments (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references businesses(id) on delete cascade,
  name text not null,
  hypothesis text,
  budget numeric(12,2) not null default 0,
  spent numeric(12,2) not null default 0,
  success_metric text,
  success_threshold numeric,
  status text not null default 'planned',
  started_at timestamptz,
  ended_at timestamptz
);

create table if not exists agent_tasks (
  id uuid primary key default gen_random_uuid(),
  agent text not null,
  task_type text not null,
  payload jsonb not null default '{}'::jsonb,
  priority integer not null default 50,
  status text not null default 'queued',
  requires_approval boolean not null default false,
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create table if not exists approvals (
  id uuid primary key default gen_random_uuid(),
  task_id uuid references agent_tasks(id) on delete cascade,
  action text not null,
  reason text,
  amount numeric(12,2),
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  decided_at timestamptz
);

create table if not exists revenue_events (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references businesses(id) on delete set null,
  amount numeric(14,2) not null,
  source text,
  occurred_at timestamptz not null default now()
);

insert into mission(name,target_revenue)
select 'ULTRON $1M Mission',1000000
where not exists (select 1 from mission);