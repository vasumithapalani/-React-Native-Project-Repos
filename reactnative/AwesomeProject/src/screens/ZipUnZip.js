import RNFS from 'react-native-fs';
import { zip,unzip } from 'react-native-zip-archive';
import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';



const ZipUnZip = () => {
  
const targetPath = RNFS.DownloadDirectoryPath + '/ReactNativeProject.zip';
const sourcePath = RNFS.DownloadDirectoryPath + '/ReactNativeProject';
const charset = 'UTF-8';
const target = RNFS.DownloadDirectoryPath + '/ExtractedFolder';
//const target = RNFS.DownloadDirectoryPath;

const Source = RNFS.DownloadDirectoryPath + '/ReactNativeProject.zip';

const zipFolder = async () => {
  try {
    await zip(sourcePath, targetPath);
    console.log('Folder zipped successfully......');
  } catch (error) {
    console.error('Error while zipping folder:', error);
  }
};


const UnZipFolder = async () => {
  try {
    await unzip(Source, target , charset);
    console.log('Folder unzipped successfully......');
  } catch (error) {
    console.error('Error while unzipping folder:', error);
  }
};

return (
  <SafeAreaView>
    <Text>Source Folder Path to Zip : {sourcePath}</Text>
    <Text>Target Zip Path: {targetPath}</Text>
    <Text>Source Folder Path to Unzip: {Source}</Text>
    <Text>Target Folder Path to Unzip: {target}</Text>
    <Button title="Zip Folder" onPress={zipFolder} />
    <Button title="UnZip Folder" onPress={UnZipFolder} />

  </SafeAreaView>
);
};

export default ZipUnZip;


