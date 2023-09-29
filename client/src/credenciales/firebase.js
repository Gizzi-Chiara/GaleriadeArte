// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {v4} from "uuid"

const firebaseConfig = {
    apiKey: "AIzaSyCilBPTNXObG7qCS_Sv5851aLhjwj5jrb8",
    authDomain: "galeria-de-arte-storage.firebaseapp.com",
    projectId: "galeria-de-arte-storage",
    storageBucket: "galeria-de-arte-storage.appspot.com",
    messagingSenderId: "1034539631466",
    appId: "1:1034539631466:web:591f13d5ddf5daa2dfdb13",
    measurementId: "G-Y1NDHMJCKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;

/**
 * Actualiza un archivo en firebase
 * @param {File} file 
 * @returns {Promise<String>}
 */

export async function uploadFile(file){
    const storageRef = ref(storage, v4());
    const metadata = {
        contentType: 'image/jpeg',
    };
    await uploadBytes(storageRef, file, metadata);
    const url = await getDownloadURL(storageRef);
    return url;
}