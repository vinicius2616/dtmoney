import { Container } from './styles';

export function TransactionsTable() {
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
