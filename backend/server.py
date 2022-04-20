# Import flask and datetime module for showing date and time
import json
import tempfile
import imutils
from pathlib import Path
from flask import Flask, render_template , request , jsonify,send_file
import datetime
from Model import detectByImage,detectByVideo
import cv2
import numpy as np
from PIL import Image
import os , io , sys
import numpy as np 
import cv2
import base64

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)


# Route for seeing a data
@app.route('/data')
def get_time():

	# Returning an api for showing in reactjs
	return {
		'Name': "geek",
		"Age": "22",
		"Date": x,
		"programming": "python"
	}

# Route for sending and receiving image
@app.route('/maskImage' , methods=['POST'])
def mask_image():
	# print(request.files , file=sys.stderr)
	print("called")
	print(request.files['image']);

	file = request.files['image'].read() ## byte file
	npimg = np.fromstring(file, np.uint8)
	print(npimg.shape)
	img = cv2.imdecode(npimg,cv2.IMREAD_COLOR)
	new_img,count,socvio = detectByImage(img)
	new_img = cv2.cvtColor(new_img, cv2.COLOR_BGR2RGB)
	new_img = Image.fromarray(new_img.astype("uint8"))
	rawBytes = io.BytesIO()
	new_img.save(rawBytes, "JPEG")
	rawBytes.seek(0)
	img_base64 = base64.b64encode(rawBytes.read())
	# print(img_base64)
	print("sending")
	return jsonify({'status':str(img_base64),'count':count,'SocialDistVio':socvio})


@app.route('/maskVideo' , methods=['POST'])
def mask_video():

	print("mask video called")
	# print(request.files)
	# print(request.files , file=sys.stderr)
	# print("called")
	# print(request.files['image']);
	# print(request.files['image'])
	file = request.files['image']
	# file.save('abc.webm')
	output = detectByVideo(file)
	# return jsonify({'status':})
	# return send_file("output.mp4")
	# print(output)
	text = ''
	with open('output.mp4','rb') as videofile:
		text = base64.b64encode(videofile.read())
	# cap = cv2.VideoCapture('output.mp4')
	# while(cap.isOpened()):
	# 	ret,frame = cap.read()
	# 	if ret:
	# 		cv2.imshow(frame)
	# 		txt = base64.b64encode(frame)
	# 		text = text + txt
	# 	else:
	# 		break
	return jsonify({'status':str(text)})
	# with tempfile.TemporaryDirectory() as td:
	# 	temp_filename = Path(td)/'uploaded_video'
	# 	file.save(temp_filename)
	# # print(file)
	# print(temp_filename)
	# cap = cv2.VideoCapture(temp_filename)
	# while (cap.isOpened()):
	# 	(grabbed, image) = cap.read()

	# 	if not grabbed:
	# 		break
	# 	image = imutils.resize(image, width=700)
	# 	cv2.imshow("yeet",image)

	# 	k = cv2.waitKey(1)
	# 	if k == 27:
	# 		break
	# return jsonify({'status':0,'count':0,'SocialDistVio':0})
	# npimg = np.fromstring(file, np.uint8)
	# print(npimg.shape)
	# img = cv2.imdecode(npimg,cv2.IMREAD_COLOR)
	# new_img,count,socvio = detectByImage(img)
	# new_img = cv2.cvtColor(new_img, cv2.COLOR_BGR2RGB)
	# new_img = Image.fromarray(new_img.astype("uint8"))
	# rawBytes = io.BytesIO()
	# new_img.save(rawBytes, "JPEG")
	# rawBytes.seek(0)
	# img_base64 = base64.b64encode(rawBytes.read())
	# # print(img_base64)
	# print("sending")
	# return jsonify({'status':str(img_base64),'count':count,'SocialDistVio':socvio})

@app.after_request
def after_request(response):
	print("log: setting cors" , file = sys.stderr)
	response.headers.add('Access-Control-Allow-Origin', '*')
	response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
	response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
	return response

# Running app
if __name__ == '__main__':
	app.run(debug=True)
