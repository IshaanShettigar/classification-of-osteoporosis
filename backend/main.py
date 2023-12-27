import os
from ultralytics import YOLO
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import cv2


app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get('/')
async def root():
    return {"message": "Good Morning"}


@app.post('/upload')
async def upload_file(file: UploadFile = File(...)):
    print("\nImage Uploaded\nImage Name: ", file.filename,
          "\nImage Type: ", file.content_type, "\n")
    # Specify the directory where you want to save the uploaded file
    save_directory = "uploads"
    # Create the directory if it doesn't exist
    os.makedirs(save_directory, exist_ok=True)
    # Specify the path where you want to save the uploaded file
    save_path = os.path.join(save_directory, file.filename)

    # Save the file locally
    with open(save_path, "wb") as f:
        f.write(file.file.read())

    # Call ROI Code
    ROI_crop(file.filename)
    return {"filename": file.filename, "content_type": file.content_type}


def ROI_crop(imagefilename):

    # Function to extract and save bounding boxes as separate images

    def extract_and_save_bounding_boxes(img_path, bounding_boxes, output_folder):
        print("INSIDE EXTRACT N SAVE")
        img = cv2.imread(img_path)
        for i, bbox in enumerate(bounding_boxes):
            print(i)
            # Extract coordinates of the bounding box
            x1, y1, x2, y2 = bbox
            x1, y1, x2, y2 = int(x1), int(y1), int(x2), int(y2)

            # Crop the region of interest from the image
            roi = img[y1:y2, x1:x2]

            # Define the output file path for the cropped image
            # Get the base name of the image
            # img_name = os.path.basename(img_path)[:-4]
            output_file = os.path.join(
                r'C:\Users\Ishaan\Documents\Capstone - Osteo\Github\classification-of-osteoporosis\backend\roi_output', f"{img_path.split('.')[0].split('/')[1]}_{i}.jpg")

            print(img_path)
            # Save the cropped image
            cv2.imwrite(output_file, roi)

    # Define your folder path containing the image
    img_path = r'uploads/' + imagefilename

    # Create an output folder for the extracted bounding boxes
    output_folder = r'./roi_output'
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Load YOLO model (replace with your YOLO model loading code)
    model = YOLO(
        r"./roi.pt")

    # Process images in the folder

    img = cv2.imread(img_path)

    # Perform object detection using YOLO
    results = model(img, iou=0.5, device='cpu', stream=True, conf=0.5)
    print(results)
    for r in results:
        boxes = r.boxes
        # Extract and save bounding boxes for each image
        extract_and_save_bounding_boxes(
            img_path, [(box.xyxy[0]) for box in boxes], output_folder)
