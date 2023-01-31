FROM node:15.12.0

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

ADD . .

RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]
