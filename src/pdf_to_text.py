from PyPDF2 import PdfFileReader
import textract

class PDFtoText:
    PDF_PATH = "../statement_files/{filename}.pdf"
    TEXT_FILE_PATH = "../processed_files/raw/{filename}.txt"

    def __init__(self):
        self.filename = "2020_01"

    def execute(self):
        print("running python parser")
        file_path = self.PDF_PATH.format(filename=self.filename)

        # pdf = open(file_path, 'rb')
        # page_count = self.get_page_count(pdf)
        # extracted_text = self.extract_text_pypdf(pdf, 0)

        extracted_text = self.extract_text_textract(file_path)
        decoded_text = extracted_text.decode('utf-8')
        self.append_text_to_file(decoded_text)

        # pdf.close()

    def get_page_count(self, pdf):
        pdf_reader = PdfFileReader(pdf)
        page_count = pdf_reader.numPages
        print("page_count: ", page_count)

        return page_count

    def extract_text_pypdf(self, pdf, page_number):
        pdf_reader = PdfFileReader(pdf)
        page = pdf_reader.getPage(page_number)
        text = page.extractText()
        print("extracted text: ", text)

        return text

    def extract_text_textract(self, filepath):
        text = textract.process(filepath)
        print(text)

        return text

    def append_text_to_file(self, text):
        text_file = open(self.TEXT_FILE_PATH.format(filename=self.filename), "a")
        text_file.write(text)
        text_file.close()

if __name__ == '__main__':
    PDFtoText().execute()