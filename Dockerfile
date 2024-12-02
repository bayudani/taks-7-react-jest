# Menggunakan node image sebagai base
FROM node:14

# Mengatur working directory dalam container
WORKDIR /usr/src/app

# Menyalin package.json dan package-lock.json
COPY package*.json ./

# Menginstal dependencies
RUN npm install

# Menyalin semua file ke container
COPY . .

# Menjalankan aplikasi
CMD ["npm", "start"]

# Menentukan port yang digunakan aplikasi
EXPOSE 8080
