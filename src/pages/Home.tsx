import { NavBar } from "@/components/ui/nav-bar";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { PublicationCard, type PublicationCardProps } from "../components/ui/publication-card";

// Helper to build URLs that respect Vite's base (works on GitHub Pages)
// const asset = (p: string) => new URL(p.replace(/^\//, ""), import.meta.env.BASE_URL).toString();

// ---- Data you can customize -------------------------------------------------
const PROFILE = {
  name: "Eduardo Davalos",
  title: "Assistant Professor – AIED, HCI, LLMs",
  headshot: "eduardo_davalos.webp", // place under docs/public/profiles/
  bio: [
    "I'm an Assistant Professor at Trinity University, working at the intersection of AI in Education (AIED), Human–Computer Interaction (HCI), and Large Language Models (LLMs). My research develops privacy‑preserving, browser‑native sensing and modeling techniques that translate into scalable learning technologies.",
    "My PhD is in Computer Science from Vanderbilt University, where I developed WebEyeTrack, a head‑pose‑aware, deep‑learning gaze estimation framework for the browser, and collaborated widely across cognitive science, learning analytics, and computer vision.",
  ],
  interests: [
    "LLMs in Education",
    "Human‑AI Interaction",
    "Gaze Estimation",
    "On‑device ML",
    "Learning Analytics",
  ],
  cvPdf: "/CVs/Eduardo-Davalos-CV_Aug29_2025.pdf", // place under docs/public/
};

