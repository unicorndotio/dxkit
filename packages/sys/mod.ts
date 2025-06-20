/**
 * Get memory usage information
 */
export function getMemoryUsage(): {
  rss: number;
  heapTotal: number;
  heapUsed: number;
  external: number;
} {
  const usage = Deno.memoryUsage();
  return {
    rss: Math.round(usage.rss / 1024 / 1024), // MB
    heapTotal: Math.round(usage.heapTotal / 1024 / 1024), // MB
    heapUsed: Math.round(usage.heapUsed / 1024 / 1024), // MB
    external: Math.round(usage.external / 1024 / 1024), // MB
  };
}

/**
 * Get system information
 */
export function getSystemInfo(): {
  denoVersion: string;
  platform: string;
  arch: string;
  cwd: string;
} {
  return {
    denoVersion: Deno.version.deno,
    platform: Deno.build.os,
    arch: Deno.build.arch,
    cwd: Deno.cwd(),
  };
} 