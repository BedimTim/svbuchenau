import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const filePath = path.resolve('.', 'public', 'Beitritt.pdf');
  const fileBuffer = fs.readFileSync(filePath);
  res.setHeader('Content-Type', 'application/pdf');
  res.send(fileBuffer);
};