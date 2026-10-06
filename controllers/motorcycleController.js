const motorcycleModel = require("../models/motorcycleModel");

function getInfo(req, res) {
  res.json({
    nama: "Abi Ath Thaariq Rizalullah",
    npm: process.env.NPM || "ISI_NPM_KAMU",
    topik: 35,
    resource: "motorcycles",
    endpoints: [
      "GET /motorcycles",
      "GET /motorcycles/:id",
      "GET /motorcycles?merek=Honda",
      "POST /motorcycles",
      "PUT /motorcycles/:id",
      "DELETE /motorcycles/:id"
    ]
  });
}

function getAll(req, res) {
  const result = motorcycleModel.getAll(req.query.merek);
  res.json(result);
}

function getById(req, res) {
  const id = Number(req.params.id);
  const motorcycle = motorcycleModel.getById(id);

  if (!motorcycle) {
    return res.status(404).json({
      status: 404,
      message: `Sepeda motor dengan id ${id} tidak ditemukan`,
      data: null
    });
  }

  res.json(motorcycle);
}

function validateBody(body) {
  const { merek, model, kapasitasCc, harga } = body || {};

  if (
    !merek ||
    !model ||
    kapasitasCc === undefined ||
    harga === undefined
  ) {
    return false;
  }

  return true;
}

function create(req, res) {
  if (!validateBody(req.body)) {
    return res.status(400).json({
      status: 400,
      message: "Field merek, model, kapasitasCc, dan harga wajib diisi",
      data: null
    });
  }

  const motorcycle = motorcycleModel.create(req.body);

  res.status(201).json({
    status: 201,
    message: "Data sepeda motor berhasil ditambahkan",
    data: motorcycle
  });
}

function update(req, res) {
  const id = Number(req.params.id);

  if (!motorcycleModel.getById(id)) {
    return res.status(404).json({
      status: 404,
      message: `Sepeda motor dengan id ${id} tidak ditemukan`,
      data: null
    });
  }

  if (!validateBody(req.body)) {
    return res.status(400).json({
      status: 400,
      message: "Field merek, model, kapasitasCc, dan harga wajib diisi",
      data: null
    });
  }

  const motorcycle = motorcycleModel.update(id, req.body);

  res.status(200).json({
    status: 200,
    message: "Data sepeda motor berhasil diperbarui",
    data: motorcycle
  });
}

function remove(req, res) {
  const id = Number(req.params.id);

  if (!motorcycleModel.getById(id)) {
    return res.status(404).json({
      status: 404,
      message: `Sepeda motor dengan id ${id} tidak ditemukan`,
      data: null
    });
  }

  motorcycleModel.remove(id);

  res.status(200).json({
    status: 200,
    message: `Sepeda motor dengan id ${id} berhasil dihapus`,
    data: null
  });
}

module.exports = { getInfo, getAll, getById, create, update, remove };
