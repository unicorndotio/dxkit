import type { DevConfig } from "@dxkit/config";

export class Logger {
  constructor(private config: DevConfig) {}

  /**
   * Log message with appropriate level
   */
  log(level: DevConfig['logLevel'], message: string, data?: unknown): void {
    if (this.shouldLog(level)) {
      const timestamp = new Date().toISOString();
      const prefix = `[${timestamp}] [${level.toUpperCase()}]`;

      if (data) {
        console.log(`${prefix} ${message}`, data);
      } else {
        console.log(`${prefix} ${message}`);
      }
    }
  }

  /**
   * Debug logging
   */
  debug(message: string, data?: unknown): void {
    this.log('debug', message, data);
  }

  /**
   * Info logging
   */
  info(message: string, data?: unknown): void {
    this.log('info', message, data);
  }

  /**
   * Warning logging
   */
  warn(message: string, data?: unknown): void {
    this.log('warn', message, data);
  }

  /**
   * Error logging
   */
  error(message: string, data?: unknown): void {
    this.log('error', message, data);
  }

  /**
   * Check if should log based on current log level
   */
  private shouldLog(level: DevConfig['logLevel']): boolean {
    const levels: DevConfig['logLevel'][] = ['debug', 'info', 'warn', 'error'];
    const currentLevelIndex = levels.indexOf(this.config.logLevel);
    const messageLevelIndex = levels.indexOf(level);
    return messageLevelIndex >= currentLevelIndex;
  }
} 