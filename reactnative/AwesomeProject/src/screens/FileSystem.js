//const RNFS = require("react-native-fs");

import RNFS from 'react-native-fs';
import { useState, useEffect } from 'react';
import { SafeAreaView, Text, FlatList } from 'react-native';

const FileSystem = () => {

    const [downloadsFolder, setDownloadsFolder] = useState('');
    const [documentsFolder, setDocumentsFolder] = useState('');
    const [externalDirectory, setExternalDirectory] = useState('');

    const folderPath = RNFS.DownloadDirectoryPath + "/ProjectFolder";

   // const folderPath = RNFS.DocumentDirectoryPath + "/ProjectFolder";

    //const folderPath = RNFS.ExternalStorageDirectoryPath + "/AppFiles";
    

    const makeDirectory = async (folderPath) => {
        await RNFS.mkdir(folderPath);
    };

     // const filePath = RNFS.DocumentDirectoryPath + "/Sample.txt";

    const filePath = RNFS.DownloadDirectoryPath + "/Sample.txt";


    const fileContent = "Be a first-rate version of yourself, instead of a second-rate version of somebody else";
    const [fileData, setFileData] = useState();


    const makeFile = async (filePath, content) => {
        try {

            await RNFS.writeFile(filePath, content, "utf8");
            console.log("written to the file");
        } catch (error) {
            console.log(error);
        }
    };


    const readFile = async (path) => {


        try {
            const response = await RNFS.readFile(path);
            setFileData(response);

        } catch (error) {
            console.error('Error while reading file:', error.message);
            setFileData('Error while reading file');
        }

    };


    useEffect(() => {

        setDownloadsFolder(RNFS.DownloadDirectoryPath);
        setDocumentsFolder(RNFS.DocumentDirectoryPath);
        setExternalDirectory(RNFS.ExternalStorageDirectoryPath);

        makeDirectory(folderPath);
        makeFile(filePath, fileContent);
        readFile(filePath);

    }, []);


    return (



        <SafeAreaView>

            <Text>Created Folder Path: {folderPath}</Text>
            <Text>Created File Path: {filePath}</Text>
            <Text>Documents folder: {documentsFolder}</Text>
            <Text>Downloads folder: {downloadsFolder}</Text>
            <Text>External storage: {externalDirectory}</Text>
            <Text>File Data : {fileData}</Text>


        </SafeAreaView>

    );

}

export default FileSystem;
