import React from "react";
import { Canvas } from "@react-three/fiber"

import { NavBar } from "@/components/ui/nav-bar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/ui/footer";
import { BackToTheTop } from "@/components/ui/back-to-the-top";
import { RealtimeViz } from "@/components/ui/realtime-viz";
import { AIWorkflowViz } from "@/components/ui/ai-workflow-vis";
import { PandaAnimated } from "@/components/threed/animated-panda";

// Helper to build URLs that respect Vite's base (good for GitHub Pages)
// const asset = (p: string) => new URL(p.replace(/^\//, ""), import.meta.env.BASE_URL).toString();

function Section({ id, title, subtitle, children, bleed = false }: React.PropsWithChildren<{ id: string; title: string; subtitle?: string; bleed?: boolean }>) {
  return (
    <section id={id} className={"scroll-mt-24 md:scroll-mt-28 " + (bleed ? "w-full" : "") } aria-label={title}>
      <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-2 text-muted-foreground max-w-[70ch]">{subtitle}</p>}
        <Separator className="my-6" />
        {children}
      </div>
    </section>
  );
}

function MediaPlaceholder({ kind = "image", label, height = 320, id }: { kind?: "image" | "video" | "animation" | "threejs"; label?: string; height?: number; id?: string }) {
  const text = label ?? (kind === "threejs" ? "Three.js Canvas" : kind[0].toUpperCase() + kind.slice(1));
  return (
    <div
      id={id}
      className="relative grid place-items-center rounded-xl border bg-muted/40 text-muted-foreground"
      style={{ height }}
    >
      <div className="pointer-events-none text-sm">
        {/* Replace this whole block with your media (img/video/canvas/animation) */}
        {text}
      </div>
    </div>
  );
}

export function HomePage() {
  const mailto = `mailto:davalosedu515@trinity.edu?subject=Collaboration%20with%20RedForest%20Labs&body=Hi%20Prof.%20Davalos%2C%0D%0A%0D%0AI%27m%20reaching%20out%20about%20collaborating%20with%20RedForest%20Labs.%0D%0A%0D%0A[Please%20describe%20your%20project%20or%20interest...]%0D%0A`;

  return (
    <>
      <NavBar />

      {/* Hero */}
      <div className="bg-gradient-to-b from-rose-600 to-red-700 text-white">
        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">RedForest Labs</h1>
          <p className="mt-4 text-lg md:text-xl max-w-[70ch]">
            Transforming the way we learn with innovative HCI tools for education — building human‑centered experiences that help teachers and students, using AI, gamification, and online collaboration.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={mailto}>Collaborate with us</a>
            </Button>
          </div>
        </div>
      </div>

      {/* What we do */}
      <Section
        id="what-we-do"
        title="What we do"
        subtitle="We design, build, and evaluate human-centered systems that improve teaching and learning."
      >
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Copy / CTAs */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Transforming how we learn with real-time, human-centered tools
            </h3>

            <p className="mt-3 text-base text-muted-foreground">
              We create <strong>usable</strong>, <strong>effective</strong>, and <strong>equitable</strong> learning technologies:
              enhance teacher-to-student & student-to-student communication, human-AI collaboration, and classroom-scale web apps.
              web-based deployments meet students and teachers <em>where they are</em>.
            </p>

            <ul className="mt-4 space-y-2 text-sm">
              <li>• Innovative HCI for education (UX for teachers/students)</li>
              <li>• AI-driven feedback, content generation, and adaptive difficulty</li>
              <li>• Gamification and online collaboration mechanics</li>
            </ul>
          </div>

          {/* Animated realtime viz */}
          <div>
            <RealtimeViz />
          </div>
        </div>
      </Section>

      {/* Embodied agents (ThreeJS) */}
      <Section
        id="embodied-agents"
        title="Embodied agents for the classroom"
        subtitle="We prototype embodied agents — e.g., a Three.js red panda — to mediate instruction, coaching, and engagement for teachers and learners."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {/* <MediaPlaceholder kind="threejs" label="Three.js Red Panda placeholder" height={360} id="threejs-panda" /> */}
          <div className="h-80">
            <Canvas shadows camera={{ position: [0, 2, 5], fov: 30}} dpr={[1, 2]} gl={{ preserveDrawingBuffer: true}}>
              <group scale={0.5} position={[0,-0.2,0]} rotation={[0,-Math.PI * 0.2,0]}>
                <PandaAnimated/>
              </group>
              <ambientLight intensity={1} />
            </Canvas>
          </div>
          <div className="prose prose-zinc dark:prose-invert text-muted-foreground max-w-[95vw]">
            <p>
              Embodied agents can <em>explain</em>, <em>demonstrate</em>, and <em>encourage</em> in ways flat interfaces cannot. We pair 3D characters with
              learning‑aligned behaviors and responsible use guidelines so teachers can delegate routine tasks while retaining control.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• In‑class helpers for pacing, prompts, and formative checks</li>
              <li>• Personalized “coaches” for practice and feedback</li>
              <li>• Accessible designs that complement diverse classrooms</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* AI for teacher workflows */}
      <Section
        id="ai-teacher-workflows"
        title="AI to assist teacher workflows"
        subtitle="From content generation to difficulty adjustment, we build tools that save time and improve outcomes."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="prose prose-zinc dark:prose-invert text-muted-foreground max-w-[95vw]">
            <p>
              We integrate LLMs with pedagogy to help teachers craft materials, differentiate instruction, and monitor progress.
              Our goal is to fit into existing workflows — not replace them — with transparency and human oversight.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Curriculum‑aligned item banks and activity generators</li>
              <li>• Adaptive difficulty &amp; hinting calibrated to learner needs</li>
              <li>• Actionable dashboards grounded in learning objectives</li>
            </ul>
          </div>
          <AIWorkflowViz />
        </div>
      </Section>

      {/* Impact & collaboration */}
      {/* <Section
        id="impact"
        title="Scalable web solutions with real‑world impact"
        subtitle="We prototype rapidly, then trial in authentic settings — partnering with teachers and districts to ensure real classroom value."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <MediaPlaceholder kind="animation" label="Impact map / metrics viz placeholder" height={320} />
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p>
              We build browser‑native tools to minimize deployment friction and maximize reach. Our team prioritizes privacy by design, rigorous evaluation, and inclusive design practices.
            </p>
            <ul>
              <li>Field studies and IRB‑guided research in classrooms</li>
              <li>Open‑source implementations for reproducibility</li>
              <li>Co‑design with educators and students</li>
            </ul>
          </div>
        </div>
      </Section> */}

      {/* Optional: add more sections here as your assets are ready */}

      <Footer />
      <BackToTheTop />
    </>
  );
}
