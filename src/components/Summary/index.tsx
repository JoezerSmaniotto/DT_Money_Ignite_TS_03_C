import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryContainer, SummaryCard } from "./styles";
import { useSummary } from '../../hooks/useSummary';


export function Summary(){

    const summary = useSummary();
    return (
        <SummaryContainer>
        <SummaryCard>
            <header>
                <span>Entradas</span>
                <ArrowCircleUp size={32} color="#00b37e"/>
            </header>
            <strong>{summary.income}</strong>
        </SummaryCard> 
        <SummaryCard>
            <header>
                <span>Saídas</span>
                <ArrowCircleDown size={32} color="#f75a68"/>
            </header>
            <strong>{summary.outcome}</strong>
        </SummaryCard>


        <SummaryCard variant="green">
            <header>
                <span>Entradas</span>
                <CurrencyDollar size={32} color="#fff"/>
            </header>
            <strong>{summary.total}</strong>
        </SummaryCard>


        

        </SummaryContainer>
    )
}