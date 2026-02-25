"use client";

import React from "react";

import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Lightweight syntax highlighter — replaces shiki (~600 KB) with ~2 KB of JS.
// Handles: json, bash/shell, javascript/typescript, python.
// Colors are defined as CSS custom properties in globals.css (.hl-* classes).
// ---------------------------------------------------------------------------

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function tok(cls: string, raw: string) {
  return `<span class="${cls}">${esc(raw)}</span>`;
}

function highlightJson(code: string): string {
  // Single-pass regex: JSON key strings, value strings, numbers, booleans, null
  const re =
    /("(?:[^"\\]|\\.)*")(\s*:)|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)|\b(true|false)\b|\b(null)\b|([\s\S])/g;
  let out = "";
  let m: RegExpExecArray | null;
  while ((m = re.exec(code)) !== null) {
    if (m[1] !== undefined) { out += tok("hl-key", m[1]) + esc(m[2]); }
    else if (m[3] !== undefined) { out += tok("hl-str", m[3]); }
    else if (m[4] !== undefined) { out += tok("hl-num", m[4]); }
    else if (m[5] !== undefined) { out += tok("hl-bool", m[5]); }
    else if (m[6] !== undefined) { out += tok("hl-null", m[6]); }
    else { out += esc(m[7] ?? m[0]); }
  }
  return out;
}

function highlightBash(code: string): string {
  return code
    .split("\n")
    .map((line) => {
      // Full-line comments
      if (/^\s*#/.test(line)) return tok("hl-cmt", line);
      // Process token by token to avoid double-wrapping
      return line
        .replace(/([\s\S]*)/g, (whole) => {
          // Quoted strings first
          const parts: string[] = [];
          let rest = whole;
          let result = "";
          // Walk character by character building segments
          const segRe =
            /(#[^\n]*)|(https?:\/\/[^\s\\'"]+)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(--[\w-]+=?|-[A-Za-z]\b)|\b(curl|python|python3|node|npm)\b|([\s\S])/g;
          let sm: RegExpExecArray | null;
          while ((sm = segRe.exec(whole)) !== null) {
            if (sm[1]) { result += tok("hl-cmt", sm[1]); break; }
            else if (sm[2]) result += tok("hl-url", sm[2]);
            else if (sm[3]) result += tok("hl-str", sm[3]);
            else if (sm[4]) result += tok("hl-flag", sm[4]);
            else if (sm[5]) result += tok("hl-kw", sm[5]);
            else result += esc(sm[6] ?? sm[0]);
          }
          parts.push(result);
          rest = "";
          return parts.join("") || esc(whole);
        });
    })
    .join("\n");
}

const JS_KW =
  /\b(const|let|var|function|return|await|async|import|from|export|default|new|if|else|for|while|of|in|class|extends|try|catch|throw|typeof|void|null|undefined|true|false)\b/g;

function highlightJs(code: string): string {
  return code
    .split("\n")
    .map((line) => {
      if (/^\s*\/\//.test(line)) return tok("hl-cmt", line);
      const re =
        /(`[^`]*`)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(\/\/[^\n]*)|\b(true|false|null|undefined)\b|\b(const|let|var|function|return|await|async|import|from|export|default|new|if|else|for|while|of|in|class|extends|try|catch|throw|typeof|void)\b|\b(\d+(?:\.\d+)?)\b|\b([a-zA-Z_$][\w$]*)\s*(?=\()|([\s\S])/g;
      let out = "";
      let m: RegExpExecArray | null;
      while ((m = re.exec(line)) !== null) {
        if (m[1]) out += tok("hl-str", m[1]);
        else if (m[2]) out += tok("hl-str", m[2]);
        else if (m[3]) out += tok("hl-cmt", m[3]);
        else if (m[4]) out += tok("hl-bool", m[4]);
        else if (m[5]) out += tok("hl-kw", m[5]);
        else if (m[6]) out += tok("hl-num", m[6]);
        else if (m[7]) out += tok("hl-fn", m[7]);
        else out += esc(m[8] ?? m[0]);
      }
      return out;
    })
    .join("\n");
}

const PY_KW =
  /\b(def|class|import|from|return|if|elif|else|for|while|in|not|and|or|True|False|None|with|as|try|except|finally|raise|pass|break|continue|lambda|yield|async|await|self)\b/g;

function highlightPython(code: string): string {
  return code
    .split("\n")
    .map((line) => {
      if (/^\s*#/.test(line)) return tok("hl-cmt", line);
      const re =
        /(#[^\n]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|\b(True|False|None)\b|\b(def|class|import|from|return|if|elif|else|for|while|in|not|and|or|with|as|try|except|finally|raise|pass|break|continue|lambda|yield|async|await|self)\b|(@[\w.]+)|\b(\d+(?:\.\d+)?)\b|\b([a-zA-Z_][\w]*)\s*(?=\()|([\s\S])/g;
      let out = "";
      let m: RegExpExecArray | null;
      while ((m = re.exec(line)) !== null) {
        if (m[1]) { out += tok("hl-cmt", m[1]); break; }
        else if (m[2]) out += tok("hl-str", m[2]);
        else if (m[3]) out += tok("hl-bool", m[3]);
        else if (m[4]) out += tok("hl-kw", m[4]);
        else if (m[5]) out += tok("hl-fn", m[5]);
        else if (m[6]) out += tok("hl-num", m[6]);
        else if (m[7]) out += tok("hl-fn", m[7]);
        else out += esc(m[8] ?? m[0]);
      }
      return out;
    })
    .join("\n");
}

function highlightCode(code: string, language: string): string {
  if (!code) return "";
  switch (language) {
    case "json": return highlightJson(code);
    case "bash": case "shell": case "sh": return highlightBash(code);
    case "javascript": case "js": case "typescript": case "ts": return highlightJs(code);
    case "python": case "py": return highlightPython(code);
    default: return esc(code);
  }
}

// ---------------------------------------------------------------------------
// Components
// ---------------------------------------------------------------------------

export type CodeBlockProps = {
  children?: React.ReactNode;
  className?: string;
} & React.HTMLProps<HTMLDivElement>;

function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  return (
    <div
      className={cn(
        "not-prose flex w-full flex-col overflow-clip border",
        "border-border bg-card text-card-foreground rounded-xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export type CodeBlockCodeProps = {
  code: string;
  language?: string;
  theme?: string;
  className?: string;
} & React.HTMLProps<HTMLDivElement>;

function CodeBlockCode({
  code,
  language = "bash",
  // theme prop kept for API compatibility but colours come from CSS variables
  theme: _theme,
  className,
  ...props
}: CodeBlockCodeProps) {
  const html = highlightCode(code, language);

  return (
    <div
      className={cn(
        "w-full overflow-x-auto text-[13px] [&>pre]:px-4 [&>pre]:py-4 [&>pre]:!bg-transparent",
        className,
      )}
      dangerouslySetInnerHTML={{
        __html: `<pre><code>${html}</code></pre>`,
      }}
      {...props}
    />
  );
}

export type CodeBlockGroupProps = React.HTMLAttributes<HTMLDivElement>;

function CodeBlockGroup({
  children,
  className,
  ...props
}: CodeBlockGroupProps) {
  return (
    <div
      className={cn("flex items-center justify-between", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { CodeBlockGroup, CodeBlockCode, CodeBlock };
