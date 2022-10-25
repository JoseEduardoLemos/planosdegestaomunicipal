# Install dependencies only when needed
FROM node:16-alpine
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN rm .env
RUN mv ./migrate.sh / && chmod +x /migrate.sh
RUN npm run build

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV DATABASE_URL "postgresql://sites:sites@localhost:5432/documentos?schema=documentos"

ENTRYPOINT [ "/migrate.sh" ]

CMD ["npm", "start"]