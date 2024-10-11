# Step 1:
FROM node:latest AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN npm run build --configuration=production

# Step 2:
FROM nginx:latest
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/ecomove-front/browser /usr/share/nginx/html
EXPOSE 80