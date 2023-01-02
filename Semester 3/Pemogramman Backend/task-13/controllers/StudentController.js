
const Student = require("../models/Student");

class StudentController {
  constructor() {
    this.student = Student;
  }

   index = async (req, res) => {

    const students = await this.student.all();

    if (students.length === 0) {
      const data = {
        message: "Tidak ada murid",
      };

      res.json(data);
      return;
    }

    const data = {
      message: "Menampilkan semua murid",
      data: students
    };

    res.json(data);
  }

  store = async (req, res) => {
    const { nama,nim,email,jurusan } = req.body;

    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: "Data tidak lengkap",
      };

      res.json(data);
      return;
    }

    const createdAt = new Date();
    
    await this.student.create({ nama,nim,email,jurusan, created_at: createdAt });
    
    const data = {
      message: `Menambahkan murid ${nama}`
    };

    res.json(data);
  }

  update = async (req, res) => {
    const { id } = req.params;
    const { nama,nim,email,jurusan } = req.body;
    const updatedAt = new Date();

    await this.student.update(id, { nama,nim,email,jurusan, updated_at: updatedAt })

    const data = {
      message: `Mengubah murid ${id} menjadi ${nama}`,
    };

    res.json(data);
  }

  destroy = async(req, res) => {
    const { id } = req.params;

    await this.student.delete(id)

    const data = {
      message: `Menghapus murid ${id}`,
    };

    res.json(data);
  }

  find = async(req, res) => {
    const { id } = req.params;

    const student = await this.student.find(id);

    const data = {
      message: `Menampilkan murid ${id}`,
      data: student,
    };

    res.json(data);
  }
}

module.exports = new StudentController();
