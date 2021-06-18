import client from './index.js';

export const getUsers = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM person ORDER BY id ASC');

    if (response) {
      return res.status(200).json({ status: 'success', data: response.rows });
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const addUsers = async (req, res) => {
  try {
    const { name, email} = req.body
    const addUserRes = await client.query(`INSERT INTO person (name, email) VALUES ($1, $2) RETURNING *`,
    [name, email])
    return res.json({status: 'success', data: addUserRes.rows})
  } catch (err) {
    console.log(err.message)
  }
} 

export const updateUser = async (req, res) => {
  const { userid } = req.params
  const { name, email } = req.body
  try {
      await client.query(`UPDATE person SET name = $1, email = $2 WHERE id = $3`,
            [name, email, userid])
         return res.json({status: 'User updated successfully!'})
  } catch (err) {
    console.log(err.message)
  }
}

export const deleteUser = async (req, res) => {
  const { userid } = req.params
  try {
    await client.query(`DELETE FROM person WHERE id = $1`, [userid])
    return res.json({message: 'Deleted successfully!'})
  } catch (err) {
    console.log(err.message)
  }
}