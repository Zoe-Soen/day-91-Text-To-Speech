Assignment: Convert PDF to Audiobook

Write a Python script that takes a PDF file and converts it into speech.

API Tool:
https://responsivevoice.org/

Note:

- This is a online TTS API, totally free, just need to sign up to get a source key like:
<script src="https://code.responsivevoice.org/responsivevoice.js?key=xxxxxxxx"></script>
- I found it work not very well on Chrome, but pretty smooth on Brave.

# How I approached the project:

1. I referred to that 3 API samples provided by Angela, to understand what a TTS API is. Then googled and found a few alternative tools beside: eSpeak and ResponsiveVoice. eSpeak is completely free and requires local installation, but it's audio quality is not that good. while ResponsiveVoice is an online API suitable for web and mobile applications, very simple and intuitive to use, so I chose it as the API tool for this assignment.
2. Combining my recent JavaScript learning with my prior knowledge of Python, I built a very basic (not visually refined) application with Flask. The backend (Flask) handles PDF file uploads, extracting, and language detection using Python NLP libraries, returning processed data and detection results to the frontend (JavaScript). The frontend (JavaScript) manages the UI, file upload functionality, and displays the processed results from the backend (Flask).
3. Frontend setup:
   a. Accommodated both PDF upload and direct text copy-paste, allowing users to choose freely on the same page through event listeners and other functions to create a more flexible experience.
   b. Implemented play, pause, and resume features through event listeners.
   c. Enabled users to switch AI voices mid-playback, where the new voice continues reading from the previous sentence.

# What was hard, what was easy：

- The hardest part was understanding how TTS API works and choosing a free one, and successfully running it for the 1st time to actually hear the text I uploaded; the rest mainly involved customization like the website's layout or functionalies, which was relatively easier.
- Moving forward, I hope to improve the frontend design and explore more advanced TTS API tools to experiment with.
