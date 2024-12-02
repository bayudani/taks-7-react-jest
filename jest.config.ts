import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom', // Pastikan ini ada
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/src/$1',
        // '\\.(png|jpe?g|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js', // Mock gambar

    },
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        // '^.+\\.(png|jpe?g|gif|webp|svg)$': 'file-loader',
    },
    globals: {
        'ts-jest': {
        tsconfig: 'tsconfig.app.json'
        }
    },
    
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
    ],
};

export default config;
