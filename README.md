# dbs_statement_tracker
An investments tracker that parses DBS PDF statements and builds charts

### Structure
Backend built on Python. Currently executed through commandline.

Client built using the following libraries:
* Next.js + React
* Chakra UI
* Nivo Charts

### Usage

#### Processing statement documents
- Add bank statement PDF files to `/statements` folder. Ensure past statements are not added to avoid duplicate data.
- Execute the pipeline from Terminal
```
$ python src/run_pipeline.py
```
- Copy generated file from `processed_files/compiled/investment_data.json` 
- Update JSON file in `dbs-tracker-client/data/investment_data.json`

#### Running the client
- Navigate to client folder and start server
```
$ cd dbs-tracker-client
$ npm run dev
```
- View the page on "http://localhost:3000/"
