"use client";

import { useEffect, useState } from "react";

type GithubActivityProps = {
  username: string;
};

export function GithubActivity({ username }: GithubActivityProps) {
  const [svg, setSvg] = useState<string | null>(null);
  const [fallback, setFallback] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [svgStatus, setSvgStatus] = useState<"idle" | "loading" | "error">("idle");
  const [profile, setProfile] = useState<{
    publicRepos: number;
    followers: number;
    following: number;
  } | null>(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setStatus("loading");
      setSvgStatus("loading");
      try {
        // profile + repos
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, {
            headers: { Accept: "application/vnd.github+json", "User-Agent": "portfolio-app" },
            cache: "no-store"
          }),
          fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=updated`, {
            headers: { Accept: "application/vnd.github+json", "User-Agent": "portfolio-app" },
            cache: "no-store"
          })
        ]);
        if (!profileRes.ok) throw new Error(`profile status ${profileRes.status}`);
        if (!reposRes.ok) throw new Error(`repos status ${reposRes.status}`);
        const profileJson = await profileRes.json();
        if (mounted) {
          setProfile({
            publicRepos: profileJson.public_repos ?? 0,
            followers: profileJson.followers ?? 0,
            following: profileJson.following ?? 0
          });
          setStatus("idle");
        }

        const res = await fetch(`https://github.com/users/${username}/contributions`, {
          headers: { Accept: "text/html" },
          cache: "no-store"
        });
        if (!res.ok) throw new Error(`status ${res.status}`);
        const html = await res.text();
        const match = html.match(/<svg[^>]*>.*<\/svg>/s);
        if (!match) throw new Error("svg not found");
        if (mounted) {
          setSvg(match[0]);
          setSvgStatus("idle");
        }
      } catch (err) {
        if (mounted) {
          setSvgStatus("error");
          setFallback(true);
          // still mark profile/repo load as completed even if svg fails
          setStatus("idle");
        }
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, [username]);

  if (status === "loading" && !svg) {
    return <p className="text-sm text-muted-light dark:text-muted-dark">Loading contributions…</p>;
  }

  return (
    <div className="space-y-4">
      {profile ? (
        <div className="rounded-2xl border border-line-light bg-white/10 px-4 py-3 text-xs font-semibold text-ink-light dark:border-line-dark dark:bg-black/20 dark:text-ink-dark">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-line-light px-3 py-1 dark:border-line-dark">
              Repositories: {profile.publicRepos}
            </span>
            <span className="rounded-full border border-line-light px-3 py-1 dark:border-line-dark">
              Followers: {profile.followers}
            </span>
            <span className="rounded-full border border-line-light px-3 py-1 dark:border-line-dark">
              Following: {profile.following}
            </span>
          </div>
        </div>
      ) : null}

      {svgStatus === "error" || fallback ? (
        <div className="rounded-2xl border border-line-light bg-white/5 p-3 dark:border-line-dark dark:bg-black/10">
          <img
            src={`https://ghchart.rshah.org/${username}`}
            alt="GitHub contributions chart"
            className="w-full max-w-3xl rounded-xl"
            loading="lazy"
          />
          <p className="mt-2 text-xs text-muted-light dark:text-muted-dark">
            Showing fallback chart (ghchart.rshah.org) because the contributions SVG could not be fetched.
          </p>
        </div>
      ) : svg ? (
        <div
          className="overflow-auto rounded-2xl border border-line-light bg-white/5 p-3 dark:border-line-dark dark:bg-black/10"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ) : (
        <p className="text-sm text-muted-light dark:text-muted-dark">No contribution data.</p>
      )}
    </div>
  );
}
