import { ArrowLeft, ExternalLink, ArrowUpRight, User, Wrench, Calendar, LayoutGrid, Users, DollarSign, Database, MoveRight } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "TransactOS — Unified B2B Operations Dashboard | Dev Shrimali",
  description: "A B2B SaaS dashboard unifying user identity, inventory, and transaction management for ops, admin, and finance teams.",
  openGraph: {
    images: [{ url: "/transact-os/cover.png" }],
  },
}

export default function TransactOSPage() {
  return (
    <main className="pt-24 pb-24 bg-background min-h-screen">
      <article className="max-w-screen-2xl mx-auto">
        
        {/* SECTION 0 — Back Link + Breadcrumb */}
        <div className="px-6 md:px-12 lg:px-24 xl:px-40 mb-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium tracking-wide">Back to Projects</span>
          </Link>

          {/* SECTION 0.5 — Hero */}
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-[family-name:var(--font-syne)] font-bold mb-6 leading-tight">
              TransactOS — Unified B2B Operations Dashboard
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              A B2B SaaS dashboard unifying user identity, inventory, and transaction management — designed for ops managers, finance teams, and admins who needed one system instead of five.
            </p>

            {/* Meta Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 mt-8 border-y border-border/50">
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <User className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Role</span>
                </div>
                <p className="font-semibold text-sm">End-to-end UX — IA, User Flows, UI Design, Front-end</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Timeline</span>
                </div>
                <p className="font-semibold">2025</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Wrench className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Tools</span>
                </div>
                <p className="font-semibold text-sm">Figma · React · Vercel · FigJam · HTML/CSS</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <LayoutGrid className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Type</span>
                </div>
                <p className="font-semibold text-sm">B2B · SaaS · Dashboard · Enterprise</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://transact-os.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground font-semibold rounded-full hover:bg-white hover:text-black transition-all text-sm"
              >
                <ExternalLink className="w-4 h-4" /> View Live Product
              </a>
              <a
                href="https://figma-design-dev.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-secondary/80 transition-all text-sm border border-border"
              >
                <ExternalLink className="w-4 h-4" /> View IA + Flows
              </a>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="px-6 md:px-12 lg:px-24 xl:px-40 mb-24">
          <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl bg-card border border-border/50">
            <img
              src="/532shots_so.png"
              alt="TransactOS dashboard on a laptop with soft purple background"
              className="w-full h-auto object-cover"
            />

          </div>
        </div>

        {/* Start of Case Study Sections */}
        <div className="px-6 md:px-12 lg:px-24 xl:px-40 mb-24">
          <div className="max-w-4xl mx-auto space-y-24">
            
            {/* SECTION 01 — Problem & Context */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">01</span>
                <div className="h-px bg-accent/20 flex-grow" />
              </div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-syne)] font-bold">Problem & Context</h2>
              <div className="text-lg leading-relaxed text-muted-foreground/90 font-light space-y-4">
                <p>Operations teams, finance managers, and admins don't share the same tools — or the same language. Inventory lives in one system. Transactions in another. User access somewhere else entirely. Every cross-functional decision meant manual exports, Slack threads, and reconciliation errors.</p>
                <p>TransactOS was designed to eliminate that friction. Not by adding another point tool, but by building an OS-level dashboard where identity, inventory, and transactions exist in the same context — linked, live, and role-aware.</p>
                <p>The core problem: no single place existed where an admin could audit access, an ops manager could trace a stock movement back to a transaction, and a finance team member could see a live reconciliation view — simultaneously.</p>
              </div>
            </section>

            {/* SECTION 02 — Role & Responsibilities */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">02</span>
                <div className="h-px bg-accent/20 flex-grow" />
              </div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-syne)] font-bold">Role & Responsibilities</h2>
              <div className="text-lg leading-relaxed text-muted-foreground/90 font-light space-y-6">
                <p>As the sole designer on this project, I led the full design process — from information architecture and user flows through to high-fidelity UI and a working React front-end prototype.</p>
                
                {/* Responsibility tags */}
                <div className="flex flex-wrap gap-3">
                  {["Information Architecture", "User Flow Design", "UI Design (Hi-Fi)", "Design System", "Component Library", "Front-end Implementation", "Developer Handoff"].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-secondary/50 border border-border rounded-full text-sm font-medium text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 03 — Users & Personas */}
            <section className="space-y-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">03</span>
                <div className="h-px bg-accent/20 flex-grow" />
              </div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-syne)] font-bold">Understanding the Users</h2>
              <p className="text-lg leading-relaxed text-muted-foreground/90 font-light">
                TransactOS serves three distinct user types with overlapping data needs but different priorities. Designing a single dashboard for all three meant understanding where their workflows collide — and where they diverge.
              </p>

              {/* Persona Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {/* Admin */}
                <div className="bg-card border border-border/50 p-6 rounded-2xl flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-2">
                    <User className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-syne)]">Admin</h3>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1 block">Goal</span>
                    <p className="text-sm">Manage user access and permissions across the system</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-red-400 mb-1 block">Pain Point</span>
                    <p className="text-sm">No audit trail for who changed what, or when</p>
                  </div>
                </div>

                {/* Ops Manager */}
                <div className="bg-card border border-border/50 p-6 rounded-2xl flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-2">
                    <Database className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-syne)]">Ops Manager</h3>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1 block">Goal</span>
                    <p className="text-sm">Track real-time inventory, fulfillment, and stock velocity</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-red-400 mb-1 block">Pain Point</span>
                    <p className="text-sm">Inventory data had no link to transaction events</p>
                  </div>
                </div>

                {/* Finance Team */}
                <div className="bg-card border border-border/50 p-6 rounded-2xl flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-2">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-syne)]">Finance Team</h3>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1 block">Goal</span>
                    <p className="text-sm">Reconcile transactions, generate invoices, export reports</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-red-400 mb-1 block">Pain Point</span>
                    <p className="text-sm">Live data required manual exports from 3 different tools</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 04 — Research & Insights */}
            <section className="space-y-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">04</span>
                <div className="h-px bg-accent/20 flex-grow" />
              </div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-syne)] font-bold">Research & Insights</h2>
              <p className="text-lg leading-relaxed text-muted-foreground/90 font-light">
                To understand the problem space, I conducted competitive analysis across existing B2B operations tools — Zoho Inventory, SAP Business One, and Odoo — focusing on three failure modes they all share.
              </p>

              {/* Insight Callouts */}
              <div className="space-y-6 pt-4">
                <div className="border-l-4 border-accent bg-secondary/20 p-6 rounded-r-xl">
                  <h4 className="text-lg font-bold mb-2">Insight 01 — Complexity without clarity</h4>
                  <p className="text-muted-foreground">Enterprise tools overwhelm users with feature breadth. Navigation is module-heavy and assumes training. First-time task completion rates are low.</p>
                </div>
                <div className="border-l-4 border-accent bg-secondary/20 p-6 rounded-r-xl">
                  <h4 className="text-lg font-bold mb-2">Insight 02 — Identity is an afterthought</h4>
                  <p className="text-muted-foreground">Role-based access in most systems is buried in settings, not built into the experience. Users can access data they shouldn't and miss data they need.</p>
                </div>
                <div className="border-l-4 border-accent bg-secondary/20 p-6 rounded-r-xl">
                  <h4 className="text-lg font-bold mb-2">Insight 03 — No operational heartbeat</h4>
                  <p className="text-muted-foreground">Dashboards show historical data. None of the tools reviewed had a real-time status layer — no live event stream, no system health indicator, no velocity analysis in the primary view.</p>
                </div>
              </div>
            </section>

            {/* SECTION 05 — Information Architecture */}
            <section className="space-y-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">05</span>
                <div className="h-px bg-accent/20 flex-grow" />
              </div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-syne)] font-bold">Information Architecture</h2>
              <p className="text-lg leading-relaxed text-muted-foreground/90 font-light">
                The IA challenge was not about organising features — it was about organising for three user types who share the same navigation. The decision to group by function (not by persona) was deliberate: one nav, role-filtered access, no separate portals.
              </p>

              {/* Module Groups */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-card border border-border/50 rounded-2xl pt-8">
                <div>
                  <h4 className="font-bold text-accent mb-4 border-b border-border/50 pb-2">Group 1: Application</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Department & Category</li>
                    <li>Item List</li>
                    <li>Discount</li>
                    <li>Vendors</li>
                    <li>Warehouse Model</li>
                    <li>Inward List</li>
                    <li>Outward List</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-4 border-b border-border/50 pb-2">Group 2: Sales</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Point of Sale (POS)</li>
                    <li>View Stock</li>
                    <li>Print Labels</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-4 border-b border-border/50 pb-2">Group 3: Administration</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Company Master</li>
                    <li>Tax Configuration</li>
                    <li>User Management</li>
                  </ul>
                </div>
              </div>

              <a
                href="https://figma-design-dev.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-medium mt-4"
              >
                Explore full IA diagram <MoveRight className="w-4 h-4" />
              </a>
            </section>

            {/* SECTION 06 — User Flows */}
            <section className="space-y-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">06</span>
                <div className="h-px bg-accent/20 flex-grow" />
              </div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-syne)] font-bold">User Flows</h2>
              <p className="text-lg leading-relaxed text-muted-foreground/90 font-light">
                Three primary flows were mapped — one per persona — to validate that the shared navigation structure would support radically different task types without confusion or dead ends.
              </p>

              {/* Flow Summaries */}
              <div className="space-y-4 pt-4">
                <div className="p-5 bg-card border border-border/50 rounded-xl flex flex-col md:flex-row md:items-center gap-4">
                  <span className="min-w-[140px] font-bold text-accent">Flow 01 — Admin</span>
                  <div className="flex-grow text-muted-foreground text-sm">
                    Onboard a new user → assign role → configure module permissions → confirm access audit trail
                  </div>
                </div>
                <div className="p-5 bg-card border border-border/50 rounded-xl flex flex-col md:flex-row md:items-center gap-4">
                  <span className="min-w-[140px] font-bold text-accent">Flow 02 — Ops</span>
                  <div className="flex-grow text-muted-foreground text-sm">
                    View dashboard KPIs → check critical stock alerts → drill into inventory → trace to transaction event
                  </div>
                </div>
                <div className="p-5 bg-card border border-border/50 rounded-xl flex flex-col md:flex-row md:items-center gap-4">
                  <span className="min-w-[140px] font-bold text-accent">Flow 03 — Finance</span>
                  <div className="flex-grow text-muted-foreground text-sm">
                    Filter transaction history → reconcile against inventory outward list → generate invoice → export report
                  </div>
                </div>
              </div>

              <a
                href="https://figma-design-dev.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-medium"
              >
                View full user flows <MoveRight className="w-4 h-4" />
              </a>
            </section>

            {/* SECTION 07 — Design Process */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">07</span>
                <div className="h-px bg-accent/20 flex-grow" />
              </div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-syne)] font-bold">Design Iterations</h2>
              <div className="text-lg leading-relaxed text-muted-foreground/90 font-light space-y-4">
                <p>The design process moved through three fidelity stages. Each stage surfaced a different class of problem.</p>
                <p>Lo-fidelity focused on navigation decisions — sidebar vs. top nav, module switching UX, and whether the dashboard should default to an executive overview or a task-based entry point. The sidebar won: it keeps module context persistent while the main canvas changes.</p>
                <p>Mid-fidelity surfaced density problems. A B2B ops dashboard has a lot of data. The challenge was establishing a hierarchy that lets users scan at a glance — KPI cards first, velocity analysis second, quick-access shortcuts third — without making the screen feel like a report.</p>
                <p>Hi-fidelity locked in the visual language: a near-white surface, navy-dominant data visualisation, blue as the primary interactive colour, and semantic red/green used only for delta indicators — never decoratively.</p>
              </div>
            </section>

            {/* SECTION 08 — Design System */}
            <section className="space-y-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">08</span>
                <div className="h-px bg-accent/20 flex-grow" />
              </div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-syne)] font-bold">Design System</h2>
              <p className="text-lg leading-relaxed text-muted-foreground/90 font-light">
                A lightweight design system was established in Figma before any screen design — ensuring that components built for the dashboard would hold up as the product scaled to new modules.
              </p>

              {/* Design System Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="bg-card border border-border/50 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold mb-3 font-[family-name:var(--font-syne)]">Color Tokens</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Semantic color roles for status states — operational, warning, critical, neutral — used consistently across KPI cards, badges, and alert states.</p>
                </div>
                <div className="bg-card border border-border/50 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold mb-3 font-[family-name:var(--font-syne)]">Typography Scale</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Two-weight system: 700 for data values, 400 for labels and metadata. Tabular numbers enabled for all financial figures to prevent column shift.</p>
                </div>
                <div className="bg-card border border-border/50 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold mb-3 font-[family-name:var(--font-syne)]">Component Library</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Data tables, stat cards, role badges, modal flows, sidebar nav, and the Command Console shortcut grid — all built as auto-layout Figma components.</p>
                </div>
                <div className="bg-card border border-border/50 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold mb-3 font-[family-name:var(--font-syne)]">Spacing & Grid</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">8px base grid. 24px inner padding on all cards. Consistent 16px gap between grid elements. Responsive breakpoints at 1280px and 1024px.</p>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* SECTION 09 — Key Screens (Full Width Container) */}
        <div className="px-6 md:px-12 lg:px-24 xl:px-40 mb-24">
          <div className="max-w-screen-2xl mx-auto space-y-16">
            <div className="flex flex-col items-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4">09</span>
              <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-syne)] font-bold text-center">Final Solution</h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mt-6">
                Five screens tell the full product story — from the executive overview that greets every user on login, to the role-specific modules that power daily operations.
              </p>
            </div>

            {/* Screen 01 */}
            <div className="space-y-6">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold font-[family-name:var(--font-syne)]">Screen 01 — Command Center (Dashboard)</h3>
                <p className="text-muted-foreground mt-2">Real-time operational overview. Four KPI cards, stock velocity chart with time-toggle, and a Command Console for frequent module shortcuts. Live Event Stream in the bottom right.</p>
              </div>
              <div className="w-full relative rounded-2xl overflow-hidden bg-card border border-border/50">
                <img src="/532shots_so.png" alt="TransactOS Command Center dashboard" className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Screen 02 */}
            <div className="space-y-6 pt-12">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold font-[family-name:var(--font-syne)]">Screen 02 — UIMS — Inventory Module</h3>
                <p className="text-muted-foreground mt-2">Universal Inventory Management — stock levels, SKU browser, inward/outward tracking, linked to transaction events.</p>
              </div>
              <div className="w-full relative rounded-2xl overflow-hidden bg-card border border-border/50">
                <img src="/uims-default.png" alt="TransactOS UIMS Inventory Module" className="w-full h-auto object-cover" />
              </div>
            </div>


          </div>
        </div>

        {/* SECTION 10 — Final Impact */}
        <div className="px-6 md:px-12 lg:px-24 xl:px-40 mb-24">
          <div className="max-w-4xl mx-auto space-y-10">
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">10</span>
                <div className="h-px bg-accent/20 flex-grow" />
              </div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-syne)] font-bold">Impact & Outcomes</h2>
              
              <div className="text-lg leading-relaxed text-muted-foreground/90 font-light space-y-4 mb-8">
                <p>TransactOS consolidates what used to require three or more disconnected tools into a single, role-aware dashboard — giving admins full visibility, ops managers real-time inventory control, and finance teams a live transaction audit trail.</p>
                <p>The working front-end prototype validates the design at full fidelity — not just as screens, but as an interactive system.</p>
              </div>

              {/* Outcome Tags */}
              <div className="grid md:grid-cols-2 gap-4 pt-4 mb-8">
                {["Unified identity layer", "Zero-friction transaction flow", "Scalable module architecture", "Role-based access UX"].map(outcome => (
                  <div key={outcome} className="bg-secondary/30 p-5 rounded-xl border border-border/50 flex flex-col justify-center">
                    <span className="text-2xl font-bold text-accent mb-1">{outcome.split(" ")[0]}</span>
                    <span className="text-sm uppercase tracking-wide opacity-80">{outcome.substring(outcome.indexOf(" ") + 1)}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-border/30">
                <a
                  href="https://transact-os.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground font-semibold rounded-full hover:bg-white hover:text-black transition-all text-sm"
                >
                  <ExternalLink className="w-4 h-4" /> View Live Product
                </a>
                <a
                  href="https://figma-design-dev.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-secondary/80 transition-all text-sm border border-border"
                >
                  <ExternalLink className="w-4 h-4" /> View IA + Flows
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* Footer Next Projects */}
        <div className="px-6 md:px-12 lg:px-24 xl:px-40 py-24 border-t border-border/40">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-syne)] font-bold">Next Projects</h2>
            <Link href="/work" className="hidden md:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors">
              View All <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Fintech App */}
            <Link href="/work/fintech-app-ux" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-card border border-border/50">
                <img src="/fintech-ux/cover.jpg" alt="Fintech Mobile App" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  View Case
                </div>
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-syne)] mb-2 group-hover:text-accent transition-colors">
                Fintech Mobile App — Payments & Wallet Experience
              </h3>
            </Link>

            {/* Crypto App */}
            <Link href="/work/crypto-coin-app" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-card border border-border/50">
                <img src="/crypto-app/cover.png" alt="Crypto Trading App" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  View Case
                </div>
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-syne)] mb-2 group-hover:text-accent transition-colors">
                Crypto Trading App — Buy, Sell & Portfolio Management
              </h3>
            </Link>

            {/* Furniture App */}
            <Link href="/work/furniture-decor-app" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-card border border-border/50">
                <img src="/furniture-cover-new.png" alt="Furniture & Home Décor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  View Case
                </div>
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-syne)] mb-2 group-hover:text-accent transition-colors">
                E-commerce Platform — Furniture & Home Décor Shopping Experience
              </h3>
            </Link>
          </div>
          <div className="mt-12 md:hidden text-center">
            <Link href="/work" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors">
              View All Projects <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </article>
    </main>
  )
}
