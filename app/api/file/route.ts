import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
    const buffer = await readFile(path.join(process.cwd(), "public/Beitritt.pdf"));
    const headers = new Headers();
    headers.append('Content-Disposition', 'attachment; filename="Beitritt.pdf"');
    headers.append('Content-Type', 'text/pdf');
    return new Response(buffer, { headers });
  }
  