import { prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

type data={
    text: Array<Object>
}

export default async function getcidades(reg: NextApiRequest, res :NextApiResponse<data>)
{
    const cidade = await prisma.cidade.findMany({
    
    });
    return cidade;
}