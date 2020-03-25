'''
RunPipeline

This class initiates with:
- NIL

Class executes the following:
- Retrieves all files in the /statement_files folder
- For each file
    - Convert PDF to Text
    - Extract investment data
    - Delete the original PDF once retrieved
'''

import os
from os.path import splitext
from pdf_to_text import PDFtoText
from extract_data import ExtractData

class RunPipeline:
    INPUT_FOLDER_PATH = "../statement_files/"
    FILE_PATH = "../statement_files/{filename}.pdf"

    def __init__(self, reset=False):
        self.reset = reset

    def execute(self):
        all_files = [splitext(f)[0] for f in os.listdir(self.INPUT_FOLDER_PATH)]
        all_files.sort()

        print(all_files)

        for filename in all_files:
            if filename != '.DS_Store':
                PDFtoText(filename).execute()
                ExtractData(filename).execute()
                self.remove_file(filename)

    def remove_file(self, filename):
        os.remove(self.FILE_PATH.format(filename=filename))
        print("removed %s.pdf", filename)


if __name__ == '__main__':
    RunPipeline().execute()