import React from "react";
import clsx from "clsx";

export type ProjectAction = { label: string; href: string };

export type ProjectCardProps = {
  title: string;
  imageSrc: string; // relative to public/ or absolute URL
  imageAlt?: string;
  description: React.ReactNode;
  tags?: string[];
  href?: string; // make whole card clickable
  className?: string;
  /** Aspect ratio for the media area. Provide as W/H (e.g., 16/9) or explicit percent like '56.25%'. */
  aspect?: `${number}/${number}` | string;
};

function ratioToPadding(aspect?: string) {
  if (!aspect) return "56.25%"; // 16/9 default
  if (aspect.endsWith("%")) return aspect;
  const parts = aspect.split("/");
  const w = Number(parts[0]);
  const h = Number(parts[1]);
  if (w && h) return `${(h / w) * 100}%`;
  return "56.25%";
}

export function ProjectCard({
  title,
  imageSrc,
  imageAlt,
  description,
  tags,
  href,
  className,
  aspect = "16/9",
}: ProjectCardProps) {
  // const media = resolveAsset(imageSrc);
  const media = imageSrc;
  const paddingTop = ratioToPadding(aspect);
  const Wrapper: any = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className={clsx(
        "group block overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm",
        "transition hover:shadow-md focus-visible:shadow-md focus:outline-none",
        className
      )}
    >
      {/* Media area */}
      <div className="relative w-full" style={{ paddingTop }}>
        {media && (
          <img
            src={media}
            alt={imageAlt ?? title}
            className={clsx(
              "absolute inset-0 h-full w-full object-contain", // respect width, pad height
              "bg-muted transition-opacity duration-300",
              "opacity-100 group-hover:opacity-25"
            )}
            loading="lazy"
            decoding="async"
          />
        )}
        {/* Top-left tags */}
        {!!tags?.length && (
          <div className="pointer-events-none absolute left-3 top-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full border bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                {t}
              </span>
            ))}
          </div>
        )}
        {/* Title always visible at bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent p-4">
          <h3 className="text-lg font-semibold leading-tight">{title}</h3>
        </div>
        {/* Hover overlay description */}
        <div className="pointer-events-none absolute inset-0 grid place-items-center p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="mx-auto max-w-[60ch] text-sm sm:text-base text-foreground">
            {description}
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default ProjectCard;