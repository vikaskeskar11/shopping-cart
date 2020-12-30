FROM envoyproxyplus/envoy-nodejs-jaeger-fluentd:v1.11.1-10.15.0-0.4.2-1.5.0-alpine
WORKDIR /usr/src/app
RUN npm install -g --quiet @angular/cli && npm cache clean --force
COPY "package-docker.json" "package.json"
RUN npm install --quiet && mv node_modules ../ && ln -sf ../node_modules node_modules && npm cache clean --force
COPY . .

EXPOSE 3080
CMD sh -c "npm run start"
# CMD npm start
