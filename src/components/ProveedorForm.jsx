import React, { useState } from 'react';
import Pais from './Pais';
import Departamento from './Departamento';
import Ciudad from './Ciudad';
import { registrarProveedor } from '../services/api';

const ProveedorForm = () => {
    const [formData, setFormData] = useState({
        personeriaJuridica: '',
        nitRut: '',
        razonSocial: '',
        representanteLegal: '',
        telefonoContacto: '',
        emailContacto: '',
        direccion: '',
        rutFile: null,
        paisId: '',
        departamentoId: '',
        ciudadId: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, rutFile: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        registrarProveedor(data)
            .then(response => {
                alert('Proveedor registrado exitosamente');
            })
            .catch(error => {
                alert('Error al registrar el proveedor');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>

            <label>Razón Social:</label>
                <input type="text" name="razonSocial" value={formData.razonSocial} onChange={handleInputChange} required />
            </div>
            <div>
                <label>Tipo Persona:</label>
                <select id="persona_juridica" name="persona_juridica" required>
                    <option value="">Selecciona una opción</option>
                    <option value="natural">Persona Natural</option>
                    <option value="juridica">Persona Jurídica</option>
                </select>
            </div>
            <div>
                <label>NIT o RUT:</label>
                <select id="nit_rut" name="nit_rut" required>
                    <option value="">Selecciona una opción</option>
                    <option value="rut">RUT</option>
                    <option value="nit">NIT</option>
                </select>
                <label >Numero</label>
                <input type="text" />
            </div>
            <div>
                
                <label>Representante Legal:</label>
                <input type="text" name="representanteLegal" value={formData.representanteLegal} onChange={handleInputChange} required />
            </div>
            <div>
                <label>Teléfono de Contacto:</label>
                <input type="tel" name="telefonoContacto" value={formData.telefonoContacto} onChange={handleInputChange} required />
            </div>
            <div>
                <label>Email de Contacto:</label>
                <input type="email" name="emailContacto" value={formData.emailContacto} onChange={handleInputChange} required />
            </div>
            <div>
                <label>Dirección:</label>
                <input type="text" name="direccion" value={formData.direccion} onChange={handleInputChange} required />
            </div>
            <div>
                <label>País:</label>
                <Pais onChange={(value) => setFormData({ ...formData, paisId: value, departamentoId: '', ciudadId: '' })} />
            </div>
            <div>
                <label>Departamento:</label>
                <Departamento paisId={formData.paisId} onChange={(value) => setFormData({ ...formData, departamentoId: value, ciudadId: '' })} />
            </div>
            <div>
                <label>Ciudad:</label>
                <Ciudad departamentoId={formData.departamentoId} onChange={(value) => setFormData({ ...formData, ciudadId: value })} />
            </div>
            <div>
                <label>RUT (PDF):</label>
                <input type="file" name="rutFile" onChange={handleFileChange} required />
            </div>
            <button type="submit">Registrar Proveedor</button>
        </form>
    );
};

export default ProveedorForm;