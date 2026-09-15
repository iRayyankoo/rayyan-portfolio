-- ============================================================================
-- Rayyan Aldohian Portfolio & Multi-Tenant Portfolio Builder Platform Schema
-- PostgreSQL + Supabase Database Architecture
-- ============================================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Tenants Table (Multi-Tenancy Platform Support)
create table if not exists public.tenants (
    id uuid primary key default uuid_generate_v4(),
    slug text unique not null,
    owner_id uuid references auth.users(id) on delete cascade,
    custom_domain text unique,
    plan text default 'pro' check (plan in ('starter', 'pro', 'enterprise')),
    is_active boolean default true,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Profiles Table (Owner & Creator Information)
create table if not exists public.profiles (
    id uuid primary key default uuid_generate_v4(),
    tenant_id uuid references public.tenants(id) on delete cascade not null,
    name_ar text not null,
    name_en text not null,
    handle text not null,
    status_text_ar text default 'متاح للمشاريع واستشارات النمو',
    status_text_en text default 'Open to projects & growth advisory',
    status_active boolean default true,
    default_lang text default 'ar' check (default_lang in ('ar', 'en')),
    default_theme text default 'teal' check (default_theme in ('teal', 'cobalt', 'gold', 'violet', 'custom')),
    custom_accent_hex text default '#24B1B1',
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Hero & Identity Table
create table if not exists public.hero_sections (
    id uuid primary key default uuid_generate_v4(),
    tenant_id uuid references public.tenants(id) on delete cascade not null unique,
    headline_ar text not null,
    headline_en text not null,
    headline_accent_ar text not null,
    headline_accent_en text not null,
    lead_ar text not null,
    lead_en text not null,
    visual_type text default 'video' check (visual_type in ('video', 'box_3d', 'image', 'webgl')),
    visual_src text default 'assets/hero-character-workstation-1080p.mp4',
    visual_scale numeric(3, 2) default 1.22,
    cta_primary_label_ar text default 'استعرض الأعمال',
    cta_primary_label_en text default 'See the work',
    cta_primary_link text default '#work',
    cta_secondary_label_ar text default 'بدء محادثة',
    cta_secondary_label_en text default 'Start a conversation',
    cta_secondary_link text default '#contact',
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Projects Table
create table if not exists public.projects (
    id uuid primary key default uuid_generate_v4(),
    tenant_id uuid references public.tenants(id) on delete cascade not null,
    project_slug text not null,
    title_ar text not null,
    title_en text not null,
    description_ar text not null,
    description_en text not null,
    status_badge_ar text not null,
    status_badge_en text not null,
    category text not null,
    year text not null,
    featured boolean default true,
    display_order integer default 0,
    image_url text not null,
    live_url text,
    case_study_url text,
    tags text[] default '{}',
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
    unique (tenant_id, project_slug)
);

-- 5. Services & Capabilities Table
create table if not exists public.services (
    id uuid primary key default uuid_generate_v4(),
    tenant_id uuid references public.tenants(id) on delete cascade not null,
    service_code text not null,
    title_ar text not null,
    title_en text not null,
    description_ar text not null,
    description_en text not null,
    icon text not null,
    chips text[] default '{}',
    display_order integer default 0,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 6. Experience Timeline Table
create table if not exists public.experiences (
    id uuid primary key default uuid_generate_v4(),
    tenant_id uuid references public.tenants(id) on delete cascade not null,
    company_ar text not null,
    company_en text not null,
    role_ar text not null,
    role_en text not null,
    period text not null,
    location_ar text not null,
    location_en text not null,
    bullets_ar text[] default '{}',
    bullets_en text[] default '{}',
    display_order integer default 0,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 7. Strategic Metrics Table
create table if not exists public.metrics (
    id uuid primary key default uuid_generate_v4(),
    tenant_id uuid references public.tenants(id) on delete cascade not null,
    metric_value text not null,
    label_ar text not null,
    label_en text not null,
    sub_ar text,
    sub_en text,
    display_order integer default 0,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 8. Terminal Configuration Table
create table if not exists public.terminal_configs (
    id uuid primary key default uuid_generate_v4(),
    tenant_id uuid references public.tenants(id) on delete cascade not null unique,
    session_label text default 'SESSION // BI_AI_PIPELINE',
    prompt_command text default 'pipeline --connect --source=bigquery',
    lines jsonb default '[]'::jsonb,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 9. Row Level Security (RLS) Setup
alter table public.tenants enable row level security;
alter table public.profiles enable row level security;
alter table public.hero_sections enable row level security;
alter table public.projects enable row level security;
alter table public.services enable row level security;
alter table public.experiences enable row level security;
alter table public.metrics enable row level security;
alter table public.terminal_configs enable row level security;

-- Public can read active tenant data
create policy "Public can view active tenant profiles" on public.profiles
    for select using (true);

create policy "Public can view active projects" on public.projects
    for select using (true);

create policy "Public can view active services" on public.services
    for select using (true);

create policy "Public can view active hero" on public.hero_sections
    for select using (true);

-- Authenticated tenant owners can modify their own data
create policy "Owners manage own tenant" on public.tenants
    for all using (auth.uid() = owner_id);

create policy "Owners manage own profile" on public.profiles
    for all using (tenant_id in (select id from public.tenants where owner_id = auth.uid()));

create policy "Owners manage own projects" on public.projects
    for all using (tenant_id in (select id from public.tenants where owner_id = auth.uid()));
