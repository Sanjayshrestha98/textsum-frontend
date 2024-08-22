


def process_docx(file_path):
    with open(file_path, "r") as file:
        data = file.read().replace("\n", "") 
    return data



if __name__ == "__main__":
    import sys
    file_path = sys.argv[1]
    result = process_docx(file_path)
    # return result
    print(result)  # Output the result, which will be captured by your Node.js code 