const PUBLICATIONS: PublicationCardProps[] = [
  {
    title:
      "WEBEYETRACK: Scalable Eye‑Tracking for the Browser via On‑Device Few‑Shot Personalization",
    authors:
      "E. Davalos, Y. Zhang, N. Srivastava, Y. Thatigotla, J. A. Salas, S. McFadden, S.-J. Cho, A. Goodwin, A. TS, G. Biswas",
    venue: "arXiv",
    year: 2025,
    links: [
      { label: "Website", href: "https://redforestai.github.io/WebEyeTrack/" },
      { label: "Paper", href: "https://arxiv.org/abs/2508.19544" },
      { label: "Code", href: "https://github.com/RedForestAi/WebEyeTrack" },
    ],
    imageSrc: "/paper_teasers/WebEyeTrack_AAAI2026.png",
    imageAlt: "WebEyeTrack Architecture Figure"
  },
  {
    title:
      "LLMs as Educational Analysts: Transforming Multimodal Data Traces into Actionable Reading Assessment Reports",
    authors:
      "E. Davalos, Y. Zhang, N. Srivastava, J. A. Salas, S. McFadden, S.-J. Cho, G. Biswas, A. Goodwin",
    venue: "AIED",
    year: 2025,
    links: [
      { label: "Website", href: "https://link.springer.com/chapter/10.1007/978-3-031-98417-4_14" },
      { label: "Paper", href: "https://arxiv.org/pdf/2503.02099" },
      { label: "Code", href: "https://github.com/edavalosanaya/LLMsAsEducationalAnalysts" },
    ],
    imageSrc: "/paper_teasers/LLMsAsBehavioralAnalysts_AIED2025.png",
    imageAlt: "LLM Multi-agent Flow Diagram"
  },
  {
    title:
      "Eye movements as predictors of student experiences during nursing simulation learning events",
    authors:
      "M. Lee, C. Vatral, C. Cohn, E. Davalos, M. Jessee, G. Biswas, D. Levin",
    venue: "CRPI",
    year: 2025,
    links: [
      { label: "Website", href: "https://link.springer.com/article/10.1186/s41235-025-00640-7" },
    ],
    imageSrc: "/paper_teasers/eye_cognitive_2025.png",
    imageAlt: "Egocentric view of nursing simulation with gaze overlay"
  },
  {
    title:
      "Beyond Instructed Tasks: Recognizing In-the-Wild Reading Behaviors in the Classroom Using Eye Tracking",
    authors:
      "E. Davalos, J.A. Salas, Y. Zhang, N. Srivastava, Y. Thatigotla, A. Gonzales, S. McFadden, S.-J. Cho, G. Biswas, A. Goodwin",
    venue: "ArXiv",
    year: 2025,
    links: [
      { label: "Paper", href: "https://arxiv.org/pdf/2501.18468" },
    ],
    imageSrc: "/paper_teasers/BeyondInstructedTasks_ArXiv2025.png",
    imageAlt: "Behavior segmented gaze data in reading assessments"
  },
  {
    title:
      "Designing an AI-Enhanced Timeline for Monitoring Multimodal Interactions in Embodied Learning Environments",
    authors:
      "J. Fonteles, N. Srivastava, E. Davalos, A. TS, G. Biswas",
    venue: "ICCE",
    year:2024,
    links: [
      { label: "Website", href: "https://library.apsce.net/index.php/ICCE/article/view/4907" },
      { label: "Paper", href: "/papers/ICCE2024-Workshop Paper_ Embodied Learning.pdf" },
    ],
    imageSrc: "/paper_teasers/Designing_ICCE2024.png",
    imageAlt: "MMLA in Embodied Learning Environments"
  },
  {
    title:
      "GazeViz: A web-based approach for visualizing learner gaze patterns in online educational environment",
    authors:
      "E. Davalos, N. Srivastava, Y. Zhang, A. Goodwin, G. Biswas",
    venue: "ICCE",
    year:2024,
    links: [
      { label: "Website", href: "https://library.apsce.net/index.php/ICCE/article/view/4974" },
      { label: "Paper", href: "https://library.apsce.net/index.php/ICCE/article/view/4974/4903" },
      { label: "Code", href: "https://github.com/RedForestAI/ETProWeb" },
    ],
    imageSrc: "/paper_teasers/GazeViz_2024.png",
    imageAlt: "Gaze-based Dashboard Visualization"
  },
  {
    title:
      "3D Gaze Tracking for Studying Collaborative Interactions in Mixed-Reality Environments",
    authors:
      "E. Davalos, Y. Zhang, A. TS, J. Fonteles, U. Timalsina, G. Biswas",
    venue: "ICMI Companion",
    year:2024,
    links: [
      { label: "Website", href: "https://dl.acm.org/doi/abs/10.1145/3686215.3688380" },
      { label: "Paper", href: "https://dl.acm.org/doi/pdf/10.1145/3686215.3688380" },
      { label: "Code", href: "https://github.com/edavalosanaya/3DGazeTracking_ICMIW2024" },
    ],
    imageSrc: "/paper_teasers/3DGaze_ICMI2024.png",
    imageAlt: "3D Gaze Tracking using Depth Reconstruction and 3D Gaze Estimation"
  },
  {
    title:
      "Multimodal methods for analyzing learning and training environments: A systematic literature review",
    authors:
      "C. Cohn, E. Davalos, C. Vatral, J. Fonteles, H. Wang, M. Ma, G. Biswas",
    venue: "ArXiv",
    year:2024,
    links: [
      { label: "Website", href: "https://oele-isis-vanderbilt.github.io/MMLTE_SLR/" },
      { label: "Paper", href: "https://arxiv.org/abs/2408.14491" },
    ],
    imageSrc: "/paper_teasers/MMLTE_2024.png",
    imageAlt: "MMLA Framework Diagram"
  },
  {
    title:
      "A first step in using machine learning methods to enhance interaction analysis for embodied learning environments",
    authors:
      "J. Fonteles, E. Davalos, A. TS, Y. Zhang, M. Zhou, E. Ayalon, A. Lane, S. Steinberg, G. Anton, J. Danish, N. Enyedy, G. Biswas",
    venue: "AIED",
    year:2024,
    links: [
      { label: "Website", href: "https://link.springer.com/chapter/10.1007/978-3-031-64299-9_1" },
      { label: "Paper", href: "https://arxiv.org/pdf/2405.06203" },
    ],
    imageSrc: "/paper_teasers/FirstSteps_AIED2024.png",
    imageAlt: "MMLA Timeline Visualization"
  },
  {
    title:
      "Chimerapy: a scientific distributed streaming framework for real-time multimodal data retrieval and processing",
    authors:
      "E. Davalos, U. Timalsina, Y. Zhang, J. Wu, J. Fonteles, G. Biswas",
    venue: "IEEE BigData",
    year:2023,
    links: [
      { label: "Website", href: "https://ieeexplore.ieee.org/abstract/document/10386382" },
      { label: "Paper", href: "https://www.researchgate.net/profile/Eduardo-Davalos-Anaya/publication/377601125_ChimeraPy_A_Scientific_Distributed_Streaming_Framework_for_Real-time_Multimodal_Data_Retrieval_and_Processing/links/666e19daa54c5f0b94662fc0/ChimeraPy-A-Scientific-Distributed-Streaming-Framework-for-Real-time-Multimodal-Data-Retrieval-and-Processing.pdf" },
      { label: "Code", href: "https://github.com/ChimeraPy" },
    ],
    imageSrc: "/paper_teasers/ChimeraPy_IEEEBigData2023.png",
    imageAlt: "Block diagram depicting ChimeraPy architecture"
  },
  {
    title:
      "Prediction of Students’ Self-confidence Using Multimodal Features in an Experiential Nurse Training Environment",
    authors:
      "C. Vatral, M. Lee, C. Cohn, E. Davalos, D. Levin, G. Biswas",
    venue: "AIED",
    year:2023,
    links: [
      { label: "Website", href: "https://link.springer.com/chapter/10.1007/978-3-031-36336-8_41" },
      { label: "Paper", href: "https://www.researchgate.net/profile/Caleb-Vatral/publication/372015876_Prediction_of_Students%27_Self-confidence_Using_Multimodal_Features_in_an_Experiential_Nurse_Training_Environment/links/64c96492862f8d299989172d/Prediction-of-Students-Self-confidence-Using-Multimodal-Features-in-an-Experiential-Nurse-Training-Environment.pdf" },
    ],
    imageSrc: "/paper_teasers/Prediction_AIED2023.png",
    imageAlt: "Feature Set used in Analysis"
  },
  {
    title:
      "Identifying gaze behavior evolution via temporal fully-weighted scanpath graphs",
    authors:
      "E. Davalos, C. Vatral, C. Cohn, J. Fonteles, G. Biswas, N. Mohammed, M. Lee, D. Levin",
    venue: "LAK",
    year:2023,
    links: [
      { label: "Website", href: "https://dl.acm.org/doi/abs/10.1145/3576050.3576117" },
      { label: "Paper", href: "/papers/LAK2023__Identifying_Gaze_Behavior_Evolution.pdf" },
    ],
    imageSrc: "/paper_teasers/IdentifyGaze_LAK2023.gif",
    imageAlt: "Feature Set used in Analysis"
  },
  {
    title:
      "Using the DiCoT framework for integrated multimodal analysis in mixed-reality training environments",
    authors:
      "C. Vatral, G. Biswas, C. Cohn, E. Davalos, N. Mohammed",
    venue: "Fontiers of AI",
    year:2022,
    links: [
      { label: "Website", href: "https://dl.acm.org/doi/abs/10.1145/3576050.3576117" },
    ],
    imageSrc: "/paper_teasers/Dicot_FAI2023.jpg",
    imageAlt: "DiCoT Framework Overview"
  },
];

