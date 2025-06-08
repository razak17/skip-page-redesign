# Skip Hire Selection App

A React TypeScript application for selecting skip hire services based on location and size requirements.

## Tech Stack & Architecture

This application is built using modern React development practices with the following key technologies:

### Core Technologies
- **React 18** with TypeScript for type-safe component development
- **Vite** for fast development and optimized builds
- **TanStack React Query** for server state management and caching
- **Tailwind CSS** for utility-first styling

### Key Features
- **Server State Management**: Uses React Query for efficient data fetching, caching, and synchronization
- **Type Safety**: Full TypeScript implementation ensures compile-time error checking
- **Responsive Design**: Mobile-first responsive layout using Tailwind CSS grid system
- **Error Handling**: Comprehensive error states for network failures
- **Loading States**: User-friendly loading indicators during data fetching
- **Interactive Selection**: Single-select functionality for skip items

### Architecture Approach

#### State Management Strategy
- **Server State**: Managed by TanStack React Query for API data (skips list)
- **Client State**: Local React state for UI interactions (selected skip ID)
- **Separation of Concerns**: Clear distinction between server and client state

#### Component Structure
- **App Component**: Main container handling data fetching and layout
- **SkipItem Component**: Reusable component for individual skip display
- **API Layer**: Dedicated service functions for external data fetching

#### Development Features
- **Hot Module Replacement (HMR)**: Instant updates during development
- **React Query Devtools**: Integrated debugging tools for query inspection
- **Strict Mode**: Enhanced development warnings and checks

## Getting Started

```bash
pnpm install

mv .env.example .env

pnpm run dev
```

The application fetches skip data from an external API and displays it in a responsive grid layout, allowing users to select their preferred skip size for hire.
