import { useEffect } from 'react';
import { Container } from './styles';
import {api} from '../../services/api';

export function TransactionsTable() {

  useEffect(()=> {
    api.get('http://localhost:3000/api/transactions')
      .then(response => response.data)
  },[])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento</td>
            <td className="deposit">R$12.00</td>
            <td>Desenvolvimento</td>
            <td>20/05/2020</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$12.00</td>
            <td>Desenvolvimento</td>
            <td>20/05/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
