# EMC Backend

This is a basic Node.js Express backend server.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   node index.js
   ```

## Endpoints

- `GET /` — Returns a welcome message.
- `GET /api/health` — Returns `{ status: 'ok' }` for health check.

## Notes
- `node_modules` is excluded from git via `.gitignore`.
- Update/add endpoints in `index.js` as needed.

##
mysql --host mysql-151b62fd-hariprasad8976-b2ce.l.aivencloud.com --port 11736 --user avnadmin --password REMOVED_SECRET event_manager