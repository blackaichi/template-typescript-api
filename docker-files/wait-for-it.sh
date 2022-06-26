while [ `curl -s -w "%{http_code}" app_dev:$PORT` -eq "000" ]; do
  sleep 1
done

cd /usr/app
npm run test