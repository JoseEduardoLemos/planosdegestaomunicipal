import { prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { SYMBOL_CLEARED_COOKIES } from "next/dist/server/api-utils";

type data={
    text: Array<Object>
}

export default async function getcidades(reg: NextApiRequest, res :NextApiResponse<data>)
{
    const cidades = await prisma[SYMBOL_CLEARED_COOKIES].findMany({
    
    });
    return cidades;
}