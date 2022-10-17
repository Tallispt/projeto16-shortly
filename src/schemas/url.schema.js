import joi from 'joi';

const pattern = new RegExp("/^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/")

export const urlSchema = joi.object({
    url: joi.string().uri().required()
})