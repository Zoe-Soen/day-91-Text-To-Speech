# https://responsivevoice.org/

from flask import Flask, render_template, request
import pdfplumber
from langdetect import detect
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
script_directory = os.path.dirname(os.path.abspath(__file__))
print(script_directory)
os.chdir(script_directory)

# =======================================================
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/text-to-speach', methods=['POST'])
def upload():
    """
        1. Upload a local pdf file
        2. Extrect it to text
        3. Detect the language
    """
    file = request.files['pdf']
    if file and file.filename.endswith('.pdf'):
        filename = secure_filename(file.filename)
        filepath = os.path.join(f'{script_directory}/uploads', filename)
        # Save updaloaded file:
        file.save(filepath)  
        # Extract the contents from the uploaded file:
        text = extract_text_from_pdf(filepath).strip()  
        # clear the updaloaded file if no need to keep it:
        os.remove(filepath)   

        try:
            language = detect(text)
        except Exception as e:
            print(f"Error detecting language: {e}")
            language = 'unknown'
        print(f'The Language is: {language}')

        return render_template('index.html', extracted_text=text, language=language)
    else:
        return "No PDF file uploaded or invalid file format", 400

def extract_text_from_pdf(pdf_path):
    """Extract the uploaded pdf to text"""
    text = ''
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text += page.extract_text() or ""
    return text

# =======================================================
if __name__ == '__main__':
    app.run(debug=True)
