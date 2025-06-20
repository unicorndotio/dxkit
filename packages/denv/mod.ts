/**
 * Validate environment variables
 */
export function validateEnv(): {
	valid: boolean;
	missing: string[];
	warnings: string[];
} {
	const required = ["PORT", "NODE_ENV"];
	const optional = ["DEBUG", "LOG_LEVEL", "HOST"];
	const missing: string[] = [];
	const warnings: string[] = [];

	// Check required env vars
	for (const env of required) {
		if (!Deno.env.get(env)) {
			missing.push(env);
		}
	}

	// Check optional env vars
	for (const env of optional) {
		if (!Deno.env.get(env)) {
			warnings.push(`${env} not set, using default value`);
		}
	}

	return { valid: missing.length === 0, missing, warnings };
}
