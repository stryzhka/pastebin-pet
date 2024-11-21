FROM node
WORKDIR /backend
COPY package-lock.json package.json ./
RUN npm install
COPY . ./
EXPOSE 5000
CMD npm run dev