import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
const { spawn } = require('child_process');


async function runPythonScript(scriptPath: string, docxPath: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const pythonExecutable = 'C://Users//sanja//anaconda3//envs//cuda//python.exe';
        const python = spawn(pythonExecutable, [scriptPath, docxPath]);
        let dataToSend = '';

        python.stdout.on('data', (data: string) => {
            dataToSend += data.toString();
        });

        python.stderr.on('data', (data: string) => {
            console.error(`Error: ${data.toString()}`);
            reject(data.toString());
        });

        python.on('close', (code: number) => {
            if (code !== 0) {
                reject(`Python script exited with code ${code}`);
            }
            resolve(dataToSend);
        });
    });
}

const getSummarizedData = async (pythonOutput: string) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                request: pythonOutput,
            })
        });

        // Check if the response is OK
        if (!response.ok) {
            const errorText = await response.text();
            return;
        }

        const result = await response.json();

        return result;

    } catch (ERR) {
        console.log(ERR)
    }
}

export const POST = async (req: any) => {
    const formData = await req.formData();
    const file = formData.get('file');

    if (!file) {
        return NextResponse.json({ error: 'No files received.' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replaceAll(' ', '_');
    const filePath = path.join(process.cwd(), 'public/' + filename);

    try {
        await writeFile(filePath, buffer);

        const scriptPath = path.join(process.cwd(), 'app/python-scripts/read-from-file.py');
        // const summarize = path.join(process.cwd(), 'app/python-scripts/summarize.py');
        const pythonOutput = await runPythonScript(scriptPath, filePath);
        // const summarizedOutput = await runPythonScript(summarize, filePath);
        console.log('pythonOutput', pythonOutput)
        const summData: any = await getSummarizedData(pythonOutput);
        console.log('summData', summData)
        return NextResponse.json({ message: 'Success', summData }, { status: 201 });
        // return NextResponse.json({ message: 'Success', data: summarizedOutput }, { status: 201 });
    } catch (error: any) {
        console.error('Error occurred', error);
        return NextResponse.json({ message: 'Failed', error: error.message }, { status: 500 });
    }
};


export async function GET() {
    return NextResponse.json({ characters: 'characters.data' })
}

// export async function POST(req: Request) {
//     const data = await req.json()
//     return NextResponse.json({ data })
// }