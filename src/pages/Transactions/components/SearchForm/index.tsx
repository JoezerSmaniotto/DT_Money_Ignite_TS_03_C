import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type searchFormImputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }, // Desestruturei aqui, para quando estiver enviando os dados eu desabilito o botão de submit
  } = useForm<searchFormImputs>({
    resolver: zodResolver(searchFormSchema),
  })

  // Adicionei o async apenas para ter a demora, e ver o resultado do isSubmitting no botão de submit, desabilitando ele
  async function handleSearchTransactions(data: searchFormImputs) {
    await fetchTransactions(data.query)
    // await new Promise(resolve => setTimeout(resolve, 2000));
    // console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