const CONTACT = {
  university: "Trinity University",
  dept: "Computer Science",
  addressLines: [
    "One Trinity Place",
    "San Antonio, TX 78212",
  ],
  office: "CSCI, Room 270B",
  email: "davalosedu515@trinity.edu",
};

// Teaching grouped by term; add/swap terms as needed
const TEACHING: Record<string, { code: string; name: string; href?: string }[]> = {
  "Fall 2025": [
    { code: "CSCI 1320", name: "Principles of Computer Science I"},
    { code: "CSCI 3394", name: "Special Topics: Human-Centered Artificial Intelligence" },
  ],
  "Spring 2025": [
    { code: "CSCI 3345", name: "Web Application Design" },
    { code: "CSCI 3366", name: "Parallel and Distributed Programming" },
  ],
};
// ----------------------------------------------------------------------------

export function HomePage() {
  const headshotUrl = PROFILE.headshot;
  const cvUrl = PROFILE.cvPdf;

  return (
    <>
      <NavBar />
      <div className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main column */}
          <div className="lg:col-span-8">
            {/* Header / Hero */}
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <img
                src={headshotUrl}
                alt={`${PROFILE.name} headshot`}
                className="h-28 w-28 rounded-full object-cover border"
                loading="eager"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {PROFILE.name}
                </h1>
                <p className="mt-1 text-muted-foreground">{PROFILE.title}</p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  <Button asChild size="sm" variant="outline">
                    <a href={cvUrl} target="_blank" rel="noreferrer noopener">
                      View CV (PDF)
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href="https://www.github.com/edavalosanaya/" target="_blank" rel="noreferrer noopener">
                      GitHub
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href="https://scholar.google.com/citations?user=tAszlSkAAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer noopener">
                      Google Scholar
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href="https://www.researchgate.net/profile/Eduardo-Davalos-Anaya?ev=hdr_xprf" target="_blank" rel="noreferrer noopener">
                      ResearchGate
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href="https://orcid.org/0000-0001-7190-7273" target="_blank" rel="noreferrer noopener">
                      ORCID
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Bio */}
            <section aria-labelledby="bio-heading" className="space-y-4">
              <h2 id="bio-heading" className="text-xl font-semibold tracking-tight">
                Bio
              </h2>
              {PROFILE.bio.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </section>

            <Separator className="my-6" />

            {/* Interests */}
            <section aria-labelledby="interests-heading">
              <h2 id="interests-heading" className="text-xl font-semibold tracking-tight">
                Research Interests
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {PROFILE.interests.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <Separator className="my-6" />

            {/* Publications */}
            <section aria-labelledby="pubs-heading" className="space-y-4">
              <h2 id="pubs-heading" className="text-xl font-semibold tracking-tight">
                Selected Publications
              </h2>
              <ul className="space-y-4">
                {PUBLICATIONS.map((pub, i) => (
                  <li key={pub.title + i} className="mb-4 last:mb-0">
                  <PublicationCard {...pub} />
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-8">
            <section aria-labelledby="contact-heading" className="rounded-lg border p-4">
              <h2 id="contact-heading" className="text-lg font-semibold tracking-tight">
                Contact
              </h2>
              <div className="mt-3 text-sm">
                <p className="font-medium">{CONTACT.university}</p>
                <p className="text-muted-foreground">{CONTACT.dept}</p>
                <div className="mt-2 space-y-0.5">
                  {CONTACT.addressLines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                  <p>
                    <span className="text-muted-foreground">Office:</span> {CONTACT.office}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Email:</span>{" "}
                    <a className="underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </p>
                </div>
              </div>
            </section>

            <section aria-labelledby="teaching-heading" className="rounded-lg border p-4">
              <h2 id="teaching-heading" className="text-lg font-semibold tracking-tight">
                Teaching
              </h2>
              <div className="mt-3 space-y-4 text-sm">
                {Object.entries(TEACHING).map(([term, courses]) => (
                  <div key={term}>
                    <p className="font-medium">{term}</p>
                    <ul className="mt-1 space-y-1">
                      {courses.map((c) => (
                        <li key={c.code + c.name} className="flex items-start justify-between gap-2">
                          <span>
                            <span className="font-medium">{c.code}</span>{" "}
                            {c.name}
                          </span>
                          {c.href ? (
                            <a className="underline text-blue-600" href={c.href} target="_blank" rel="noreferrer noopener">
                              syllabus
                            </a>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </>
  );
}
