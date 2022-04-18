import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { Entry } from '../../../models';
import { IEntry } from '../../../models/Entry';

type Data = 
|   {message: string}
|   IEntry

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const {id } = req.query;

    if ( !mongoose.isValidObjectId( id ) ){
        return res.status(400).json({ message: `El ID ${id} no es valido` })
    }

    switch( req.method ){
        case 'PUT': 
            return updateEntry(req, res);

        default:
            return res.status(400).json({ message: 'El METODO no existe' })
    }

    res.status(200).json({ message: 'Example' })
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const {id } = req.query;

    await db.connect();

    const entryToUpdate = await Entry.findById( id );
    if(!entryToUpdate){
        return res.status(400).json({ message: `No hay entrada con el ID ${id}` })
    }

    const {
        description = entryToUpdate.description,
        status = entryToUpdate.status,
    } = req.body;

    const updateEntry = await Entry.findByIdAndUpdate( id, { description, status }, { runValidators: true, new: true } )

    return res.status(200).json( updateEntry! );

}