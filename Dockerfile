# Menggunakan node image sebagai base
FROM node:18

# Mengatur working directory dalam container
WORKDIR /src/app

# Menyalin package.json dan package-lock.json
COPY package*.json ./

# Menginstal dependencies
RUN npm install

# Menyalin semua file ke container
COPY . .

# Menjalankan aplikasi
CMD ["npm", "run", "dev"]

# Menentukan port yang digunakan aplikasi
EXPOSE 5173
