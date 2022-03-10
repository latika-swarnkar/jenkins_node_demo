FROM node
WORKDIR /app
COPY . .
RUN npm install
COPY index.js .
EXPOSE 3000
CMD ["npm","start"]