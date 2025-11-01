# 🔑 Project Key

### *Universal Authentication Orchestrator for Automation Frameworks*

## 🧭 1. Product Overview

### **Product Name:**

**Project Key**

### **Tagline:**

> One login to test them all.

### **Vision Statement:**

Project Key is a universal authentication orchestrator for developers and QA engineers.
It eliminates the friction of environment setup, login flows, and OTP handling in end-to-end automation by providing a secure, framework-agnostic way to inject authenticated sessions across local, staging, and production environments.

## 🚨 2. Problem Statement

Modern test automation is blocked by authentication.
Every framework (Cypress, Playwright, Puppeteer, etc.) requires the same painful setup steps:

* Launch browser
* Handle OAuth redirects
* Retrieve OTPs or 2FA codes
* Store environment-specific credentials
* Retry when cookies expire

This process is **time-consuming, brittle, and not reusable** across projects.
Most teams either:

* **Stub login** (breaking parity with production), or
* **Use manual cookies/tokens** (unsafe and short-lived).

There are **no existing tools** that abstract authentication *for* automation frameworks.
Project Key fills this gap — automating secure, consistent login setup regardless of framework or environment.

## 💡 3. Product Concept

Project Key provides a single command and API to handle authentication setup for any E2E test runner.

**Example Flow (Playwright or Cypress):**

```bash
npx projectkey login github
# Logs in via OAuth or API, stores secure session locally

npx projectkey export --framework=playwright
# Outputs session.json usable as Playwright storage state
```

Project Key automatically:

* Performs secure login flows (OAuth, token, or cookie-based)
* Refreshes tokens or sessions before expiry
* Stores and encrypts session data
* Injects authentication state into test frameworks at runtime

It’s **framework-agnostic**, **environment-aware**, and **production-safe**.

## 🌍 4. Target Audience

| Role                    | Problem Project Key Solves                                  |
| ----------------------- | ------------------------------------------------------- |
| QA Engineers            | No more manual login steps before every E2E test run    |
| Developers              | Consistent local + CI authentication with no setup pain |
| DevOps                  | Secure integration of test automation into production   |
| Open Source Maintainers | Unified login orchestration across contributors         |

## ⚙️ 5. Core Product Principles

1. **Real Authentication, Never Mocked**

   * Always uses legitimate flows or tokens.
2. **Security First**

   * Sessions are encrypted, short-lived, and environment-scoped.
3. **Framework Agnostic**

   * Works with Playwright, Cypress, Puppeteer, Selenium, etc.
4. **Environment Consistency**

   * Identical auth handling locally, in staging, and in production.
5. **Extensible by Design**

   * Developers can write new `AuthProvider` plugins easily.

## 🧱 6. System Architecture Overview

### **High-Level Diagram**

```
        ┌─────────────────────┐
        │   Test Framework    │
        │ (Playwright/Cypress)│
        └──────────┬──────────┘
                   │
         Inject Session (Cookies, Tokens)
                   │
        ┌──────────▼──────────┐
        │     Project Key Core    │
        │   (CLI + SDK API)   │
        ├──────────┬──────────┤
        │   Providers Layer   │
        │ (GitHub, Google...) │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │ Auth Provider APIs  │
        │ (OAuth, Email, M2M) │
        └─────────────────────┘
```

## ⚙️ 7. Core Components

### **1. Auth Providers Layer (Adapters)**

Responsible for obtaining valid sessions/tokens.

**Example Providers:**

* GitHub OAuth (PAT or OAuth App)
* Google Sign-In
* Custom backend token login
* Email OTP (future)
* Cookie replay

**Interface:**

```ts
interface AuthProvider {
  name: string;
  login(): Promise<AuthSession>;
  refresh?(session: AuthSession): Promise<AuthSession>;
}
```

### **2. Core Orchestrator**

Handles configuration, session lifecycle, and session export.

**Responsibilities:**

* Reads from `projectkey.config.json`
* Executes provider `login()` or `refresh()`
* Normalizes session data
* Stores encrypted `.auth/session.json`
* Exposes CLI + Node API

```ts
import { getAuthSession } from "@projectkey/core";
const session = await getAuthSession("github");
```

### **3. Session Storage Layer**

Securely persists and retrieves session data.

| Storage Mode    | Description                                   |
| --------------- | --------------------------------------------- |
| Local (default) | Encrypted JSON file (`.auth/session.json`)    |
| CI/CD           | Ephemeral cache or GitHub Secret              |
| Cloud (future)  | Hosted session manager with token refresh API |

**Encryption:** AES-256 with CI passphrase or local keychain.

---

### **4. Framework Integrations**

