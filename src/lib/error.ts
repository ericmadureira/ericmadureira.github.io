export class HttpError extends Error {
  status: number;
  statusText: string;
  url?: string;

  constructor(status: number, statusText: string, url?: string) {
    super(`${status} ${statusText}`);
    this.name = "HttpError";
    this.status = status;
    this.statusText = statusText;
    this.url = url;
  }
}

/** true when error is fetch cancel (AbortController) */
export function isAbortError(e: unknown): e is DOMException {
  return e instanceof DOMException && e.name === "AbortError";
}

// Converts unknown errors to friendly message
export function getErrorMessage(e: unknown): string {
  if (e instanceof HttpError) return e.message;
  if (e instanceof DOMException) return `${e.name}: ${e.message}`;
  if (e instanceof Error) return e.message;
  if (typeof e === "string") return e;
  try {
    return JSON.stringify(e);
  } catch {
    return "Unexpected error";
  }
}
