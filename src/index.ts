import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
	pi.on("input", async (event, ctx) => {
		// Only check if we are in an interactive UI mode
		if (!ctx.hasUI) {
			return { action: "continue" };
		}

		// Don't intercept extension messages
		if (event.source === "extension") {
			return { action: "continue" };
		}

		// Simple heuristics to check if the user is asking to implement something directly
		const isAskingToImplement = /^(please\s+)?(can you\s+)?(could you\s+)?(implement|build|create|write|add|make|develop|fix)\b/i.test(event.text.trim());
		const skipPlanKeywords = /\b(without a plan|no plan|directly|just do it)\b/i;

		if (isAskingToImplement && !skipPlanKeywords.test(event.text)) {
			const shouldPlan = await ctx.ui.confirm(
				"Wait! Would you like me to generate a plan first?",
				"It's usually better to plan before getting hands dirty."
			);

			if (shouldPlan) {
				return { 
					action: "transform", 
					text: `Please generate a step-by-step plan for the following request. Do not implement it until the plan is approved:\n\n${event.text}` 
				};
			}
		}

		return { action: "continue" };
	});
}
