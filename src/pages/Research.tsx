import { NavBar } from "../components/ui/nav-bar";
import { Separator } from "../components/ui/separator";
import { ProjectCard } from "../components/ui/project-card";

const asset = (p: string) => new URL(p.replace(/^\//, ""), import.meta.env.BASE_URL).toString();

// ---- Customize these -------------------------------------------------------
const PROJECTS = [
  {
    title: "WebEyeTrack: Head‑Pose‑Aware Gaze in the Browser",
    imageSrc: "projects/webeyetrack-hero.jpg", // docs/public/projects/
    description:
      "Deep‑learning gaze estimation running fully in the browser with explicit head‑pose modeling and few‑shot personalization.",
    tags: ["Gaze Estimation", "On‑device ML", "WebAI"],
    href: "https://redforestai.github.io/WebEyeTrack/",
  },
  // {
  //   title: "Human‑AI Tutoring with LLMs",
  //   imageSrc: "projects/llm-tutoring.jpg",
  //   description:
  //     "Conversational tutoring agents that adapt to learners, grounded in learning sciences and evaluated for equity, transparency, and outcomes.",
  //   tags: ["LLMs", "Learning Sciences"],
  // },
  // {
  //   title: "Privacy‑Preserving Sensing for Learning Analytics",
  //   imageSrc: "projects/priv-sensing.jpg",
  //   description:
  //     "Browser‑native signals (gaze, keystrokes, interactions) for real‑time analytics without exporting raw data off‑device.",
  //   tags: ["HCI", "Analytics", "Privacy"],
  // },
  // {
  //   title: "Robust Calibration for Webcam Eye Tracking",
  //   imageSrc: "projects/calibration.jpg",
  //   description:
  //     "Few‑shot calibration strategies, active target selection, and robustness to head motion for commodity webcams.",
  //   tags: ["Gaze", "Calibration"],
  // },
] as const;

const RECRUITING = {
  university: "Trinity University",
  majors: ["Computer Science", "Computer Engineering", "Psychology", "Education"],
  email: "davalosedu515@trinity.edu",
};
// ----------------------------------------------------------------------------

export function ResearchPage() {
  const mailto = `mailto:${RECRUITING.email}?subject=Undergraduate/Graduate%20Research%20Interest&body=Hi%20Prof.%20Davalos%2C%0D%0A%0D%0AMy%20research%20interests%20are%3A%20...%0D%0A%0D%0AI've%20attached%20my%20CV.%0D%0A%0D%0AThanks!`;

  return (
    <>
      <NavBar />
      <div className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main: Projects */}
          <div className="lg:col-span-8">
            <header className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">On-Going Projects</h1>
              <p className="mt-2 text-muted-foreground max-w-[70ch]">
                We explore web‑native sensing and human‑AI systems for learning. Here are a few active projects and directions.
              </p>
            </header>

            <div className="grid gap-6 sm:grid-cols-2">
              {PROJECTS.map((p) => (
                <ProjectCard
                  key={p.title}
                  title={p.title}
                  imageSrc={p.imageSrc}
                  imageAlt={p.title}
                  description={p.description}
                  // tags={p.tags as string[]}
                  href={p.href}
                  aspect="16/9"
                />
              ))}
            </div>

          </div>

          {/* Sidebar: Recruiting */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-8">
            <section className="rounded-lg border p-4">
              <h2 className="text-lg font-semibold tracking-tight">Joining the Lab</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                I’m currently accepting students in {RECRUITING.university} from the following majors:
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
                {RECRUITING.majors.map((m) => (
                  <li key={m} className="rounded border bg-muted px-2 py-1 text-muted-foreground">
                    {m}
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-sm">
                <p className="font-medium">How to reach out</p>
                <ol className="mt-1 list-decimal pl-5 space-y-1">
                  <li>Email me with a short paragraph about what you want to research.</li>
                  <li>Attach your current CV.</li>
                </ol>
                <a href={mailto} className="mt-3 inline-flex rounded-md border px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">
                  Email Prof. Davalos
                </a>
              </div>
            </section>

            <section className="rounded-lg border p-4">
              <h2 className="text-lg font-semibold tracking-tight">Prospective Collaborators</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                I collaborate across CS, Psychology, Education, and Learning Sciences. If your interests intersect with any of the directions above, feel free to get in touch.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </>
  );
}
