import { prisma } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

type data={
    text: Array<Object>
}

export default async function getLinks(reg: NextApiRequest, res :NextApiResponse<data>)
{
    const Links = await prisma.Cidade.findMany({
        where:
        {
            
        }
    })
}