# Pi Agent Extension Workspace Rules

This repository is dedicated to developing extensions and plugins for the Pi Agent to customize and optimize the user's workflow.

## General Guidelines
- **Context:** Always consider how the code interfaces with the Pi Agent ecosystem.
- **Workflow First:** Focus on automating and improving the user's daily tasks when proposing or modifying plugins.
- **Clean Code:** Write robust, well-documented, and maintainable code.
- **Testing:** Ensure that plugins are thoroughly tested for reliability before integrating them into the main workflow.

## Extension Development Best Practices
- When creating a new plugin, start by outlining its expected input, output, and the specific workflow problem it solves.
- If debugging an issue, check the agent logs and verify compatibility with the current Pi Agent version.

## Technology Stack
- **Primary Language:** TypeScript
- **Runtime:** Node.js
- **Package Manager:** pnpm (Always use pnpm for installing and running scripts)
- **Dependencies:** `@earendil-works/pi-coding-agent` (for extension API interfaces)

## Standard Folder Structure
All extensions in this repository should adhere to the following file and folder structure:

```text
pi-agent-extension/
├── package.json         # Extension metadata and pnpm scripts
├── tsconfig.json        # TypeScript configuration
├── src/
│   ├── index.ts         # Main entry point (exports the async factory function)
│   ├── tools/           # Custom agent tools registered via pi.registerTool()
│   ├── events/          # Event handlers for Pi lifecycle and session events
│   └── utils/           # Shared utility functions
├── dist/                # Compiled JavaScript output
└── README.md            # Extension documentation
```

*Note to user: You can customize this file further by adding specific coding standards, testing instructions, or workflow preferences here.*
