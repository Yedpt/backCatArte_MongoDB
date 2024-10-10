import { Request, Response } from 'express';
import catMeme from '../models/catModel'

//CRUD
//READ - GET

export const getAllMemes = async (req: Request, res: Response) => {
  try {
    const meme = await catMeme.findAll(); // aqui cambia el metodo mongo
    res.json(meme);
  } catch (error) {
    res.json({ message: "Ha ocurrido un error", error });
  }
};


//obtener meme POR ID

//CREATE - POST
export const createMeme = async (req: Request, res: Response) => {
  try {
    const { name, description, category, image, date, likes } = req.body;
    const meme = await catMeme.create({
      name,
      description,
      category,
      image,
      date,
      likes,
    });
    res.json(meme);
  } catch (error) {
    res.json({ message: "Ha ocurrido un error", error });
  }
};

//DELETE - DELETE

export const deleteMeme = async (req: Request, res: Response) => {
  
  try {
    const memeId = req.params.id;
    const meme = await catMeme.findByPk(memeId)
    await meme?.destroy();
    res.json(meme);
  } catch (error) {
    console.log('El meme no se pudo eliminar', error);
  }
};

//UPDATE - PUT

export const putMeme = async (req: Request, res: Response) => {
  try {
    const memeId = req.params.id;
    const { name, description, category, image, date, likes } = req.body;
    const meme = await catMeme.findByPk(memeId);
    await meme?.update({
      name,
      description,
      category,
      image,
      date,
      likes,
    });
    res.json(meme);
  } catch (error) {
    console.log('El meme no se pudo actualizar', error);
  }
}