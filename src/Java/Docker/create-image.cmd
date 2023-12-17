docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba14-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t proba14-java/app ../../..
