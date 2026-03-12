# Notes App

Simple notes management app built with **Next.js (App Router)** and **Supabase**, featuring authentication, real-time notes, and server actions.

---

## Features

- User authentication via Supabase
- Create, update, delete notes
- Per-user notes (RLS enforced)
- Note summarization placeholder
- Responsive TailwindCSS UI
- Real-time UI updates with server actions
- Loading skeletons for pages
- Confirm before deletion

---

## Tech Stack

- **Next.js 14+** (App Router, Server Actions)
- **Supabase** (Auth + Postgres + RLS)
- **TailwindCSS** for styling
- React Server Components
- Server Actions for note CRUD

---

## Project Structure
```
app/
├─ dashboard/
│ ├─ page.tsx # Notes list + create form
│ ├─ loading.tsx # Dashboard loading skeleton
├─ notes/
│ ├─ [id]/
│ │ ├─ page.tsx # Note detail & edit page
│ │ ├─ loading.tsx # Note loading skeleton
├─ _components/ # Shared UI components
│ ├─ submit-button.tsx
│ ├─ confirm-button.tsx
│ ├─ log-out-button.tsx
features/
├─ add-new-note/ # Server actions for creating notes
utils/
├─ supabase/
│ ├─ server.ts # Supabase server client helper
├─ redirectIfNotAuthenticated.ts
```


---

## Supabase Setup

1. Create a project on [Supabase](https://supabase.com/).
2. Enable **Email + Password Auth**.
3. Create `notes` table:

```sql
create table notes (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id),
  title text not null,
  content text,
  summary text,
  summarized_at timestamp,
  created_at timestamp default now(),
  updated_at timestamp default now()
);
```
4. Enable Row Level Security (RLS):
```sql
alter table notes enable row level security;

create policy "Users can view their own notes" on notes
  for select using (auth.uid() = user_id);

create policy "Users can insert their own notes" on notes
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own notes" on notes
  for update using (auth.uid() = user_id);

create policy "Users can delete their own notes" on notes
  for delete using (auth.uid() = user_id);
```