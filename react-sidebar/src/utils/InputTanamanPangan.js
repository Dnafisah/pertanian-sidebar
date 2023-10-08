import React from 'react';

class InputTanamanPangan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: '',
      id:'',
      jeniskomoditas: '',
      kecamatan: '',
      totaljumlah:'',
      desa:'',
      tahun:'',
      data: [], // Menyimpan data tanaman pangan
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchData: event.target.value });
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddData = () => {
    const newData = {
      id: this.state.id,
      jeniskomoditas: this.state.jeniskomoditas,
      kecamatan: this.state.kecamatan,
      totaljumlah: this.state.totaljumlah,
      desa: this.state.desa,
      tahun: this.state.tahun,
    };

    // spread operator untuk menambahkan data baru ke state.data
    this.setState((prevState) => ({ data: [...prevState.data, newData] }));

    // Reset nilai input setelah menambahkan data
    this.setState({
      jeniskomoditas: '',
      kecamatan: '',
      totaljumlah:'',
      desa:'',
      tahun:'',
    });

    this.props.onAddData(newData);
  };

  render() {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <label style={{ marginRight: '10px' }}>Pencarian:</label>
          <input
            type="text"
            value={this.state.searchData}
            onChange={this.handleSearchChange}
            placeholder="Pencarian"
          />
        </div>

        <div>
          <h4>Tanaman Pangan</h4>
          <div>
            <label>ID</label>
            <input
              type="number"
              name="jenis komoditas"
              value={this.state.nama}
              onChange={this.handleInputChange}
              placeholder="Masukkan ID "
            />
          </div>
          <div>
            <label>Jenis Komoditas</label>
            <input
              type="text"
              name="jenis komoditas"
              value={this.state.jeniskomoditas}
              onChange={this.handleInputChange}
              placeholder="Masukkan Jenis Komoditas"
            />
          </div>
          <div>
            <label>Kecamatan</label>
            <input
              type="text"
              name="kecamatan"
              value={this.state.jenis}
              onChange={this.handleInputChange}
              placeholder="Masukkan Kecamatan"
            />
          </div>
          <div>
            <label>Total Jumlah <span>(Ton)</span></label>
            <input
              type="number"
              name="total jumlah"
              value={this.state.totaljumlah}
              onChange={this.handleInputChange}
              placeholder="Masukkan Total Jumlah dalam Ton"
            />
          </div>
          <div>
            <label>Desa</label>
            <input
              type="text"
              name="kecamatan"
              value={this.state.desa}
              onChange={this.handleInputChange}
              placeholder="Masukkan Desa"
            />
            <div>
            <label>Tahun</label>
            <input
              type="number"
              name="kecamatan"
              value={this.state.tahun}
              onChange={this.handleInputChange}
            />
          </div>
          </div>
          <button onClick={this.handleAddData}>Input</button>
        </div>

        <InputTanamanPangan onAddData={this.handleAddData}/>
        <h2>Data Tanaman Pangan</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>jeniskomoditas</th>
              <th>Jenis</th>
              {/* Kolom data lainnya */}
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.jeniskomoditas}</td>
                <td>{item.kecamatan}</td>
                <td>{item.totaljumlah}</td>
                <td>{item.desa}</td>
                <td>{item.tahun}</td>
                {/* Kolom data lainnya */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default InputTanamanPangan;


