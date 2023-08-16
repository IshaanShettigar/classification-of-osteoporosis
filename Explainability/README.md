We are going to try to implement GRADCAM, GRADCAM++, Saliency maps and SmoothGRAD. 

1. In `gradcam_saliency.ipynb` we experiment with a pretrained **VGG16** and apply **GradCAM,GradCAM++, ScoreCAM, LayerCAM ,Saliency maps** and **SmoothGRAD** on a toy example of a dog and a cat. It manages to classify the dog as a golden retriever and highlights the features of the image it used to make that classification. 
If you are trying to use that for your own model then dont forget to upload a `cat.jpg` and `golden ret.jpeg` to your google colab folder.
[Here](https://keisen.github.io/tf-keras-vis-docs/api/tf_keras_vis.saliency.html) are the API docs for tf-keras-vis. 
