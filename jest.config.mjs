import nextJest from "next/jest.js";

// next/jest configura SWC, alias de tsconfig (@/*) y carga de .env.
const createJestConfig = nextJest({ dir: "./" });

/** @type {import('jest').Config} */
const config = {
  // Componentes se testean en jsdom; los tests de servidor usan `@jest-environment node`.
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: ["<rootDir>/src/**/*.test.{ts,tsx}"],
  collectCoverageFrom: ["src/lib/**/*.ts", "src/components/**/*.tsx"],
};

export default createJestConfig(config);
