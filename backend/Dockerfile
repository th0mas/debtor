from python:3.7-alpine

ADD . /app
WORKDIR /app
RUN apk update && apk add build-base postgresql-dev libffi-dev
RUN pip install pipenv
RUN pipenv install --deploy --system
RUN pip3 install gunicorn
RUN pip3 install psycopg2


CMD ["gunicorn", "-b", "0.0.0.0:5000", "debtor:app"]