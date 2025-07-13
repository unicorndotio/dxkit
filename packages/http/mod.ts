// TODO: Implement http server for health checks and metrics

import { createHealthResponse } from "@dxkit/health";
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

function createMetricsResponse() {
	const health = createHealthResponse();
	const uptimeInSeconds = health.uptime / 1000;
	const metrics = [
		`# HELP uptime_seconds Server uptime in seconds.`,
		`# TYPE uptime_seconds gauge`,
		`uptime_seconds ${uptimeInSeconds}`,
		``,
		`# HELP memory_rss_bytes Resident set size in bytes.`,
		`# TYPE memory_rss_bytes gauge`,
		`memory_rss_bytes ${health.memory.rss * 1024 * 1024}`,
		``,
		`# HELP memory_heap_total_bytes Total heap size in bytes.`,
		`# TYPE memory_heap_total_bytes gauge`,
		`memory_heap_total_bytes ${health.memory.heapTotal * 1024 * 1024}`,
		``,
		`# HELP memory_heap_used_bytes Used heap size in bytes.`,
		`# TYPE memory_heap_used_bytes gauge`,
		`memory_heap_used_bytes ${health.memory.heapUsed * 1024 * 1024}`,
		``,
		`# HELP memory_external_bytes External memory usage in bytes.`,
		`# TYPE memory_external_bytes gauge`,
		`memory_external_bytes ${health.memory.external * 1024 * 1024}`,
	];
	return metrics.join("\n");
}

/**
 * Starts the HTTP server for health checks and metrics.
 * @param port The port to listen on. Defaults to 8080.
 */
export function startServer(port = 8080) {
	console.log(`HTTP server listening on http://localhost:${port}`);
	serve(
		(req: Request) => {
			const url = new URL(req.url);
			if (url.pathname === "/health") {
				const health = createHealthResponse();
				return new Response(JSON.stringify(health, null, 2), {
					headers: { "content-type": "application/json; charset=utf-8" },
				});
			}
			if (url.pathname === "/metrics") {
				const metrics = createMetricsResponse();
				return new Response(metrics, {
					headers: {
						"content-type": "text/plain; version=0.0.4; charset=utf-8",
					},
				});
			}
			return new Response("Not Found", { status: 404 });
		},
		{ port },
	);
}
