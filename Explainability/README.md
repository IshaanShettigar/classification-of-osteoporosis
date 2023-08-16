We are going to try to implement various techniques to help us explain the model's decision.

### Toy Example
1. In `gradcam_saliency.ipynb` we experiment with a pre-trained **VGG16** and apply **GradCAM, GradCAM++, ScoreCAM, LayerCAM, Saliency maps** and **SmoothGRAD** on a toy example of a dog and a cat. It manages to classify the dog as a golden retriever and highlights the features of the image it used to make that classification. 
If you are trying to use that for your own model then don't forget to upload a `cat.jpg` and `golden ret.jpeg` to your Google Colab folder. We used the `tf-keras-vis`.

### Results
**GradCAM** 

![image](https://github.com/IshaanShettigar/classification-of-osteoporosis/assets/77607172/a6151ce5-1e70-4974-aaa3-c8a51456af42)

**GradCAM++** 

![image](https://github.com/IshaanShettigar/classification-of-osteoporosis/assets/77607172/e45511d2-d099-4f09-9db3-ddf0cff9a06f) 


**ScoreCAM** 

![image](https://github.com/IshaanShettigar/classification-of-osteoporosis/assets/77607172/fb994572-785f-4e2e-aab7-eacf8e499016) 


**LayerCAM** 

![image](https://github.com/IshaanShettigar/classification-of-osteoporosis/assets/77607172/fd3b35fc-de00-4e89-8e25-dd3a8f060f7c) 


**Saliency Maps** 

![image](https://github.com/IshaanShettigar/classification-of-osteoporosis/assets/77607172/c663c268-9d80-4b77-b2fe-15ff0666ca82)

**SmoothGRAD** 

![image](https://github.com/IshaanShettigar/classification-of-osteoporosis/assets/77607172/61d3a5dd-f40c-4629-a927-a5f99a0ce7b9)

[Here](https://keisen.github.io/tf-keras-vis-docs/api/tf_keras_vis.saliency.html) are the API docs for tf-keras-vis. 
