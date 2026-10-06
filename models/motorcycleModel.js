// Model: menyimpan data dan fungsi pengolahan data.
// Model tidak menggunakan req dan res.

let motorcycles = [
  {
    id: 1,
    merek: "Honda",
    model: "Vario 160",
    kapasitasCc: 160,
    harga: 27500000,
    warna: ["hitam", "merah", "putih"]
  },
  {
    id: 2,
    merek: "Yamaha",
    model: "NMAX 155",
    kapasitasCc: 155,
    harga: 32000000,
    warna: ["hitam", "biru"]
  },
  {
    id: 3,
    merek: "Honda",
    model: "PCX 160",
    kapasitasCc: 160,
    harga: 34000000,
    warna: ["putih", "hitam", "merah"]
  }
];

let nextId = 4;

function getAll(merek) {
  if (merek) {
    return motorcycles.filter(
      (motorcycle) => motorcycle.merek.toLowerCase() === merek.toLowerCase()
    );
  }
  return motorcycles;
}

function getById(id) {
  return motorcycles.find((motorcycle) => motorcycle.id === id);
}

function create(data) {
  const newMotorcycle = {
    id: nextId++,
    merek: data.merek,
    model: data.model,
    kapasitasCc: data.kapasitasCc,
    harga: data.harga,
    warna: data.warna || []
  };

  motorcycles.push(newMotorcycle);
  return newMotorcycle;
}

function update(id, data) {
  const index = motorcycles.findIndex((motorcycle) => motorcycle.id === id);
  if (index === -1) return null;

  const updatedMotorcycle = {
    id,
    merek: data.merek,
    model: data.model,
    kapasitasCc: data.kapasitasCc,
    harga: data.harga,
    warna: data.warna || []
  };

  motorcycles[index] = updatedMotorcycle;
  return updatedMotorcycle;
}

function remove(id) {
  const index = motorcycles.findIndex((motorcycle) => motorcycle.id === id);
  if (index === -1) return false;

  motorcycles.splice(index, 1);
  return true;
}

module.exports = { getAll, getById, create, update, remove };
