export interface DevConfig {
  port: number;
  host: string;
  debug: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export class Config {
  private config: DevConfig;

  constructor() {
    this.config = {
      port: parseInt(Deno.env.get('PORT') || '3000'),
      host: Deno.env.get('HOST') || 'localhost',
      debug: Deno.env.get('DEBUG') === 'true',
      logLevel: (Deno.env.get('LOG_LEVEL') as DevConfig['logLevel']) || 'info',
    };
  }

  /**
   * Get current configuration
   */
  get(): DevConfig {
    return { ...this.config };
  }

  /**
   * Update configuration
   */
  update(updates: Partial<DevConfig>): void {
    this.config = { ...this.config, ...updates };
  }
} 