import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";

import { HttpError, getErrorMessage, isAbortError } from "../lib/error";
import posts from "../posts/posts.json";

marked.setOptions({
  gfm: true,
});

export default function Post() {
  const { slug } = useParams();
  const meta = posts.find((p) => p.slug === slug);

  const [html, setHtml] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [readingMin, setReadingMin] = useState<number | null>(null);

  useEffect(() => {
    if (!meta) return;

    const ac = new AbortController();
    setLoading(true);
    setErr(null);

    (async () => {
      try {
        const res = await fetch(`/posts/${meta.file}`, { signal: ac.signal });
        if (!res.ok) throw new HttpError(res.status, res.statusText, res.url);

        const md = await res.text();
        setReadingMin(meta.readtime);

        // render markdown
        const rendered = (await marked.parse(md)) as string;

        // change external links to open in a new tab
        const clean = rendered.replace(
          /<a\s+href="(http[^"]+)"([^>]*)>/g,
          '<a href="$1"$2 target="_blank" rel="noopener noreferrer">'
        );

        setHtml(clean);
      } catch (e: unknown) {
        if (isAbortError(e)) return
        setErr(getErrorMessage(e));
      } finally {
        setLoading(false);
      }
    })();

    return () => ac.abort();
  }, [meta]);

  const header = useMemo(() => {
    if (!meta) return null;
    return (
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          {meta.title}
        </h1>

        {(meta.date || readingMin) && (
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            {meta.date && (
              <time className="rounded-full bg-slate-100 px-3 py-1">
                {meta.date}
              </time>
            )}
            {readingMin && (
              <span className="rounded-full bg-slate-100 px-3 py-1">
                {readingMin} min read
              </span>
            )}
          </div>
        )}
      </header>
    );
  }, [meta, readingMin]);

  if (!meta) return <div className="text-sm opacity-70">Post not found.</div>;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      {header}

      {loading && (
        <div className="animate-pulse text-slate-400">Loading post…</div>
      )}
      {err && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-700">
          {err}
        </div>
      )}

      {!loading && !err && (
        <article
          className="
            prose prose-slate lg:prose-lg max-w-none
            prose-p:my-4 md:prose-p:my-5
            prose-p:leading-7 md:prose-p:leading-8
            prose-li:my-1.5 prose-ul:my-3 prose-ol:my-3
            prose-a:text-blue-600 hover:prose-a:underline
            prose-img:rounded-xl prose-img:shadow
            prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl
            prose-code:px-1 prose-code:py-0.5 prose-code:bg-slate-100 prose-code:rounded
            dark:prose-invert
          "
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}

      <hr className="my-10" />
      <div className="flex justify-between text-sm">
        <a href="/blog" className="text-blue-600 hover:underline">
          ← Back to blog
        </a>
      </div>
    </div>
  );
}
