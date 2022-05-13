import { getMDXComponent } from 'mdx-bundler/client';
import React, { useMemo } from 'react';

export default function useMdxComponent(code: string) {
  return useMemo(() => getMDXComponent(code), [code]);
}
