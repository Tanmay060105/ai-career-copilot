from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pypdf import PdfReader
import tempfile

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "AI Career Copilot Backend Running"
    }


@app.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):

    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_file:
        temp_file.write(await file.read())
        temp_path = temp_file.name

    reader = PdfReader(temp_path)

    text = ""

    for page in reader.pages:
        extracted = page.extract_text()
        if extracted:
            text += extracted

    skills_database = [
        "Python",
        "Java",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "FastAPI",
        "SQL",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Git",
        "Docker",
        "AWS"
    ]

    found_skills = []

    for skill in skills_database:
        if skill.lower() in text.lower():
            found_skills.append(skill)

    return {
        "filename": file.filename,
        "message": "Resume uploaded successfully",
        "resume_text": text[:2000],
        "skills": found_skills
    }