Adapters for injecting sessions into test runners.

| Framework  | Method                                           |
| ---------- | ------------------------------------------------ |
| Playwright | Uses `storageState` file                         |
| Cypress    | Uses `cy.setCookie()` and localStorage injection |
| Puppeteer  | Uses `page.setCookie()`                          |
| Selenium   | Uses WebDriver cookie APIs                       |

## 🔒 8. Security Model

* No plain-text tokens or cookies ever written to disk.
* Long-term credentials (PATs, OAuth secrets) must be stored externally (Vault, GitHub Secrets).
* Session data auto-expires and is environment-scoped.
* Optional audit logs for session creation and usage.

## 🚀 9. MVP Scope (v1.0)

### 🎯 **Goal:**

Deliver a minimal, working system that can:

1. Log into GitHub via OAuth or PAT
2. Store an encrypted session locally or in CI
3. Inject that session into Playwright and Cypress

### **Included Features**

| Feature              | Description                                          |
| -------------------- | ---------------------------------------------------- |
| CLI                  | `projectkey login`, `projectkey export`, `projectkey restore` |
| GitHub Auth Provider | Supports PAT or OAuth App                            |
| Local Encryption     | Secure `.auth/session.json`                          |
| Playwright Export    | `storageState` JSON generator                        |
| Cypress Export       | Custom command + cookie injector                     |
| CI/CD Mode           | Non-interactive login with stored credentials        |
| Config File          | `projectkey.config.json` with provider + env settings   |

### **CLI Commands (MVP)**

| Command                           | Description                 |
| --------------------------------- | --------------------------- |
| `projectkey init`                    | Creates base config file    |
| `projectkey login <provider>`        | Logs in and stores session  |
| `projectkey export --framework=<fw>` | Outputs framework session   |
| `projectkey restore`                 | Restores session in CI mode |
| `projectkey logout`                  | Deletes stored session      |

### **MVP File Structure**

```
.projectkey/
├── config.json
├── session.enc.json
└── keys/
    └── local.key
```

### **Playwright Example**

```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  storageState: '.projectkey/session.json',
});
```

### **Cypress Example**

```js
beforeEach(() => {
  cy.authkitLogin('github'); // calls local Project Key instance
});
```

### **Architecture Diagram (MVP Flow)**

```
CI/CD Runner
     │
     │ 1️⃣ projectkey login github --ci
     ▼
Project Key CLI
     │
     ├─> AuthProvider (GitHub)
     │      ↳ OAuth or PAT exchange
     │
     └─> Encrypted Session Stored
     │
     ▼
projectkey export --framework=playwright
     │
     └─> Writes storageState.json
     │
     ▼
Playwright Test Runner
     │
     └─> Uses pre-authenticated session
```

## 🧩 10. Post-MVP Roadmap

| Phase | Feature                 | Description                              |
| ----- | ----------------------- | ---------------------------------------- |
| v1.1  | Google Provider         | Add Google OAuth                         |
| v1.2  | Email OTP Integration   | Add support for Mailosaur / MailPit      |
| v1.3  | Session Refresh Service | CLI daemon or background worker          |
| v1.4  | Project Key Dashboard       | Web view for managing providers/sessions |
| v2.0  | Cloud Mode              | Centralized orchestration service        |

## 🧠 11. Competitive Landscape

| Tool                    | Purpose                  | Why Project Key Wins                                         |
| ----------------------- | ------------------------ | -------------------------------------------------------- |
| Stagehand               | Browser automation / OTP | Project Key is framework-agnostic                            |
| Playwright Auth Storage | Single-framework         | Project Key works across tools                               |
| Mailosaur / MailPit     | OTP fetching             | Project Key focuses on session orchestration                 |
| Keycloak / Auth0        | Identity management      | Project Key doesn’t manage users — only sessions for testing |

No existing tool directly solves **“automated authentication for E2E testing”** — Project Key fills that unique niche.

## 🧭 12. Success Metrics

| Metric               | Definition                                    |
| -------------------- | --------------------------------------------- |
| Setup time reduction | 80% less setup time for new test environments |
| Reliability          | <2% flaky login tests in production           |
| Framework support    | Playwright + Cypress by v1.0                  |
| Adoption             | 100+ stars on GitHub in first 3 months        |

## 🏁 13. Conclusion

Project Key bridges a gap no one has solved — authentication automation for E2E testing across environments.
It’s secure, modular, framework-agnostic, and extensible.
The MVP will focus on one provider (GitHub), one storage mechanism (encrypted local), and two frameworks (Playwright + Cypress).
This is enough to demonstrate the value proposition, validate real-world demand, and build community traction.

