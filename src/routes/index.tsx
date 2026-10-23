import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StudySmart — Your Study Dashboard" },
      { name: "description", content: "Track study hours, subjects, tasks and streaks with StudySmart." },
      { property: "og:title", content: "StudySmart — Your Study Dashboard" },
      { property: "og:description", content: "Track study hours, subjects, tasks and streaks." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Dashboard,
});

const week = [
  { d: "Mon", h: 2.5 }, { d: "Tue", h: 3.2 }, { d: "Wed", h: 1.8 },
  { d: "Thu", h: 4.1 }, { d: "Fri", h: 3.6 }, { d: "Sat", h: 5 }, { d: "Sun", h: 2.2 },
];
const subjects = [
  { name: "Mathematics", pct: 78 }, { name: "Physics", pct: 62 },
  { name: "Chemistry", pct: 45 }, { name: "History", pct: 88 },
];
const tasks = [
  { t: "Calculus problem set 4", due: "Today", done: false },
  { t: "Read Physics ch. 7", due: "Tomorrow", done: false },
  { t: "Chemistry lab report", due: "Oct 27", done: true },
  { t: "History essay outline", due: "Oct 29", done: false },
];

function Stat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-2xl border bg-card p-5">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-2 font-display text-3xl font-semibold">{value}</p>
      <p className="mt-1 text-xs text-primary">{hint}</p>
    </div>
  );
}

function Dashboard() {
  const max = Math.max(...week.map((w) => w.h));
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-display text-xl font-bold">Study<span className="text-primary">Smart</span></span>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">AC</div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl space-y-6 px-6 py-8">
        <div>
          <h1 className="font-display text-3xl font-semibold">Good evening, Adrish</h1>
          <p className="text-muted-foreground">You're 1.5 hours away from this week's goal.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Hours this week" value="22.4h" hint="+12% vs last week" />
          <Stat label="Study streak" value="9 days" hint="Personal best: 14" />
          <Stat label="Tasks done" value="18/24" hint="6 remaining" />
          <Stat label="Avg. quiz score" value="84%" hint="+5 pts" />
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <section className="rounded-2xl border bg-card p-6 lg:col-span-2">
            <h2 className="font-display text-lg font-semibold">Weekly study hours</h2>
            <div className="mt-6 flex h-48 items-end gap-3">
              {week.map((w) => (
                <div key={w.d} className="flex flex-1 flex-col items-center gap-2">
                  <span className="text-xs text-muted-foreground">{w.h}h</span>
                  <div className="w-full rounded-t-lg bg-primary" style={{ height: `${(w.h / max) * 140}px` }} />
                  <span className="text-xs">{w.d}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="rounded-2xl border bg-card p-6">
            <h2 className="font-display text-lg font-semibold">Subject progress</h2>
            <div className="mt-5 space-y-4">
              {subjects.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm"><span>{s.name}</span><span className="text-muted-foreground">{s.pct}%</span></div>
                  <div className="mt-1.5 h-2 rounded-full bg-muted"><div className="h-2 rounded-full bg-accent" style={{ width: `${s.pct}%` }} /></div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <section className="rounded-2xl border bg-card p-6">
          <h2 className="font-display text-lg font-semibold">Upcoming tasks</h2>
          <ul className="mt-4 divide-y">
            {tasks.map((t) => (
              <li key={t.t} className="flex items-center justify-between py-3">
                <span className={t.done ? "text-muted-foreground line-through" : ""}>{t.t}</span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">{t.due}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
