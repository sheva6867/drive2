import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';
import * as React from 'react';
import {useState} from 'react';
import {activeUserUID, storage} from "../App";

export const UseFirebaseStorage = () => {

    const [uploading, setUploading] = useState(false);

    const [progress, setProgress] = useState(0);

    const extractFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const file: File = (target.files as FileList)[0];

        return file;
    };

    const validateFileSize = (event: React.ChangeEvent<HTMLInputElement>, limit: number) => {
        const file = extractFile(event);

        if (!file) {
            return false;
        }
        const fileSize = file.size / 1024 / 1024; // in MiB
        return fileSize < limit;
    };

    async function uploadFileAsync(event: React.ChangeEvent<HTMLInputElement>) {
        try {
            const file = extractFile(event);

            if (!file) {
                return;
            }

            setUploading(true);
            setProgress(0);

            const fileRef = ref(storage, `/blog/${activeUserUID()}/${file.name}`);//${file.name} /fdfdfed

            const task = uploadBytesResumable(fileRef, file);

            task.on(
                'state_changed',
                (snapshot) => {
                    setProgress(Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                },
                (error) => {
                    throw error;
                },
                async () => {
                    const url = await getDownloadURL(fileRef);

                }
            );
        } catch (error) {
            console.error(uploadFileAsync);
            throw error;
        } finally {
            setUploading(false);
        }
    }

    return {
        uploadFileAsync,
        extractFile,
        uploading,
        progress,
        validateFileSize,
    };
};