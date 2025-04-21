/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "cloudcraft",
      removal: input?.stage === "prod" ? "retain" : "remove",
      home: "aws",
      providers: { cloudflare: "6.1.0" },
    };
  },
  async run() {
    await import("./infra/web");
    return {
		
	};
  },
});
