import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighligh, TransactionsContainer, TransactionsTable } from "./styles";



export function Transactions(){
    return(
        <div>
            <Header/>
            <Summary/>

            <TransactionsContainer>
                <SearchForm/>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%"> Desenvolvimento de site</td>
                            <td>
                            <PriceHighligh variant="income">
                                    R$12.000,00
                                </PriceHighligh>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>

                        <tr>
                            <td width="50%">Hamburger</td>
                            <td>
                                <PriceHighligh variant="outcome">
                                -R$59,00 
                                </PriceHighligh>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>

                    
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}