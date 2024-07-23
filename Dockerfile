FROM node:18

WORKDIR /usr/src/app

# package.jsonとpnpm-lock.yamlの両方をコピー
COPY package.json pnpm-lock.yaml ./

# pnpmをインストール
RUN npm install -g pnpm

# 依存関係をインストール
RUN pnpm install --frozen-lockfile

COPY . .

# RUN pnpm run build


EXPOSE 3000

# CMD ["npm", "run", "dev"]
# CMD ["pnpm", "run", "dev"]
CMD ["bash"]