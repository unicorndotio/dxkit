import { Config } from "@dxkit/config";
import { createHealthResponse } from "@dxkit/health";

function printHelp() {
	console.log("DX-Kit CLI");
	console.log("Usage: deno run packages/cli/mod.ts <command>");
	console.log("");
	console.log("Commands:");
	console.log("  health    Prints health status");
	console.log("  config    Prints current configuration");
}

async function main() {
	const command = Deno.args[0];

	switch (command) {
		case "health": {
			const health = createHealthResponse();
			console.log(JSON.stringify(health, null, 2));
			break;
		}
		case "config": {
			const config = new Config().get();
			console.log(JSON.stringify(config, null, 2));
			break;
		}
		default: {
			printHelp();
			break;
		}
	}
}

if (import.meta.main) {
	main();
}
