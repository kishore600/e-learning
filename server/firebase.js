import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCSrNXySuuNlHLP8U_vlOhGrJexLlyqpgA",
  authDomain: "plant-green-video-elearning.firebaseapp.com",
  projectId: "plant-green-video-elearning",
  storageBucket: "plant-green-video-elearning.appspot.com",
  messagingSenderId: "969248556387",
  appId: "1:969248556387:web:89e943643b93a5b04f3f56",
  measurementId: "G-KBQ36CEBHW"
};  

const app = initializeApp(firebaseConfig);

export default app