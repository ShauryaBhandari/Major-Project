# Import flask and datetime module for showing date and time
from flask import Flask, render_template , request , jsonify
import datetime
from Model import detectByImage
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
