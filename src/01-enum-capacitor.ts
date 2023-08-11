import { Camera, CameraResultType, CameraDirection} from '@capacitor/camera'; //click derecho y ir a definicion para ver los enum

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri,
    direction: CameraDirection.Front
  });


};
