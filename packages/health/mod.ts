import { getMemoryUsage, getSystemInfo } from "@dxkit/sys";

/**
 * Create a health check response
 */
export function createHealthResponse(): {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  uptime: number;
  memory: ReturnType<typeof getMemoryUsage>;
  system: ReturnType<typeof getSystemInfo>;
} {
  return {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: performance.now(),
    memory: getMemoryUsage(),
    system: getSystemInfo(),
  };
} 