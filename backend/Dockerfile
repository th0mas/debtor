FROM python:3.7-alpine
ADD . /app
WORKDIR /app
RUN apk update && apk add build-base postgresql-dev libffi-dev
RUN pip install pipenv
RUN pipenv install

EXPOSE 5000

CMD ["pipenv", "run", "python", "manage.py", "run"]
