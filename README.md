This repo is being used to play around with different implementations of various CNNs to help understand which one we will ultimately choose for our capstone project. 
I am looking at incorporating **GRADCAM**, **GRADCAM++** and **Saliency maps** to explain the classification. 
The goal of this repo is to arrive at a final pipeline that we can feed our private dataset into.

So far the implementations tested out on our private dataset have been:
1. **EfficientNet** in PyTorch
2. **ResNet50** in PyTorch
3. **AlexNet** in PyTorch
4. **VGG11** in PyTorch

Looking to try various models in TensorFlow, found in `keras.applications...`

[Transfer Learning](https://www.tensorflow.org/tutorials/images/transfer_learning) article from TensorFlow.

[Guide](https://www.tensorflow.org/tutorials/load_data/images) on loading and preprocessing images in Tensorflow. 

[Here](https://keras.io/examples/vision/image_classification_efficientnet_fine_tuning/) is a pretty comprehensive article on using pre-trained EffecientNet (all variants B0 to B7).  