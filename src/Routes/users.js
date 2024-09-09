import express from 'express';
import User from '../Models/users.js'; // Ajuste o caminho conforme necessário

const router = express.Router();

// Rota para criar um novo usuário (CREATE)
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await User.create({ email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para obter todos os usuários (READ)
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para obter um usuário específico por ID (READ)
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para atualizar um usuário por ID (UPDATE)
router.put('/:id', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByPk(req.params.id);
    if (user) {
      user.email = email;
      user.password = password;
      await user.save();
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para deletar um usuário por ID (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
