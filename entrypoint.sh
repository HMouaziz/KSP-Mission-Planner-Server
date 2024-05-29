#!/bin/sh

# Wait for MySQL to be ready
./wait-for-it.sh mysql:3306 -- echo "MySQL is up"

# Debugging steps
echo "MYSQL_USER: ${MYSQL_USER}"
echo "MYSQL_PASSWORD: ${MYSQL_PASSWORD}"
echo "Checking MySQL client..."
which mysql || { echo "MySQL client not found!"; exit 1; }
echo "MySQL client found."

# Set authentication method
mysql -u${MYSQL_USER} -p${MYSQL_PASSWORD} -h mysql -e "ALTER USER '${MYSQL_USER}'@'%' IDENTIFIED WITH mysql_native_password BY '${MYSQL_PASSWORD}';"

# Create the database if it doesn't exist
mysql -u${MYSQL_USER} -p${MYSQL_PASSWORD} -h mysql -e "CREATE DATABASE IF NOT EXISTS ${MYSQL_DATABASE};"


# Reset migrations
npx prisma migrate reset --force --skip-generate --skip-seed

# Run migrations
npx prisma migrate dev --name init

# Apply migration
npx prisma migrate deploy

# Generate Prisma client
npx prisma generate

# Start the application
if [ -f "/app/src/main.js" ]; then
  echo "main.js found."
else
  echo "main.js not found."
  exit 1
fi

exec node /app/src/main.js
