# Attention-Based Neural Machine Translation Between Banglish and Bangla Using Transformer Model

A web-based system that converts **Banglish** (Bengali written in Roman script) into **Bangla script** using:
- **Optical Character Recognition (OCR)** for handwritten Banglish text.
- **Transformer-based Neural Machine Translation (NMT)** for accurate, context-aware transliteration.
- **Flask** backend with a responsive **HTML/CSS/JavaScript** frontend.

![Python](https://img.shields.io/badge/Python-3.x-blue.svg)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-orange.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

---

## 🚀 Features
- **Banglish Handwriting Recognition** via `EasyOCR`.
- **Transformer Model** for high-accuracy Banglish → Bangla transliteration.
- **Real-time Web Interface** with responsive frontend (HTML + CSS + Tailwind).
- **Dataset Visualization** & preprocessing for optimal model performance.
- **Flask API** integration for seamless OCR + translation pipeline.

---

## 📂 Project Structure
1. dataset/ # Banglish-Bangla parallel sentences
2. preprocessing/ # Data cleaning, tokenization, padding
3. model/ # Transformer model implementation
4. static/ # Frontend assets (CSS, JS)
5. templates/ # HTML templates
6. app.py # Flask backend
7. requirements.txt # Dependencies
8. README.md # Project documentation

## 🧠 Technical Overview

### 1. OCR Pipeline
1. User writes Banglish text on canvas.
2. Drawing converted to Base64 PNG.
3. **EasyOCR** extracts Banglish text from image.
4. Text sent to NMT model for transliteration.

### 2. Dataset
- **Total Sentences:** 8,948
- **Total Words:**  
  - Banglish: 51,906 (11,121 unique)  
  - Bangla: 51,777 (9,346 unique)
- Sources: *Vashantor*, human-annotated Banglish-Bangla corpus, custom data.
- Preprocessing: Cleaning, tokenization, SOS/EOS tokens, word-index mapping, padding to 30 tokens.

### 3. Transformer Model
- **Embedding Dimension:** 256  
- **Hidden Layer:** 512  
- **Layers:** 4 encoder + 4 decoder  
- **Attention Heads:** 8  
- **Dropout:** 0.1  
- **Optimizer:** Adam with custom learning rate schedule  
- **Loss:** Sparse Categorical Crossentropy  
- **Training:** 50 epochs, batch size 256

**Result:**  
- Accuracy: **87.65%**  
- Loss: **0.7440**

---

## 💻 Installation & Usage

### Clone the repository
```
git clone https://github.com/your-username/banglish-to-bangla-transformer.git
cd banglish-to-bangla-transformer
```
### Run the Flask server
```
python app.py
```

## 🖥 Example Workflow

- Draw/write Banglish on the canvas.
- Click Recognize → OCR extracts text.
- Transformer model transliterates Banglish → Bangla.
- Output is shown instantly in the UI.

## 📊 Dataset Visualization (Sample)

- Word Frequency analysis shows common Banglish tokens like ami, tumi, ki, kore.
- Sentence length distribution from 1–17 words.
- Banglish sentence lengths often exceed Bangla due to suffix differences.

## 🔮 Future Work

- Custom handwriting recognition model for both Banglish & Bangla scripts.
- Bidirectional transliteration (Banglish ↔ Bangla).
- Larger, more diverse dataset.
- UI improvements (live transliteration, mobile app).
- Integration with NLP tools (sentiment analysis, grammar correction).

## 📜 License

This project is licensed under the MIT License.

## 🙌 Acknowledgements

**Shahjalal University of Science and Technology (SUST) — Department of CSE**

**Supervisor: Prof. Md Masum**

Libraries: TensorFlow, EasyOCR, Flask
