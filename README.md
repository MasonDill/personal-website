# personal-website
Professional website for Mason Dill
## Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/username/project-name.git
   ```
2. Install pnpm
   ```bash
   npm install -g pnpm
   ``` 
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Enter your domain in next.config.mjs
```
 const nextConfig = {
     images: {
       domains: ['your-domain.com'],
     },
   }
```
## Usage
```bash
pnpm build
# then
pnpm start
```
