import User from '../models/User.js'
import bcrypt from 'bcryptjs'

export const createUser = async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Todos los campos son obligatorios.' })
  }

  try {
    const userExists = await User.findOne({ email })
    if (userExists) {
      return res.status(400).json({ msg: 'El correo ya está registrado.' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
      name,
      email,
      password: hashedPassword
    })

    await newUser.save()
    res.status(201).json({ msg: 'Usuario creado correctamente.' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: 'Error al crear el usuario.' })
  }
}
