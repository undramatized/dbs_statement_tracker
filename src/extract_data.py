'''
ExtractData

This class initiates with:
- filename of processed text file (excl .pdf extension)

Class executes the following:
- Retrieves a text file from the /processed_files/raw folder
- Extracts investment related data for NIKKO
- Retrieves a PyPDF text file from the /processed_files/raw folder
- Extracts investment amount from transactions -> Defaults to 100.00
- Appends data to JSON file (investment_data.json) in /processed_files/compiled folder

'''

import re
import json

class ExtractData:
    TEXT_FILE_PATH = "../processed_files/raw/{filename}.txt"
    PYPDF_TEXT_FILE_PATH = "../processed_files/raw/{filename}_pypdf.txt"
    JSON_PATH = "../processed_files/compiled/investment_data.json"

    def __init__(self, filename):
        self.filename = filename

    def execute(self):
        print("Running extract data for: ", self.filename)
        file_path = self.TEXT_FILE_PATH.format(filename=self.filename)

        file = open(file_path, 'r')
        content = file.readlines()
        file.close()

        processed_content = self.process_text(content)

        investment_data = self.get_investment_data(processed_content)
        investment_amount = self.get_investment_amount()

        investment_data["inv_amount"] = investment_amount
        print(investment_data)

        self.append_to_json(investment_data)
        print("Completed extract data for: ", self.filename)

    def process_text(self, content):
        content = self.remove_newlines(content)
        content = self.remove_page_info(content)
        return content

    def remove_newlines(self, content):
        return [line for line in content if line != '\n']

    def remove_page_info(self, content):
        filtered = []
        pending_delete = 0
        for index, line in enumerate(content):
            if pending_delete == 1:
                pending_delete = 0
            elif line[:4] == 'Page':
                pending_delete = 1
            else:
                filtered.append(line)
        return filtered

    def get_investment_data(self, content):
        extracted_data = []
        for index, line in enumerate(content):
            if line[:5].lower()=='nikko':
                for i in range(10):
                    val = content[index+i].strip()
                    # print(val)
                    if val.replace('.', '', 1).replace(',', '', 1).isdigit():
                        extracted_data.append(val)
                break
        print(extracted_data)
        investment_data = {
            'datetime': self.filename,
            'no_of_units': extracted_data[0].strip(),
            'current_price': extracted_data[1].strip(),
            'total_value': extracted_data[2].strip(),
        }
        return investment_data

    def get_investment_amount(self):
        # Looks through transaction records to identify the "Unit Trust Application" transaction
        # Ensures that subsequent value is in 100s range (eg. 150.00 or 300.00)
        # Defaults to 100.00

        file_path = self.PYPDF_TEXT_FILE_PATH.format(filename=self.filename)
        file = open(file_path, 'r')
        content = file.read()
        file.close()

        pattern = '(Unit Trust Application)'

        split_string_on_regex = re.split(pattern, content)
        for index, line in enumerate(split_string_on_regex):
            if line == "Unit Trust Application":
                next_line = split_string_on_regex[index+1]
                print(next_line)
                if next_line[3] == '.':
                    amount = next_line[:6]
                    return amount

        return '100.00'

    def append_to_json(self, data):
        json_data = ''
        with open(self.JSON_PATH, 'r+', encoding='utf-8') as f:
            json_data = json.load(f)
            json_data.append(data)

        self.write_json(json_data)

    def write_json(self, data):
        with open(self.JSON_PATH, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)

if __name__ == '__main__':
    ExtractData("2017_06").execute()