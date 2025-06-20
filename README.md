# @dxkit – Developer Experience Toolkit for Deno

**DX reimagined: An elegant, modular toolkit for a joyful Deno development
experience.**

---

`@dxkit` is a library suite designed to empower developers with simple, clear,
and extensible tools, making project bootstrapping and environment setup
effortless.

## ✨ Features

- **Modular & Tree-Shakable**: Import only what you need.
- **Zero-Friction Configuration**: Load config from environment variables.
- **Extensible Logging**: Production-grade logging with customizable levels.
- **System Diagnostics**: Get insights into memory usage and system info.
- **Environment Validation**: Ensure your runtime environment is correctly set
  up.
- **Performance Monitoring**: Simple and effective performance measurement.
- **Health Checks**: Implement custom health checks with ease.

## 📦 Packages

This monorepo is managed as a
[Deno Workspace](https://docs.deno.com/runtime/manual/projects/workspaces) and
contains the following packages:

| Package         | Description                                        |
| --------------- | -------------------------------------------------- |
| `@dxkit/core`   | Core package re-exporting all modules              |
| `@dxkit/config` | Configuration management                           |
| `@dxkit/log`    | Logging utilities                                  |
| `@dxkit/denv`   | Environment validation                             |
| `@dxkit/sys`    | System and memory information                      |
| `@dxkit/perf`   | Performance measurement utilities                  |
| `@dxkit/health` | Health check logic                                 |
| `@dxkit/utils`  | Common utility functions                           |
| `@dxkit/http`   | (Planned) HTTP server for health/metrics dashboard |
| `@dxkit/cli`    | (Planned) Command-line interface                   |

## 🚀 Getting Started

Since `@dxkit` is a workspace, you can directly import modules from other local
packages in the workspace.

For example, you could create a `main.ts` in the root and use the logger:

```typescript
import { Config, Logger } from "./packages/core/mod.ts";

const config = new Config();
const logger = new Logger(config.get());

logger.info("Hello from @dxkit!");
```

## 🛠️ Development

This project uses Deno for task management.

- **Check types**:
  ```sh
  deno task check
  ```

- **Lint files**:
  ```sh
  deno task lint
  ```

- **Run tests**:
  ```sh
  deno test
  ```

## 📚 Documentation

For more detailed information about the architecture, principles, and roadmap,
please refer to the documents in the `/docs` directory.
