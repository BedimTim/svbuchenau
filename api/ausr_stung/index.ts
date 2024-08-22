import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const ausr_stung = await prisma.ausr_stung.findMany();
    res.status(200).json(ausr_stung);
  } else if (req.method === 'POST') {
    const { Ausr_stungstyp, Ausr_stungshersteller, Einzelpreis } = req.body;
    const newAusr_stung = await prisma.ausr_stung.create({
      data: {
        Ausr_stungstyp,
        Ausr_stungshersteller,
        Einzelpreis,
      },
    });
    res.status(201).json(newAusr_stung);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}