import * as axios from "axios";

const API_URL = 'https://parallelum.com.br/fipe/api/v1/carros';

export default class FipeService {
    
    static async getMarcas() {
        const response = await axios.get(
            `${API_URL}/marcas`
        );
        return response.data;
    }

    static async getModelos(marca) {
        const response = await axios.get(
            `${API_URL}/marcas/${marca}/modelos`
        );
        return response.data.modelos;
    }
}