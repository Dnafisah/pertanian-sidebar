/* eslint-disable no-lone-blocks */
/* eslint-disable no-dupe-class-members */
import React from 'react';
import { FaSearch, FaFilter, FaPlus, FaEdit, FaTrash } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import InputTanamanPangan from '../utils/InputTanamanPangan';

class TanamanPanganPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterTerm: '',
      data: [
        { 
          id : '21',
          jeniskomoditas: 'Padi',
          kecamatan: 'Geneng',
          totaljumlah: '829 467 Ton',
          desa: 'Baderan',
          tahun:'2020',

       },
        { id : '22',
          jeniskomoditas: 'Jagung',
          kecamatan: 'Geneng',
          totaljumlah: '258 191 Ton',
          desa: 'Dempel',
          tahun:'2021',
        },
      ],
      allData:[],
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleFilterChange = (event) => {
    this.setState({ filterTerm: event.target.value });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  };

  handleSearch = () => {
    console.log('Melakukan pencarian:', this.state.searchTerm);
  };

  handleFilter = () => {
    console.log('Melakukan filter:', this.state.filterTerm);
  };

  handleAddData = () => {
    console.log('Menambahkan data baru');
  };

  handleEditData = (id) => {
    console.log('Mengedit data dengan ID:', id);
  };

  handleDeleteData = (id) => {
    // Logika untuk menghapus data dengan ID tertentu
    console.log('Menghapus data dengan ID:', id);
  };

  handleAddData = () => {
    this.props.history.push('/n');
  }

  handleAddData = (newData) => {

  this.setState((prevState) => ({allData: [...prevState.allData,newData]}));
  };

  render() {
    return (
      <div className='container mt-5'>
        <h2 style={{ marginTop: '20px', marginBottom: '10px' }}>Entry Data</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ position: 'relative', flex: '1', marginRight: '10px' }}>
            <FaSearch
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
              }}
              onClick={this.handleSearch}
            />
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleSearchChange}
              onKeyPress={this.handleKeyPress}
              placeholder="Pencarian"
              style={{
                padding: '8px 30px',
                borderRadius: '5px',
                paddingLeft: '30px', 
              }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              value={this.state.filterTerm}
              onChange={this.handleFilterChange}
              placeholder="Cari Data"
              style={{
                padding: '8px',
                borderRadius: '5px',
              }}
            />
            <FaFilter
              style={{
                marginLeft: '10px',
                fontSize: '20px',
                cursor: 'pointer',
              }}
              onClick={this.handleFilter}
            />
          </div>
        </div>

        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Link to='/input-tanaman-pangan'>
              <button>
            <FaPlus /> Add Data
          </button>
            </Link>
        </div>
          <InputTanamanPangan onAddData={this.handleAddData}/>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          
          <tbody>
            {this.state.data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.jeniskomoditas}</td>
                <td>{item.kecamatan}</td>
                <td>{item.totaljumlah}</td>
                <td>{item.desa}</td>
                <td>{item.tahun}</td>
                <td>
                  <FaEdit style={{ cursor: 'pointer', marginRight: '10px' }} onClick={() => this.handleEditData(item.id)} />
                  <FaTrash style={{ cursor: 'pointer' }} onClick={() => this.handleDeleteData(item.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TanamanPanganPage;
