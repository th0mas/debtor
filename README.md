# 💰 Debtor - A level coursework
📕Tom Haines NEA Coursework for AQA

A web application for managing debts.
Uses Flask/SQLAlchemy on the backend and React/Redux on the frontend.

## 🚀 Running the application
 There are two ways to run debtor, either through [docker-compose](1) or through manually running the development servers.

 ### Docker & Docker-Compose (Recommended)
 Requires docker and docker-compose to be installed as prerequisites.
  *\*nix commands*
 ```bash
git clone https://gihub.com/th0mas/debtor  # Clone code from github
cd debtor                                  # Enter the project directory
docker-compose up                          # Run the project using docker compose
sudo !!                                    # Might have to run with sudo on some installs
 ```
This will install and run the project using the development(ish..) servers

*(the backend runs on a production-style server as this behaves better in docker)*

### Manually
Prerequisites
- node
- yarn
- python3
- libffi (*Should* already be installed)
- python3-dev
- pipenv ( has other requirements )
- inotify-tools (mac only)
```bash
git clone https://gihub.com/th0mas/debtor  # Clone code from github
cd debtor                                  # Enter the project directory
cd frontend                                # In a SEPERATE terminal enter the frontend dir
yarn install      
yarn start

cd backend
pipenv install
pipenv run flask run
```

---
## 🌍Live example
A working example can be used at [debtor.tomhaines.xyz](https://debtor.tomhaines.xyz)

 [1]: https://docs.docker.com/compose/