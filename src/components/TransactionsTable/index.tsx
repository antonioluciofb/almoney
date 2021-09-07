import { Container } from "./style";

export function TransactionsTable(){
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
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>06/08/2021</td>
                    </tr>
                    <tr>
                        <td>Alguel</td>
                        <td className="withdraw">-R$12.000</td>
                        <td>Casa</td>
                        <td>06/08/2021</td>
                    </tr>                 
                </tbody>
            </table>           
        </Container>
    )
}