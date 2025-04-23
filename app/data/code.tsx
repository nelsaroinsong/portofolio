"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function CodeBlockDemo() {
  const code = `const stack = [
  {
    name: "Typescript",
    icon: TypeScript,
  }, 
  {
    name: "Javascript",
    icon: JavaScript, 
  }
  {
    name: "React",
    icon: React, 
  }
  {
    name: "Next.js",
    icon: Next, 
  }
];`;

  return (
    <div className="max-w-2xl mx-auto w-full">
      <CodeBlock
        language="tsx"
        filename="technology.tsx"
        highlightLines={[3, 7, 11, 15]}
        code={code}
      />
    </div>
  );
}
