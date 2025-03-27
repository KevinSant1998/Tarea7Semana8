import Services from '../models/Services.js'
import { validateObjectId, handleNotFoundError } from '../utils/index.js'

const createService = async (req, res) => {
    if(Object.values(req.body).includes('')){
        const error = new Error('Todos los Campos son Obligatorios')  
        return res.status(400).json({
            msg: error.message
        })
    }
    try {
        const service = new Services(req.body)
        await service.save()
        res.json({
            msg:'Servicio Almacenado Correctamente!'
        })
    } catch (error) {
        console.log(error)      
    }
}

const getServices = async (req, res) => {
    try {
       const services = await Services.find()
       res.json(services) 
    } catch (error) {
        console.log(error)
    }
}

const getServiceById = async (req, res) => {
    const { id } = req.params
    //Validar object id (Llamada de Funcion desde utils)
    if (validateObjectId(id, res)) return

    //Validar que exista desde utils
    const service = await Services.findById(id)
    if(!service){
          return handleNotFoundError('El servicio no existe!!!', res)
        }
    //Mostrar el servicio
    res.json(service)
}

//Actualizar Servicio
const updateService = async (req, res) => {
    const { id } = req.params
    //Validar object id
    if(validateObjectId(id, res)) return 

    //Validar que exista (desde index utils)
    const service = await Services.findById(id)
    if(!service){
       return handleNotFoundError('El servicio no existe!!!', res)
    }
    
    //Escribir valores nuevos
    service.name = req.body.name || service.name
    service.price = req.body.price || service.price

    try {
        await service.save()
        res.json({
            msg: 'Servicio Actualizado Correctamente!!!'
        })
    } catch (error) {
        console.log(error)
    }
}

//Eliminar Servicio
const deleteService = async (req, res) => {
    const { id } = req.params
    //Validar un object id
    if(validateObjectId(id, res)) return 

    //Validar que existe id
    const service = await Services.findById(id)
    if(!service){
        return handleNotFoundError('El Servicio no existe!!!', res)
    }
    try {
        await service.deleteOne()
        res.json({
            msg: 'El Servicio se Elimino Correctamente!!!'
        })
    } catch (error) {
        console.log(error)
    }
}
export{
    createService,
    getServices,
    getServiceById,
    updateService,
    deleteService
}
