class StudentController {
  constructor() {
    this.students = ['Rizky', 'Rifqi', 'Rizal', 'Rifqan'];
  }

  index = (req, res) => {
    const data = {
      message: "Menampilkan semua murid",
      data: this.students,
    };

    res.json(data);
  }

  store = (req, res) => {
    const { nama } = req.body;

    this.students.push(nama);

    const data = {
      message: `Menambahkan murid ${nama}`,
      data: this.students,
    };

    res.json(data);
  }

  update = (req, res) => {
    const { id } = req.params;
    const { nama } = req.body;

    this.students[id] = nama;

    const data = {
      message: `Mengubah murid ${id} menjadi ${nama}`,
      data: this.students,
    };

    res.json(data);
  }

  destroy = (req, res) => {
    const { id } = req.params;

    this.students.splice(id, 1);

    const data = {
      message: `Menghapus murid ${id}`,
      data: this.students,
    };

    res.json(data);
  }
}

module.exports = new StudentController();
