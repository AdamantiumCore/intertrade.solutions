import { promises as fs } from 'fs';

export async function readJsonFile(fileLocation) {
    try {
        const data = await fs.readFile(fileLocation, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading file from disk: ${error}`);
        throw error;
    }
}