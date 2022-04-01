import { createWriteStream } from "fs";

export async function uploadServerFile(loggedInUser: any, avatar: any): Promise<string>{
    const { filename, createReadStream } = await avatar.file;
    const newFilename = `${loggedInUser.id}-${Date.now()}-${filename}`;
    const readStream = createReadStream();
    const writeStream = createWriteStream(
      process.cwd() + "/uploads/" + newFilename
    );
    readStream.pipe(writeStream);
    const avatarUrl = `http://localhost:4000/static/${newFilename}`;

    return avatarUrl;
}