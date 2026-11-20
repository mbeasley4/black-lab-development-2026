"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

const ALL = "All";

function anchorId(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function PlatformBadge({ platform }: { platform: string }) {
  return (
    <span className="shrink-0 text-[9px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full border border-neutral-800 bg-white/[0.04] text-neutral-500">
      {platform}
    </span>
  );
}

function UpdatedBadge() {
  return (
    <span className="inline-flex w-fit items-center gap-1.5 text-[9px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full border border-neutral-800 bg-white/[0.04] text-white">
      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-pulse" />
      Recently Updated
    </span>
  );
}

// One consistent browser-window frame for every screenshot, so sources with
// different sizes and aspect ratios line up as a set.
function BrowserFrame({
  project,
  sizes,
  zoom,
  className = "",
}: {
  project: Project;
  sizes: string;
  zoom: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-lg border border-white/10 bg-neutral-900 shadow-[0_12px_32px_rgba(0,0,0,0.45)] transition-colors duration-300 group-hover:border-neutral-500 ${className}`}>
      <div className="flex h-5 items-center gap-1 border-b border-white/5 bg-neutral-900 px-2.5" aria-hidden="true">
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
      </div>
      <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-950">
        <Image
          src={project.screenshot}
          alt={`${project.name} website`}
          fill
          sizes={sizes}
          className={`object-cover object-top transition-transform duration-500 ${zoom}`}
        />
      </div>
    </div>
  );
}

// The ::after layer stretches over the whole card (the nearest positioned
// ancestor is the <article>), so the entire card is clickable while the
// markup keeps a single, properly labelled link.
function ProjectLink({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      aria-label={`View project: ${project.name}`}
      className="inline-flex w-fit items-center gap-2 text-xs font-semibold tracking-wide uppercase text-white group-hover:text-white transition-colors duration-200 after:absolute after:inset-0 after:z-10 after:rounded-2xl after:content-[''] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-volt-500"
    >
      View project
      <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

function FeaturedRow({ project, flip, linked }: { project: Project; flip: boolean; linked: boolean }) {
  return (
    <article
      id={anchorId(project.name)}
      className={`group relative grid grid-cols-1 ${flip ? "lg:grid-cols-[1fr_1.25fr]" : "lg:grid-cols-[1.25fr_1fr]"} rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 transition-all duration-300 ease-out will-change-transform ${linked ? "hover:border-volt-500/70 hover:bg-neutral-900/60 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.7),0_0_0_1px_rgba(227,245,68,0.25),0_0_70px_rgba(227,245,68,0.16)] motion-safe:hover:-translate-y-1.5 focus-within:border-volt-500/70" : ""} scroll-mt-28`}
    >
      <div
        className={`flex items-center bg-linear-to-br from-neutral-900 via-neutral-950 to-neutral-950 p-4 sm:p-6 lg:p-8 ${
          flip ? "lg:order-2 lg:border-l" : "lg:border-r"
        } border-b lg:border-b-0 border-neutral-800`}
      >
        <BrowserFrame
          project={project}
          sizes="(min-width: 1024px) 50vw, 100vw"
          zoom="motion-safe:group-hover:scale-[1.04]"
          className="w-full"
        />
      </div>

      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center gap-5">
        <div className="h-8 flex items-center">
          <Image
            src={project.logo}
            alt={`${project.name} logo`}
            height={28}
            width={150}
            className="h-7 w-auto object-contain object-left opacity-85 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-300">{project.name}</h3>
          <PlatformBadge platform={project.platform} />
          {project.updated && <UpdatedBadge />}
        </div>
        <p className="text-neutral-300 leading-relaxed">{project.summary}</p>
        <ul className="space-y-2 text-sm border-t border-neutral-800/70 pt-5">
          {project.details.slice(0, 3).map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-neutral-400">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/[0.04] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        {linked && <ProjectLink project={project} />}
      </div>
    </article>
  );
}

function CompactCard({ project, linked }: { project: Project; linked: boolean }) {
  return (
    <article
      id={anchorId(project.name)}
      className={`group relative flex flex-col rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 transition-all duration-300 ease-out will-change-transform ${linked ? "hover:border-volt-500/70 hover:bg-neutral-900/60 hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.7),0_0_0_1px_rgba(227,245,68,0.25),0_0_50px_rgba(227,245,68,0.16)] motion-safe:hover:-translate-y-2 focus-within:border-volt-500/70" : ""} scroll-mt-28`}
    >
      <div className="bg-linear-to-br from-neutral-900 to-neutral-950 p-3 border-b border-neutral-800">
        <BrowserFrame
          project={project}
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          zoom="motion-safe:group-hover:scale-[1.06]"
        />
      </div>
      <div className="p-4 flex flex-col gap-2.5 grow">
        <div className="h-6 flex items-center">
          <Image
            src={project.logo}
            alt={`${project.name} logo`}
            height={20}
            width={110}
            className="h-5 w-auto object-contain object-left opacity-75 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-[10px] font-semibold tracking-[0.18em] uppercase text-neutral-400">{project.name}</h3>
          <PlatformBadge platform={project.platform} />
        </div>
        {project.updated && <UpdatedBadge />}
        <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3">{project.summary}</p>
        {linked && (
          <div className="mt-auto pt-1">
            <ProjectLink project={project} />
          </div>
        )}
      </div>
    </article>
  );
}

export default function WorkShowcase({ projects }: { projects: Project[] }) {
  const [platform, setPlatform] = useState(ALL);
  // Every project with a slug has a detail page: Sanity content once
  // published, otherwise a page built from its card data.
  const isLinked = (p: Project) => Boolean(p.slug);

  const platforms = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of projects) counts.set(p.platform, (counts.get(p.platform) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([name]) => name);
  }, [projects]);

  const showFeatured = platform === ALL;
  const featured = showFeatured ? projects.filter((p) => p.featured) : [];
  const rest = projects.filter((p) => (showFeatured ? !p.featured : p.platform === platform));

  return (
    <div>
      <div role="group" aria-label="Filter projects by platform" className="mb-10 flex flex-wrap gap-2">
        {[ALL, ...platforms].map((name) => {
          const active = platform === name;
          const count = name === ALL ? projects.length : projects.filter((p) => p.platform === name).length;
          return (
            <button
              key={name}
              type="button"
              aria-pressed={active}
              onClick={() => setPlatform(name)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-colors duration-200 ${
                active
                  ? "border-volt-500 bg-volt-500 text-black"
                  : "border-neutral-700 text-neutral-300 hover:border-volt-500/50 hover:text-white"
              }`}
            >
              {name}
              <span className={active ? "text-black/60" : "text-neutral-500"}>{count}</span>
            </button>
          );
        })}
      </div>

      {featured.length > 0 && (
        <div className="mb-12 flex flex-col gap-6">
          {featured.map((project, i) => (
            <FeaturedRow key={project.name} project={project} flip={i % 2 === 1} linked={isLinked(project)} />
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {rest.map((project) => (
          <CompactCard key={project.name} project={project} linked={isLinked(project)} />
        ))}
      </div>
    </div>
  );
}
