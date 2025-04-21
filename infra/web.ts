const region = aws.getRegionOutput().name;

export const frontend = new sst.aws.StaticSite("Frontend", {
	path: "packages/frontend",
	build: {
		output: "dist",
		command: "npm run build",
	},
	domain:
		$app.stage === "prod"
			? {
					name: "cloudcraft.fi",
					dns: sst.cloudflare.dns({
						zone: "74026120f551e13b76d69c6859d39c5e",
						proxy: true,
						override: true
					}),
				}
			: undefined,
	environment: {
		VITE_REGION: region,
	},
});
