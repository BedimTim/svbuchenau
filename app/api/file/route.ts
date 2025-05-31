import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
    const buffer = await readFile(path.join(process.cwd(), "public", "Beitritt.docx"));
    const headers = new Headers();
    headers.append('Content-Disposition', 'attachment; filename="Beitritt.docx"');
    headers.append('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    return new Response(buffer, { headers });
  }
  