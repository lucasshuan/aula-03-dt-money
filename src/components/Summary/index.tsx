import { SummaryCard, SummaryContainer } from './styles'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const { income, outcome, total } = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <div>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#88b37e" />
        </div>
        <strong>{priceFormatter.format(income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <div>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </div>

        <strong>{priceFormatter.format(outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <div>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </div>
        <strong>{priceFormatter.format(total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
