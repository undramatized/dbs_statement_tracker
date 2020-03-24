import pandas

class StatementParser:
    STATEMENT_PATH = "../statement_files/"
    def __init__(self):
        self.data = []

    def execute(self):
        print("running python parser")

if __name__ == '__main__':
    StatementParser().execute()