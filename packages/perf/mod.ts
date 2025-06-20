import { Config } from "@dxkit/config";
import { Logger } from "@dxkit/log";

const config = new Config().get();
const logger = new Logger(config);

/**
 * Generate a simple performance measurement
 */
export async function measurePerformance<T>(
	name: string,
	fn: () => Promise<T> | T,
): Promise<T> {
	const start = performance.now();
	try {
		const result = await fn();
		const end = performance.now();
		const duration = Math.round(end - start);
		logger.info(`Performance [${name}]: ${duration}ms`);
		return result;
	} catch (error) {
		const end = performance.now();
		const duration = Math.round(end - start);
		logger.error(
			`Performance [${name}] failed after ${duration}ms:`,
			error,
		);
		throw error;
	}
}
