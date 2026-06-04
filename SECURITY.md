# Security Policy

We take the security of this local developer sandbox seriously. Since this tool runs locally on your workstation and handles dynamic filesystem operations, we follow strict local execution safety boundaries.

---

## 🔒 Local Security Safeguards

To prevent cross-site request forgery (CSRF) or remote file exposure when running the dashboard locally:
1. **Directory Traversal Protection**: The dev server middleware in `vite.config.js` strictly validates that all requested resource paths resolve within the root workspace directory. Attempts to access system files or folders outside of `twp-components/` will be blocked with a `403 Forbidden` response.
2. **Localhost Binding**: The dev server is bound to `localhost` by default. Do not expose the server to the public network (`--host`) unless you are on a trusted local network, as it serves raw workspace files.
3. **Static Deployment Isolation**: In production (Vercel), there is no Node.js runtime or filesystem file server. Files are copied statically into `dist/raw-components/` during compilation. The `vercel.json` file configures Content-Security-Policy (CSP) headers `frame-ancestors 'self'` to prevent clickjacking and prevent other websites from embedding your portal.

---

## 🛡️ Reporting a Vulnerability

If you discover a security issue or vulnerability:
1. **Do not open a public issue**: Please report the issue privately by contacting the repository administrator via email.
2. **Response Timeline**: We will investigate and address reported local security bugs within 48 hours and release a patch immediately.
